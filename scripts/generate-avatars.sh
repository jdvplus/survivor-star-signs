#!/bin/bash
#
# Generates -avatar.jpg files from .png source photos.
# Crops a square from the top of the image (preserves heads).
# Requires ffmpeg.
#
# Usage:
#   ./scripts/generate-avatars.sh              # process only missing avatars
#   ./scripts/generate-avatars.sh --all        # regenerate all avatars

PUBLIC_DIR="$(cd "$(dirname "$0")/../public" && pwd)"
FORCE_ALL=false

if [[ "$1" == "--all" ]]; then
  FORCE_ALL=true
fi

if ! command -v ffmpeg &>/dev/null; then
  echo "Error: ffmpeg is required. Install with: brew install ffmpeg"
  exit 1
fi

count=0
skipped=0

for png in "$PUBLIC_DIR"/*/*.png; do
  [ -f "$png" ] || continue

  dir="$(dirname "$png")"
  base="$(basename "$png" .png)"
  avatar="$dir/${base}-avatar.jpg"

  if [[ "$FORCE_ALL" == false && -f "$avatar" ]]; then
    skipped=$((skipped + 1))
    continue
  fi

  # Get dimensions
  width=$(sips -g pixelWidth "$png" 2>/dev/null | awk '/pixelWidth/{print $2}')
  height=$(sips -g pixelHeight "$png" 2>/dev/null | awk '/pixelHeight/{print $2}')

  if [[ -z "$width" || -z "$height" ]]; then
    echo "  SKIP  $png (could not read dimensions)"
    continue
  fi

  # Square size is the shorter dimension
  if [[ "$width" -lt "$height" ]]; then
    size=$width
  else
    size=$height
  fi

  # Crop square from top-left, output as JPEG
  ffmpeg -y -i "$png" -vf "crop=${size}:${size}:0:0" -q:v 2 "$avatar" 2>/dev/null

  if [[ -f "$avatar" ]]; then
    echo "  OK    $avatar"
    count=$((count + 1))
  else
    echo "  FAIL  $png"
  fi
done

echo ""
echo "Done. Generated $count avatar(s), skipped $skipped existing."
