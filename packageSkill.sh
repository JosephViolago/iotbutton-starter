#!/bin/bash

cp node_modules skill
zip -r skill.zip -x "*.png" "*.git*" "*.md" "*.txt" "*.log" ".DS_Store" "package.*" -u skill
rm -Rf skill/node_modules