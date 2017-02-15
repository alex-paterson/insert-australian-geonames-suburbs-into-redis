var fs = require('fs'),
    path = require('path'),
    redis = require('redis'),
    argv = require('minimist')(process.argv);

var {file, server, key} = argv;
file = file || path.join(__dirname, 'AU.txt');
server = server || `redis://127.0.0.1:6379`;
key = key || `aus_suburbs`;

var client = redis.createClient(server);


exports.setupClient = function() {
  return redis.createClient();
};

var suburbs = new Set();

fs.readFile(file, 'ascii', (err, data) => {
  if (err) throw err;
  client.del(key, err => {
    if (err) throw err;
    if (!data) throw new Error('Could not find data file.');
    data.split('\n').forEach(line => {
      var suburb = line.split('\t')[2];
      if (suburb) {
        suburb = suburb.toLowerCase();
        suburbs.add(suburb);
      }
    });
    var array = [];
    suburbs.forEach(suburb => array.push(suburb));
    client.sadd(key, array, err => {
      if (err) throw err;
      console.log('Success!');
      client.quit();
    });
  });
});
