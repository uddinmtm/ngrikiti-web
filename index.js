/*
 * Web Scraper
 * originally from http://techslides.com/curl-with-nodejs (Curl with nodejs)
 */

var fs = require('fs');
var request = require('request');

var urls = new Array("https://kbbi.web.id/juragan/ajax_","https://kbbi.web.id/bos/ajax_");

function scrape (url, file) {
    request(url, function(error, response, body){
        if (!error && response.statusCode == 200) {
            console.log('request url: '+url); 
            console.log('request file: '+file); 
            fs.writeFile(file, body, 'utf8', function (err) {
                if (err) {
                    console.log('error when writing to file'); 
                } 
            });
        } 
    });
}

for (var i = 0; i < urls.length; i++) {
    var url = urls[i];
    var file = url.replace(/\/|:|\./g,'')+'.txt';
    
    console.log(file);
    console.log(url);
    scrape(url, file);
}
