(function ($) {

    "use strict";
 
    $.fn.share = function (options) {
 
        var defaults = {}

        var $this = this,
            settings = $.extend(defaults, options);

        var init = function($element) {

            var options = {
                url: (typeof $element.data('url') !== 'undefined') ? $element.data('url') : document.URL,
                message: (typeof $element.data('message') !== 'undefined') ? $element.data('message') : false,
                via: (typeof $element.data('via') !== 'undefined') ? $element.data('via') : false,
                popup: (typeof $element.data('popup') !== 'undefined') ? $element.data('popup') : true,
                network: (typeof $element.data('share') !== 'undefined') ? $element.data('share') : "facebook",
            },
                $count = $('<span class="js-share-count"/>');                        

            $element.addClass("js-share");

            if (options.popup){
               
                $element.attr({
                    rel:"external",
                    target:"_blank"
                });

            }

            switch(options.network){

                case 'facebook':
                    
                    var url = 'http://www.facebook.com/sharer/sharer.php?';
                    if (options.url) url += 'u='+encodeURIComponent(options.url);

                    $element
                        .addClass("js-share-facebook")
                        .attr("href",url);

                    $count.appendTo($element).addClass("js-share-count-loading").load("facebook.json",function(data){
                        $(this).text(data).removeClass('js-share-count-loading');
                    });
                    break;

                case 'twitter':
                    
                    var url = 'https://twitter.com/intent/tweet?';
                    if (options.via) url += 'via='+encodeURIComponent(options.via);
                    if (options.message) url += 'text='+encodeURIComponent(options.message); //TODO: check if amperstand

                    $element
                        .addClass("js-share-twitter")
                        .attr("href",url);

                    $count.appendTo($element).addClass("js-share-count-loading").load("twitter.json",function(data){
                        $(this).text(data).removeClass('js-share-count-loading');
                    });
                    break;


            }

        };
 
        return this.each( function() {
            
            init($(this));

        });
 
    };
 
}(jQuery));