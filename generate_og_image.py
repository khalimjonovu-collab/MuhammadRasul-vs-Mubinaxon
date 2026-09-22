#!/usr/bin/env python3
"""
Ijtimoiy tarmoqlarda (Telegram, WhatsApp, Facebook) havola ulashilganda
ko'rinadigan preview rasmini yaratadi (assets/images/og-cover.jpg).

Ism yoki sanani o'zgartirsangiz, quyidagi qiymatlarni (va js/config.js ni)
yangilab, qayta ishga tushiring:  python3 generate_og_image.py
"""

from PIL import Image, ImageDraw, ImageFont

GROOM_NAME = "Aziz"
BRIDE_NAME = "Malika"
DATE_TEXT = "12-sentabr, 2026-yil"
EYEBROW_TEXT = "TO'Y TAKLIFNOMASI"

WIDTH, HEIGHT = 1200, 630
OUT_PATH = "assets/images/og-cover.jpg"

GOLD = (200, 162, 94)
GOLD_DARK = (130, 100, 55)
IVORY_TOP = (253, 250, 244)
IVORY_BOTTOM = (240, 225, 189)
TEXT_DARK = (60, 50, 38)


def vertical_gradient(size, top, bottom):
    w, h = size
    base = Image.new("RGB", size, top)
    top_arr = top
    bottom_arr = bottom
    for y in range(h):
        t = y / (h - 1)
        r = int(top_arr[0] + (bottom_arr[0] - top_arr[0]) * t)
        g = int(top_arr[1] + (bottom_arr[1] - top_arr[1]) * t)
        b = int(top_arr[2] + (bottom_arr[2] - top_arr[2]) * t)
        ImageDraw.Draw(base).line([(0, y), (w, y)], fill=(r, g, b))
    return base


def font(path, size):
    return ImageFont.truetype(path, size)


def centered_text(draw, y, text, f, fill, tracking=0):
    if tracking:
        text = (" " * 0).join(list(text))
        text = f"{tracking * ' '}".join(list(text)) if False else text
    bbox = draw.textbbox((0, 0), text, font=f)
    w = bbox[2] - bbox[0]
    x = (WIDTH - w) / 2
    draw.text((x, y), text, font=f, fill=fill)
    return w


def tracked(text, spaces=3):
    return (" " * spaces).join(list(text))


def main():
    img = vertical_gradient((WIDTH, HEIGHT), IVORY_TOP, IVORY_BOTTOM)
    draw = ImageDraw.Draw(img)

    # thin gold frame
    margin = 28
    draw.rectangle(
        [margin, margin, WIDTH - margin, HEIGHT - margin],
        outline=GOLD, width=2
    )

    georgia = "/System/Library/Fonts/Supplemental/Georgia.ttf"
    didot = "/System/Library/Fonts/Supplemental/Didot.ttc"

    eyebrow_font = font(georgia, 24)
    names_font = font(didot, 96)
    amp_font = font(didot, 64)
    date_font = font(georgia, 34)

    centered_text(draw, 150, tracked(EYEBROW_TEXT, 4), eyebrow_font, GOLD_DARK)

    # names row: "Groom & Bride" with ampersand smaller/gold
    names_text = f"{GROOM_NAME} & {BRIDE_NAME}"
    bbox = draw.textbbox((0, 0), names_text, font=names_font)
    total_w = bbox[2] - bbox[0]
    start_x = (WIDTH - total_w) / 2
    y_names = 230

    x = start_x
    for part, f, color in [
        (f"{GROOM_NAME} ", names_font, TEXT_DARK),
        ("& ", amp_font, GOLD),
        (BRIDE_NAME, names_font, TEXT_DARK),
    ]:
        draw.text((x, y_names), part, font=f, fill=color)
        w = draw.textbbox((0, 0), part, font=f)[2]
        x += w

    # divider line
    line_y = 400
    draw.line([(WIDTH / 2 - 90, line_y), (WIDTH / 2 - 30, line_y)], fill=GOLD, width=2)
    draw.line([(WIDTH / 2 + 30, line_y), (WIDTH / 2 + 90, line_y)], fill=GOLD, width=2)
    draw.ellipse([WIDTH / 2 - 8, line_y - 8, WIDTH / 2 + 8, line_y + 8], outline=GOLD, width=2)

    centered_text(draw, 430, DATE_TEXT, date_font, TEXT_DARK)

    rgb = img.convert("RGB")
    rgb.save(OUT_PATH, "JPEG", quality=90)
    print(f"Saqlandi: {OUT_PATH}")


if __name__ == "__main__":
    main()
