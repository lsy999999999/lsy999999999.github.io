"""Package the static homepage and give each CV revision a distinct public URL."""

import hashlib
from pathlib import Path
import re
import shutil


def build_site(root: Path) -> None:
    cv_name = "Shiyu_Liu_Academic_CV_v5.pdf"
    cv_bytes = (root / cv_name).read_bytes()
    version = hashlib.sha256(cv_bytes).hexdigest()[:12]
    versioned_name = f"{Path(cv_name).stem}.{version}.pdf"
    html, link_count = re.subn(
        rf'(href=["\']){re.escape(cv_name)}(?:\?[^"\']*)?(["\'])',
        rf'\g<1>{versioned_name}\g<2>',
        (root / "index.html").read_text(encoding="utf-8"),
    )
    if not link_count:
        raise ValueError("No CV link found in index.html; refusing to publish.")

    dist = root / "dist"
    if dist.exists():
        shutil.rmtree(dist)
    dist.mkdir()
    (dist / "index.html").write_text(html, encoding="utf-8")
    # Keep the original URL available for existing bookmarks.
    (dist / cv_name).write_bytes(cv_bytes)
    (dist / versioned_name).write_bytes(cv_bytes)
    (dist / ".nojekyll").touch()

    assets = [
        Path("styles.css"),
        Path("site.js"),
        Path("public/favicon.svg"),
        Path("figures/036e1a4b024d4f23b9a19026ae9fa17a.jpg"),
        Path("public/papers/stable-matching-probabilistic-preferences.pdf"),
        *(path.relative_to(root) for path in (root / "figures").glob("life-*.webp")),
    ]
    for asset in assets:
        destination = dist / asset
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(root / asset, destination)
    print(f"Built homepage with CV: {versioned_name}")


if __name__ == "__main__":
    build_site(Path(__file__).resolve().parents[1])
