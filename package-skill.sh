#!/bin/bash

cp -R node_modules skill
cd skill
zip -r skill.zip -x "*.png" "*.git*" "*.md" "*.txt" "*.log" ".DS_Store" "package.*" "*.dist" -u .
mv skill.zip ..
cd ..
rm -Rf skill/node_modules
