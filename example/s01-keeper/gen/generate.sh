#!/usr/bin/env bash
set -euo pipefail

cat <<'MSG'
Generation path used for this run:
  Codex built-in image_gen tool (runtime image generation), no OPENAI_API_KEY.

This shell script is a record/helper only. The built-in image_gen tool is not
callable from a local shell script in this environment. Final prompts are stored
in gen/prompts.md. Generated runtime PNGs were copied into references/ and
normalized with gen/import_latest.sh.
MSG
