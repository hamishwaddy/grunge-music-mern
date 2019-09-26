#!/usr/bin/env bash

echo "NPM INSTALL"
npm --prefix express i && npm --prefix express i -D

echo "START NODEMON"
npm --prefix express run pm2-start