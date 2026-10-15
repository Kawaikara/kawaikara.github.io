"""Retain assets from recent Pages builds for cached HTML and open browser tabs."""
import argparse
import json
from pathlib import Path, PurePosixPath
import shutil
import tarfile

MANIFEST = 'pages-current-assets.json'


def record_current(dist):
    assets = sorted(p.relative_to(dist).as_posix() for p in (dist / '_astro').rglob('*') if p.is_file())
    (dist / MANIFEST).write_text(json.dumps(assets) + '\n')


def restore_assets(archive, dist):
    restored = 0
    with tarfile.open(archive) as bundle:
        members = {m.name.removeprefix('./'): m for m in bundle.getmembers() if m.isfile()}
        manifest = members.get(MANIFEST)
        # Older deployments predate the manifest; their own assets are safe to retain once.
        assets = json.load(bundle.extractfile(manifest)) if manifest else members.keys()
        for name in assets:
            path = PurePosixPath(name)
            if path.is_absolute() or '..' in path.parts or not path.parts or path.parts[0] != '_astro':
                continue
            member = members.get(name)
            destination = dist / path
            if member is None or destination.exists():
                continue
            destination.parent.mkdir(parents=True, exist_ok=True)
            with bundle.extractfile(member) as source, destination.open('wb') as target:
                shutil.copyfileobj(source, target)
            restored += 1
    return restored


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('dist', type=Path)
    parser.add_argument('--archive', type=Path)
    args = parser.parse_args()
    if args.archive:
        print(f'Retained {restore_assets(args.archive, args.dist)} previous assets')
    else:
        record_current(args.dist)
