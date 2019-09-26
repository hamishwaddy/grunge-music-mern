#!/usr/bin/env bash

echo "STOP APPLICATION"
killall -SIGKILL mongod
npm --prefix express run pm2-stop