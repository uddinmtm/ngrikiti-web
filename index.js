/*
 * Web Scraper
 * originally from http://techslides.com/curl-with-nodejs (Curl with nodejs)
 */

var request = require('request');
var slicer = require('./slicer');

var url = "https://builtwith.com/google.com";

// text telegram format
function printData(data) {
    var print;
    data.forEach(function (value) {
        print += "*" + value.title + "*\n";
        var items = value.item;
        items.forEach(function (item) {
            print += "- _" + item.title + "_\n";
        });
    });

    return print;
}

function scrape (url) {
    request(url, function(error, response, body){
        if (!error && response.statusCode == 200) {
            var data = slicer.builtweb(body);
            // console.log(data);

            return printData(data);
        } 
    });
}

scrape(url);
