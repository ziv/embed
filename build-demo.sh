#!/usr/bin/env sh

rm -r ./dist

npm run embed
npm run embedded

cp -r ./dist/embedded/* ./projects/demo/src/assets/.

ng serve demo
