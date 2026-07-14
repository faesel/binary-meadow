#!/usr/bin/env python3
"""Generate Open Graph images (1200x630) for the site and each app."""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
REG = "/System/Library/Fonts/Supplemental/Arial.ttf"

GREEN_950 = (12, 36, 28)
GREEN_800 = (22, 67, 47)
GREEN_300 = (127, 184, 159)
CREAM = (241, 248, 244)

# Dark theme (matches app feature graphics)
INK_DARK = (8, 10, 14)
INK_NAVY = (21, 26, 36)
INK_MUTED = (150, 162, 178)
ACCENT_PILLS = [
    (245, 183, 46),   # amber
    (53, 192, 232),   # cyan
    (232, 72, 60),    # red
    (124, 77, 232),   # purple
]


def vgradient(size, top, bottom):
    w, h = size
    base = Image.new("RGB", size, top)
    top_img = Image.new("RGB", size, bottom)
    mask = Image.new("L", size)
    md = mask.load()
    for y in range(h):
        v = int(255 * (y / h))
        for x in range(w):
            md[x, y] = v
    base.paste(top_img, (0, 0), mask)
    return base


def diagonal_gradient(size, dark, light):
    """Near-black to navy toward the top-right corner (matches feature graphic)."""
    w, h = size
    img = Image.new("RGB", size)
    px = img.load()
    for y in range(h):
        for x in range(w):
            t = ((x / w) + ((h - y) / h)) / 2
            px[x, y] = tuple(
                int(dark[i] + (light[i] - dark[i]) * t) for i in range(3)
            )
    return img


def font(path, sz):
    return ImageFont.truetype(path, sz)


def wrap(draw, text, fnt, max_w):
    words = text.split()
    lines, cur = [], ""
    for word in words:
        test = (cur + " " + word).strip()
        if draw.textlength(test, font=fnt) <= max_w:
            cur = test
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def rounded(img, radius):
    mask = Image.new("L", img.size, 0)
    d = ImageDraw.Draw(mask)
    d.rounded_rectangle([0, 0, img.size[0], img.size[1]], radius=radius, fill=255)
    out = img.convert("RGBA")
    out.putalpha(mask)
    return out


def make_home():
    img = vgradient((W, H), GREEN_950, GREEN_800).convert("RGBA")
    d = ImageDraw.Draw(img)
    mark = Image.open("public/apps/binary-meadow-mark-light.png").convert("RGBA")
    mark.thumbnail((150, 150))
    img.paste(mark, (90, 80), mark)
    d.text((90, 250), "Binary Meadow", font=font(BOLD, 96), fill=(255, 255, 255))
    d.text((94, 366), "Thoughtful software, grown with care.",
           font=font(REG, 40), fill=GREEN_300)
    d.text((94, 500), "Jannah Builder   \u00b7   OPDSy   \u00b7   GridWatch",
           font=font(BOLD, 32), fill=CREAM)
    d.rectangle([0, 0, W, 10], fill=(45, 122, 95))
    img.convert("RGB").save("public/og/binary-meadow.png", quality=92)
    print("home OG")


def make_app(slug, name, tagline, icon_path, platform_label):
    img = Image.new("RGBA", (W, H), CREAM + (255,))
    d = ImageDraw.Draw(img)
    d.rectangle([0, 0, 18, H], fill=(45, 122, 95))
    icon = Image.open(icon_path).convert("RGBA")
    icon.thumbnail((300, 300))
    icon = rounded(icon, 56)
    img.paste(icon, (96, (H - icon.size[1]) // 2), icon)
    tx = 96 + icon.size[0] + 70
    d.text((tx, 150), name, font=font(BOLD, 84), fill=GREEN_950)
    lines = wrap(d, tagline, font(REG, 38), W - tx - 90)
    y = 270
    for ln in lines:
        d.text((tx, y), ln, font=font(REG, 38), fill=(56, 70, 63))
        y += 52
    pill = platform_label.upper()
    pf = font(BOLD, 26)
    pw = d.textlength(pill, font=pf)
    d.rounded_rectangle([tx, y + 20, tx + pw + 56, y + 78], radius=29,
                        fill=(224, 239, 232))
    d.text((tx + 28, y + 35), pill, font=pf, fill=(31, 92, 70))
    mark = Image.open("public/apps/binary-meadow-mark.png").convert("RGBA")
    mark.thumbnail((70, 70))
    img.paste(mark, (W - 190, H - 100), mark)
    d.text((W - 110, H - 84), "Binary", font=font(BOLD, 22), fill=GREEN_800)
    d.text((W - 110, H - 58), "Meadow", font=font(BOLD, 22), fill=GREEN_800)
    img.convert("RGB").save(f"public/og/{slug}.png", quality=92)
    print(f"{slug} OG")


def make_app_dark(slug, name, tagline, icon_path, meta_label):
    """Dark-themed OG aligned with the app's black feature graphic."""
    img = diagonal_gradient((W, H), INK_DARK, INK_NAVY).convert("RGBA")
    d = ImageDraw.Draw(img)

    # Icon, right side, softly framed
    icon = Image.open(icon_path).convert("RGBA")
    icon.thumbnail((320, 320))
    icon = rounded(icon, 64)
    ix = W - icon.size[0] - 110
    iy = (H - icon.size[1]) // 2
    glow = Image.new("RGBA", (icon.size[0] + 48, icon.size[1] + 48), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.rounded_rectangle([0, 0, glow.size[0], glow.size[1]], radius=88,
                         fill=(255, 255, 255, 16))
    img.alpha_composite(glow, (ix - 24, iy - 24))
    img.paste(icon, (ix, iy), icon)

    # Wordmark + tagline, left
    tx = 96
    d.text((tx, 150), name, font=font(BOLD, 110), fill=CREAM)
    lines = wrap(d, tagline, font(REG, 40), ix - tx - 60)
    y = 300
    for ln in lines:
        d.text((tx, y), ln, font=font(REG, 40), fill=INK_MUTED)
        y += 56

    # Accent pills row (mirrors the feature graphic)
    pill_y = y + 34
    px = tx
    for colour in ACCENT_PILLS:
        d.rounded_rectangle([px, pill_y, px + 66, pill_y + 16], radius=8, fill=colour)
        px += 82

    # Meta line
    d.text((tx, pill_y + 52), meta_label, font=font(BOLD, 26), fill=INK_MUTED)

    # Binary Meadow mark, bottom-right
    mark = Image.open("public/apps/binary-meadow-mark-light.png").convert("RGBA")
    mark.thumbnail((64, 64))
    img.alpha_composite(mark, (W - 210, H - 92))
    d.text((W - 132, H - 84), "Binary", font=font(BOLD, 22), fill=CREAM)
    d.text((W - 132, H - 58), "Meadow", font=font(BOLD, 22), fill=CREAM)

    img.convert("RGB").save(f"public/og/{slug}.png", quality=92)
    print(f"{slug} OG (dark)")


make_home()
make_app("jannah-builder", "Jannah Builder",
         "Watch your spiritual journey grow.",
         "public/apps/jannah-builder.png", "Android")
make_app_dark("opdsy", "OPDSy", "Your self-hosted library, unified.",
              "public/apps/opdsy.png",
              "OPDS reader  \u00b7  Self-hosted  \u00b7  Private sync")
make_app("gridwatch", "GridWatch", "See every AI-assisted session.",
         "public/apps/gridwatch.png", "macOS & Windows")
