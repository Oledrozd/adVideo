var adRotateModule = (function () {

    var exploreFunc = function ( rotateItem, rotateChangerValue, videoAd ) {

            var maxChangerValue = 60;

            var rotateItemCurrPos = ( maxChangerValue - rotateChangerValue ) * ( -221 );

            rotateItem.style.backgroundPosition = '0px ' + ( rotateItemCurrPos ) + 'px';

            if ( rotateChangerValue !== 60 ) {
                videoAd.style.zIndex = '-1';
            } else {
                videoAd.style.zIndex = '1';
            }

    };

    return {
        exploreFunc: exploreFunc
    }
}());

var adAnimateModule = ( function () {



    var flashAnimate = function ( rotateChangerValue, flashElem ) {

        if ( rotateChangerValue === 30 ) {
            flashElem.style.opacity = '1';
            flashElem.style.zIndex = '2';
            flashElem.style.transform = 'scale(15) rotate(360deg)';
            flashElem.style.webkitTransform = 'scale(15) rotate(360deg)';
            flashElem.style.mozTransform = 'scale(15) rotate(360deg)';

            setTimeout( function () {
                flashElem.style = '';
            },200)
        }
    };

    var cardHighlightAnimate = function ( rotateChangerValue, highlightElem ) {
        if ( rotateChangerValue === 1 ) {

            highlightElem.style.opacity = '1';
            highlightElem.style.zIndex = '2';
            highlightElem.style.backgroundPosition = '50px 0';


            setTimeout( function () {
                highlightElem.style = '';
            },200)

        }
    };

    var rainAnimate = function ( rotateChangerValue, rainContainer, dropsClass ) {

        var rainConfig = {
                speed: 1,
                maxDropsTransition: 10,
                rainDropsTypeQuantity: 4,
                dropsQuantity: 40
            };

        function randomInteger ( min, max ) {
            var int = min - 0.5 + Math.random() * (max - min + 1)
            return int = Math.round(int);
        }

        if ( rotateChangerValue <= 57 && rotateChangerValue >= 40) {

            if ( rainContainer.innerHTML === '') {

                for ( var i = 0; i <= rainConfig.dropsQuantity; i++ ) {

                    var newDrop = document.createElement('div');

                    newDrop.classList.add( dropsClass );
                    newDrop.classList.add( dropsClass + '_' + randomInteger( 1, rainConfig.rainDropsTypeQuantity )  );


                    newDrop.style.top = randomInteger(1, 100) + "%";
                    newDrop.style.left = randomInteger(1, 100) + "%";
                    newDrop.style.zIndex = 2;

                    rainContainer.appendChild( newDrop );

                }

                for ( var j = 0; j < document.querySelectorAll( '.' + dropsClass ).length; j++) {

                    (function ( n ) {

                        var currDropsSpeed = rainConfig.speed * randomInteger( 1, rainConfig.maxDropsTransition );

                        setTimeout(function() {
                            document.querySelectorAll( '.' + dropsClass )[n].style.top = '110%';
                            document.querySelectorAll( '.' + dropsClass )[n].style.transition = currDropsSpeed + 's';
                            document.querySelectorAll( '.' + dropsClass )[n].style.webkitTransition = currDropsSpeed + 's';
                            document.querySelectorAll( '.' + dropsClass )[n].style.mozTransition = currDropsSpeed + 's';

                        }, 100);

                    })( j );



                }
            }

        } else {
            rainContainer.innerHTML = '';
        }

    };

    return {
        flashAnimate: flashAnimate,
        cardHighlightAnimate: cardHighlightAnimate,
        rainAnimate: rainAnimate
    }

}());

var adTextChangeModule = (function() {

    var adTextChange = function ( rotateChangerValue, textBlock ) {

        if ( rotateChangerValue <= 60 && rotateChangerValue > 57  ) {

            textBlock.innerHTML = "Rethink what a phone can do";

        } else if (  rotateChangerValue <= 57 && rotateChangerValue >= 40 ) {

            textBlock.innerHTML = "Water and dust resistant: Real world ready";

        } else if ( rotateChangerValue < 40 && rotateChangerValue > 17 ) {

            textBlock.innerHTML = "Capture picture perfect moments in all conditions";

        } else {

            textBlock.innerHTML = "Exspandable memory: Fit more of what you love";

        }

    };

    return {
        adTextChange: adTextChange
    }

}());


var mainModule = (function () {
    var rotateChanger = document.querySelector('.ad-control-explore__control'),
        rotateItem = document.querySelector('.ad-video__video-container'),
        videoAd = document.querySelector('.ad-video__video-container iframe'),

        flashElem = document.querySelector('.ad-video__flash'),
        highlightElem = document.querySelector('.ad-video__highlight'),
        rainContainer = document.querySelector('.ad-video__rain-container'),
        rainDropsClass = 'ad-video__rain-drop',

        adTextBlock = document.querySelector('.ad-info__text');



    rotateChanger.addEventListener( 'input', function () {

        var currRotateChangerValue = parseInt( rotateChanger.value, 10);

        adRotateModule.exploreFunc( rotateItem, currRotateChangerValue, videoAd);

        adAnimateModule.flashAnimate( currRotateChangerValue, flashElem );
        adAnimateModule.cardHighlightAnimate( currRotateChangerValue, highlightElem );
        adAnimateModule.rainAnimate( currRotateChangerValue, rainContainer, rainDropsClass);

        adTextChangeModule.adTextChange( currRotateChangerValue, adTextBlock);

    });



}());
