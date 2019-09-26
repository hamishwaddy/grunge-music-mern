#!/usr/bin/env bash

echo "CLEAN EVERYTHING APPLICATION"
killall -SIGKILL mongod
killall -SIGKILL node
rm -rf mongodb/db
rm -rf mongodb/logs

