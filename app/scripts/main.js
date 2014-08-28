'use strict';
var convert = function() {
    var input = $('#indata').val();
    var nry = [];
    _(input.split('\n')).each(function(el) {
        nry.push(el.split('\t'));
    });
    var titles = _(nry).first();
    var data = _(nry).rest();
    var objects = [];
    _(data).map(function(item) {
        var obj = {};
        _(titles).each(function(title, i) {
            obj[title] = item[i];
        });
        objects.push(obj);
    });
    $('#output').text(JSON.stringify(objects));
};
$(function() {
    $('button').click(function() {
        convert();
    });
});
