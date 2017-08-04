

/*const imageDL = require("image-downloader");
const options = {
    url: 'http://i.imgur.com/FnC28.gif',
    dest: './public/images/wharrgarbl.gif'                  // Save to /path/to/dest/image.jpg
};*/

var Image = require('./models/Image.js');

/////
function googleScrape(searchStr,itemCB,callback) {

//    itemCB('http://www.wharrgarbl.com/wharrgarbl.gif');

    var Nightmare = require('nightmare');
    var nightmare = Nightmare({ show: false});
    console.log('begin nm scrape');

//    var jq = require('cheerio');


    var arr = [];
    var ind = 0;


    function getPic(index) {
        nightmare.click('.rg_ic[scrapeID="num'+index+'"]')
            .wait(500)
            .evaluate(function(arr)
                {
                    for(var i=0; i<2; i++)
                        {
                            var imgSel = $('.irc_mi');
                            if(arr.indexOf(imgSel[i].src) == -1 && imgSel[i].src !='')
                                {
                                    arr.push(imgSel[i].src);
                                }
                        }
                    return arr;
                }, arr).then(function(result)
                    {
                        console.log(result.length);
                        arr=result;
                        itemCB(arr[arr.length-1]);
                        ind++;
                        if(arr.length<20 /*6*/ ) {getPic(ind);}
                        else {

/*                            for(var j=0; j<arr.length; j++) {
                                // Save an empty result object
                                var result = {};

                                // Add the text and href of every link, and save them as properties of the result object
                                result.title = 'image' + j;
                                result.link = arr[j]; //$(this).children("a").attr("href");

                                // Using our Article model, create a new entry
                                // This effectively passes the result object to the entry (and the title and link)
                                var entry = new Image(result);

                                // Now, save that entry to the db
                                entry.save(function (err, doc) {
                                    // Log any errors
                                    if (err) {
                                        console.log(err);
                                    }
                                    // Or log the doc
                                    else {
                                        console.log(doc);
                                    }
                                });
                            }*/

                            console.log('link array:',arr);
                            nightmare.end().then(function (result) {
                                console.log('I always let the wookie win... -C-3PO');
                            })
                            .catch(function (error) {
                                    console.error('Search failed:', error);
                                });
                            callback(arr);

                        }
                    });
    }

    nightmare
        // .goto(searchStr)
        .goto('https://www.google.com/search?q=' + searchStr + '&tbm=isch&tbs=itp:animated')
        .inject('js', './public/jquery.min.js')
        .wait('.rg_ic').wait(500) // wait(2000)
        .evaluate(function(){
            for(var i=0; i<50; i++)
                    {$('.rg_ic').eq(i).attr('scrapeID','num'+i);}
            }
        ).then(function(){getPic(0);});
}

module.exports = googleScrape;

