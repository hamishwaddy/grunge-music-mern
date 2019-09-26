#!/usr/bin/env bash

echo "POPULATING MONGO"
cd mongodb && mongo mongo-script setup.js && cd ..