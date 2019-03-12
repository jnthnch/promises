/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  fs.readFile(filePath, 'utf8', function (err, content) {
    console.log(content);
    if (err) {
      cb(err);
    } else {
      cb(null, content.split('\n')[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, cb) {
  request({ url: url }, function (err, response) {
    if (err) {
      cb(err);
    } else {
      cb(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};

