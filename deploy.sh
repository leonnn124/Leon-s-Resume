#!/usr/bin/env sh

set -e

yarn build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/leonnn124/Leon-s-Resume.git master:gh-pages

cd -