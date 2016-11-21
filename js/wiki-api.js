    //This Script tag is called from mk.modifyPinSelect and it calls for a list of wikipedia articles
    //which are displayed inside the info window
    var callFun = function (num) {
        var numberOf = num;
        var search = vm.fullArray[num].name;
        var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + search + '&format=json&callback=wikiCallback';
        var tempInfo = mk.markerInfoArray[numberOf].content;

        $.ajax({
            url: wikiUrl,
            dataType: 'jsonp',
            success: function (response) {
                var articleList = response[1];

                var articleStr = null;
                var tempAllLi = '';
                for (var x = 0; x < articleList.length; x++) {
                    articleStr = articleList[x];
                    url = 'http://en.wikipedia.org/wiki/' + articleStr;
                    var tempLi = '<li class="wikiItem"><a href="' + url + '">' + articleStr + '</a></li>';
                    tempAllLi += tempLi;
                }

                mk.markerInfoArray[numberOf].setContent(tempInfo + '<ul>' + tempAllLi + '</ul>');

                if (articleStr === null) {
                    var tempLi = '<li class="wikiItem">No Wikipedia Entries For This Location</li>';
                    mk.markerInfoArray[numberOf].setContent(tempInfo + '<ul>' + tempLi + '</ul>');
                }
            }
        }).fail(function (response) {
            var tempLi = '<li class="wikiItem">Wikipedia Failed To Connect</li>';
            mk.markerInfoArray[numberOf].setContent(tempInfo + '<ul>' + tempLi + '</ul>');
        });
    };