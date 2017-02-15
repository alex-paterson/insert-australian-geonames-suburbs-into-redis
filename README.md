# Insert Australian GeoNames Suburbs Into Redis

This script inserts a list of Australian suburbs from GeoNames into a Redis database.

# How To

1. Download http://download.geonames.org/export/zip/AU.zip

2. Unzip to get AU.txt. Place this in the root of this package.

3. Run with: `node index.js --file="AU.txt" --server="redis://127.0.0.1:6379" --key="aus_suburbs"`. These are the default values.

# Confirmation

Get list `LRANGE aus_suburbs 0 -1`.
