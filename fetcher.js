/* S T R E T C H
 *Edge Case 1: File Already Exists
 * If the file path already exists, right now your app will overwrite it! If
 * you want to change this, let the user know and prompt them to type
 * (followed by the enter key) to overwrite the file, otherwise skip and exit
 * the app. We suggest using the readline module, which we've previously used
 *
 * if (fpath) (index.html) exists, use readline to ask a yes or no, to
 * overwrite or not.
 *
 *
 * Edge Case 2: File Path is Invalid
 * If the file path is invalid, the app should fail and let the user know about
 * this issue.
 *
 * if (fpath) is !==, return error/throw error and why
 *
 * Edge Case 3: URL is Invalid
 * If the URL is invalid, terminate the app explaining to the user what went
 * wrong, and not write the response body to the file.
 *
 * same as above but with the url instead and to stop operations and let the user know why
*/

const request = require('request');
const fs = require('fs');

const fURL = process.argv[2];
const fPath = process.argv[3];

request(fURL, (error, response, body) => {
  
  if (error) console.log('Error: ', error);
  
  fs.writeFile(`${fPath}`, body, (error) => {
    
    if (error) console.error('Error: ', error);
    
    else console.log(`Downloaded from ${fURL}, and saved ${response.headers['content-length']} bytes to ${fPath}`);

  });
  
});
