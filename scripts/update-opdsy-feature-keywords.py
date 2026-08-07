#!/usr/bin/env python3
"""Replace the keyword strip at the bottom of the OPDSy feature graphic.

SUPERSEDED — DO NOT RUN. Kept only as a record of how the previous artwork was
patched.

This edits fixed pixel coordinates in the *old* OPDSy feature graphic, which had
a keyword strip at (59, 423) over a smooth vertical gradient. That artwork has
been replaced by the "trio, fanned stack" design, which has no keyword strip and
a black ground with device frames. Running this now would stamp a stray line of
text over the new graphic and rebuild a band of background that is no longer a
clean gradient.

The feature graphic is now generated in the OPDSy repo — see
`store/scripts/generate-feature-graphics.mjs` and `store/feature-graphics/`
there. Change the copy at source and re-export rather than patching pixels here.

Original note follows.

The original line read "OPDS reader · Self-hosted · Private sync", which implied
OPDSy only reads OPDS servers. OPDSy is also a local reader, so the strip is
rewritten to lead with on-device files.

The band behind the text is rebuilt by interpolating vertically between the two
clean rows either side of it, which reproduces the background gradient exactly.
"""
import sys

from PIL import Image, ImageDraw, ImageFont

sys.exit(
    "update-opdsy-feature-keywords.py is superseded and would damage the current "
    "feature graphic. See the module docstring."
)

TARGETS = [
    "public/apps/opdsy-feature.png",
    "/Users/Faesel.Saeed/Code/faesel/opdsy/store/feature_graphic.png",
]

FONT = "/System/Library/Fonts/Helvetica.ttc"
SIZE = 20
COLOUR = (139, 147, 161)
TEXT = "Local files · OPDS servers · Private sync"

X, Y = 59, 423
TOP, BOTTOM = 419, 448  # clean anchor rows either side of the old text
CLEAR_X = (0, 460)


def rebuild_band(im):
    px = im.load()
    x0, x1 = CLEAR_X
    span = BOTTOM - TOP
    for x in range(x0, x1):
        top = px[x, TOP]
        bottom = px[x, BOTTOM]
        for y in range(TOP + 1, BOTTOM):
            t = (y - TOP) / span
            px[x, y] = tuple(round(a + (b - a) * t) for a, b in zip(top, bottom))


def main():
    font = ImageFont.truetype(FONT, SIZE)
    for path in TARGETS:
        im = Image.open(path).convert("RGB")
        rebuild_band(im)
        ImageDraw.Draw(im).text((X, Y), TEXT, font=font, fill=COLOUR)
        im.save(path)
        print(f"updated {path}")


if __name__ == "__main__":
    main()
