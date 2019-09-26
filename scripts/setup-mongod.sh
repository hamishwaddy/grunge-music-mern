#!/usr/bin/env bash

echo "Killing All Processes"
killall -SIGKILL mongod
killall -SIGKILL node

echo "CREATING MONGODB DATA FOLDER"
mkdir mongodb/db mongodb/logs

echo "START MONGO"
cd mongodb && mongod --fork --config mongo.conf && cd ..

echo "YOU CAN NOW START EXPRESS AND IN A SEPARATE WINDOW"