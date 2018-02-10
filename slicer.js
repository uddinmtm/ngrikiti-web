// get necessary data from built web com
var builtWebSlicer = function (contents) {
    // sanitize content
    contents = contents.replace(/(?:\\[rn]|[\r\n]|\\+)+/g, "");
    var slice = contents.split('<div class="container"><section><div class="row"><div class="span8"><div class="titleBox">');
    slice = slice[1].split('<div class="titleBox noP"><ul class="nav nav-pills"><li><span>Access more of BuiltWith</span></li></ul>');
    
    // get the base content
    var baseContent = slice[0];
    var sliceTitleBox = baseContent.split('<div class="titleBox">');
    
    // get the necessary data
    var data = [];
    for (var i = 0; i < sliceTitleBox.length; i++) {
        sliceTitleBox[i] = sliceTitleBox[i].replace(/\\/g,"");
        var sliceTitle = sliceTitleBox[i].split('<li class="active"><span>');
        sliceTitle = sliceTitle[1].split('</span></li>');
        var title = sliceTitle[0];

        var sliceItem = sliceTitle[1];
        sliceItem = sliceItem.split('<div class="techItem">');
        
        var item = [];
        for (var j = 1; j < sliceItem.length; j++) {
            var subSliceItem = sliceItem[j].split('</a></h3>');

            var sliceItemTitle = subSliceItem[0];
            sliceItemTitle = sliceItemTitle.split('//trends.builtwith.com/');
            sliceItemTitle = sliceItemTitle[2].split('">');
            var itemTitle = sliceItemTitle[1];
            
            item.push({
                "title" : itemTitle,
            });
        }
        
        data.push({
            "title" : title, 
            "item" : item
        });
    }

    return data;
}

module.exports = {
    builtweb: builtWebSlicer
};
 
