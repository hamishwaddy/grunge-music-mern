#!/usr/bin/env bash

echo "START APPLICATION"
cd mongodb && mongod --fork --config mongo.conf && cd ..
npm --prefix express run pm2-stop
npm --prefix react start