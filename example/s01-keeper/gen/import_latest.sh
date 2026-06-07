#!/usr/bin/env bash
set -euo pipefail

target="${1:?target path required}"
width="${2:?width required}"
height="${3:?height required}"

latest="$(ls -t "${CODEX_HOME:-$HOME/.codex}"/generated_images/*/ig_*.png | head -n 1)"
cp "$latest" "$target"
sips -s format png -z "$height" "$width" "$target" >/dev/null
echo "$target <- $latest"
