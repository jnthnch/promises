/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var pluckFirstLineFromFileAsync = require('./promiseConstructor.js').pluckFirstLineFromFileAsync;
var getGitHubProfileAsync = require('./promisification.js').getGitHubProfileAsync;
fsPromisified = Promise.promisifyAll(fs);

//1
//fs.readFile(readFilePath,ut8)
//pluckFirstLineFromFileAsync(filePath);
//2
//getGitHubProfileAsync
//3
// fs.writeFile(writeFilePath)

var fetchProfileAndWriteToFile = function (readFilePath, writeFilePath) {

  return fsPromisified.readFileAsync(readFilePath, 'utf8')
    .then(function (file) {
      if (!file) {
        throw new Error('no file exists!!!!!!!');
      } else {
        return readFilePath;
      }
    })
    .then(function (filePath) {
      return pluckFirstLineFromFileAsync(filePath);
    })
    .then(function (profileName) {
      return getGitHubProfileAsync(profileName);
    })
    .then(function (profileInformation) {
      console.log('this is profile info', profileInformation);
      return fsPromisified.writeFileAsync(writeFilePath, JSON.stringify(profileInformation));
    })
    .catch(function (err) {
      console.log('Oops, caught an error: ', err.message);
    });

};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
