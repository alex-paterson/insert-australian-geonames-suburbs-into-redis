#!/bin/bash

git clone https://github.com/alex-paterson/insert-australian-geonames-suburbs-into-redis.git;
wget http://download.geonames.org/export/zip/AU.zip;
unzip AU.zip -d ./insert-australian-geonames-suburbs-into-redis/;
cd insert-australian-geonames-suburbs-into-redis/;
npm i;
node index.js;
