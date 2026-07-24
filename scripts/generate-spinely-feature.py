#!/usr/bin/env python3
"""Generate the Spinely feature graphic (1024x500) in the OPDSy house style.

Warm espresso gradient, DM Serif Display wordmark, accent dots and feature
keywords on the left; three real screenshots in phone mockups on the right.

Everything is rendered at 2x and downscaled with Lanczos so rounded corners
and text stay smoothly anti-aliased (no pixelated edges).
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter

SS = 2  # supersampling factor
W, H = 1024 * SS, 500 * SS

SERIF = "/Users/Faesel.Saeed/Code/faesel/spinely/assets/fonts/DMSerifDisplay-Regular.ttf"
BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
REG = "/System/Library/Fonts/Supplemental/Arial.ttf"

SHOTS = "/Users/Faesel.Saeed/Code/faesel/binary-meadow/public/screenshots/spinely"
OUT = "/Users/Faesel.Saeed/Code/faesel/binary-meadow/public/apps/spinely-feature.png"

# Spinely palette (from the app theme).
CREAM = (251, 248, 242)
TAGLINE = (231, 212, 168)
KEYWORD = (198, 176, 138)
DOTS = [(199, 145, 61), (138, 90, 43), (94, 140, 90), (123, 95, 196)]


def font(path, sz):
    return ImageFont.truetype(path, sz * SS)


def gradient(size, top, bottom):
    w, h = size
    base = Image.new("RGB", size, top)
    over = Image.new("RGB", size, bottom)
    mask = Image.new("L", size)
    px = mask.load()
    for y in range(h):
        v = int(255 * (y / h))
        for x in range(w):
            px[x, y] = v
    base.paste(over, (0, 0), mask)
    return base


def rounded_mask(size, radius):
    """Anti-aliased rounded-rectangle mask (rendered 4x then downsampled)."""
    up = (size[0] * 4, size[1] * 4)
    m = Image.new("L", up, 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, up[0], up[1]], radius=radius * 4, fill=255)
    return m.resize(size, Image.LANCZOS)


def phone(shot_path, screen_w):
    """Build an RGBA phone mockup around a screenshot at the given screen width."""
    screen_w *= SS
    src = Image.open(shot_path).convert("RGB")
    sw, sh = src.size
    screen_h = round(screen_w * sh / sw)
    screen = src.resize((screen_w, screen_h), Image.LANCZOS)
    screen.putalpha(rounded_mask((screen_w, screen_h), 26 * SS))

    bezel = 10 * SS
    ow, oh = screen_w + bezel * 2, screen_h + bezel * 2
    frame = Image.new("RGBA", (ow, oh), (0, 0, 0, 0))
    body = Image.new("RGBA", (ow, oh), (16, 12, 8, 255))
    body.putalpha(rounded_mask((ow, oh), 36 * SS))
    frame.alpha_composite(body)
    frame.alpha_composite(screen, (bezel, bezel))
    return frame


def shadow(layer, blur, alpha=150):
    a = layer.split()[3].point(lambda p: min(p, alpha))
    black = Image.new("RGBA", layer.size, (0, 0, 0, 0))
    black.paste((0, 0, 0), (0, 0), a)
    return black.filter(ImageFilter.GaussianBlur(blur * SS))


img = gradient((W, H), (58, 39, 20), (28, 19, 10)).convert("RGBA")
d = ImageDraw.Draw(img)

# --- Right: three overlapping phone mockups (bleed past top/bottom edges) ---
phones = [
    (f"{SHOTS}/1.1-shelves.jpg", 176, 548, 78),
    (f"{SHOTS}/3-library.jpg", 196, 676, 44),
    (f"{SHOTS}/1-shelves.jpg", 212, 812, 20),
]
for path, sw, x, y in phones:
    p = phone(path, sw)
    x, y = x * SS, y * SS
    img.alpha_composite(shadow(p, 22), (x + 18 * SS, y + 22 * SS))
    img.alpha_composite(p, (x, y))

# --- Left: wordmark, tagline, accent dots, keywords ---
LX = 64 * SS
d.text((LX - 2 * SS, 96 * SS), "Spinely", font=font(SERIF, 104), fill=CREAM)

tf = font(REG, 30)
for i, line in enumerate(["Scan spines, sort &", "visualise your shelves."]):
    d.text((LX, (232 + i * 40) * SS), line, font=tf, fill=TAGLINE)

dot_y, r, gap = 342 * SS, 11 * SS, 34 * SS
for i, c in enumerate(DOTS):
    cx = LX + r + i * gap
    d.ellipse([cx - r, dot_y - r, cx + r, dot_y + r], fill=c)

d.text((LX, 424 * SS), "Local-only  \u00b7  Barcode scan  \u00b7  Visual shelves",
       font=font(BOLD, 20), fill=KEYWORD)

out = img.convert("RGB").resize((W // SS, H // SS), Image.LANCZOS)
out.save(OUT, quality=95)
print(f"wrote {OUT} ({W // SS}x{H // SS})")
