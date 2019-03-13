/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
// Promise.promisifyAll(fs);

// var pluckFirstLineFromFileAsync = function (filePath) {
//   return fs.readFileAsync(filePath, 'utf8')
//     //RESOLVE
//     .then(function (content) {
//       return content.split('\n')[0];
//     })
//     // REJECT
//     .catch(function (e) {
//       console.log('errrrrorrrr')
//     })
// };

var pluckFirstLineFromFileAsync = function (filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data.split('\n')[0]);
      }
    });
  });
};


// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function (url) {
  // TODO
  return new Promise(function (resolve, reject) {
    request({ url: url }, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data.statusCode);
      }
    });
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
