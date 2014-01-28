(function ($) {

    "use strict";
 
    $.fn.share = function (options) {
 
        var defaults = {
            url: (typeof this.data('url') !== 'undefined') ? this.data('url') : document.URL,
            via: (typeof this.data('via') !== 'undefined') ? this.data('via') : false,
            popup: (typeof this.data('popup') !== 'undefined') ? this.data('popup') : true,
            networks: ['facebook','twitter']
        }

        var $this = this,
            settings = $.extend(defaults, options);

        var init = function($element) {
            
            var $wrapper = $('<ul class="js-share-wrapper" />');
            

            var index;
            for (index = 0; index < settings.networks.length; ++index) {
                
                var $network = $('<a class="js-share-network">'),
                    $li = $('<li/>');

                if (settings.popup){
                   
                    $network.attr({
                        rel:"external",
                        target:"_blank"
                    });

                }

                switch(settings.networks[index]){

                    case 'facebook':
                        $network.addClass("js-share-facebook");
                        $network.text("Share this on Facebook").attr("href",settings.url);
                        break;

                    case 'twitter':
                        $network.addClass("js-share-twitter");
                        $network.text("Tweet about this").attr("href",settings.url);
                       
                        break;


                }
                $network.appendTo($li);
                $li.appendTo($wrapper);


            }

            $element.before($wrapper).remove();

        };
 
        return this.each( function() {
            
            init($(this));

        });
 
    };
 
}(jQuery));