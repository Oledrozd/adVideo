var controlModule = ( function () {

    var closeBlock = function ( closeBlock ) {

            closeBlock.style.display = 'none';

    };

    return {
        closeBlock: closeBlock
    }

}());



var videoModule = ( function () {

    var player;

    function onPlayerReady( event ) {
        player.mute();
        player.playVideo();
    }

    var runPlayer = function ( playerId, animateFunc ) {

        window.onYouTubeIframeAPIReady = function() {

            animateFunc();

            player = new YT.Player( playerId , {

                events: {
                    'onReady': onPlayerReady
                }

            });
        }

    };

    return {
        runPlayer: runPlayer
    }

}());



var adRotateModule = (function () {

    var exploreFunc = function ( rotateItem, rotateChangerValue, videoAd ) {

            var maxChangerValue = 60;

            var rotateItemCurrPos = ( maxChangerValue - rotateChangerValue ) * ( -221 );

            rotateItem.style.backgroundPosition = '0px ' + ( rotateItemCurrPos ) + 'px';

            if ( rotateChangerValue !== 60 ) {
                videoAd.style.opacity = '0';
            } else {
                videoAd.style.opacity = '1';
            }

    };

    return {
        exploreFunc: exploreFunc
    }
}());



var adAnimateModule = ( function () {

    var videoEmergence = function ( videoBlock, rotateChanger, adTextBlock, buyButton, exploreText ) {

        var emergenceConfig = {

            firstStageTimeout: 1000,
            secondStageTimeout: 2000

        };

        function opacityChange ( element ) {
            element.style.opacity = '1';
        }

        function positionVideoChange ( element ) {
            element.style.transform = 'translate(0, 0)';
            element.style.webkitTransform = 'translate(0, 0)';
            element.style.mozTransform = 'translate(0, 0)';
        }

        function positionChange ( element ) {
            element.style.transform = 'rotate(-90deg) translate(0, 0)';
            element.style.webkitTransform = 'rotate(-90deg) translate(0, 0)';
            element.style.mozTransform = 'rotate(-90deg) translate(0, 0)';
        }

        positionVideoChange ( videoBlock );
        positionChange ( rotateChanger );

        setTimeout( function ( ){

            opacityChange ( adTextBlock );
            opacityChange ( exploreText );

        }, emergenceConfig.firstStageTimeout);

        setTimeout( function ( ){

            opacityChange ( buyButton );

        }, emergenceConfig.secondStageTimeout);

    };

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

    var cardHighlightAnimate = function ( rotateChangerValue, highlightElem, frameElem ) {
        if ( rotateChangerValue === 1 ) {

            frameElem.style.display='block';

            highlightElem.style.opacity = '1';
            highlightElem.style.zIndex = '0';
            highlightElem.style.backgroundPosition = '40px 0';


            setTimeout( function () {
                highlightElem.style = '';
            },200)

        } else {
            frameElem.style.display = 'none';
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
        rainAnimate: rainAnimate,
        videoEmergence: videoEmergence
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



var controller = ( function () {

    var rotateChanger = document.querySelector('.ad-control-explore__control'),
        rotateItem = document.querySelector('.ad-video__video-container'),
        videoAd = document.querySelector('.ad-video__video-container iframe'),
        videoBlock = document.querySelector('.ad-video'),

        flashElem = document.querySelector('.ad-video__flash'),
        highlightElem = document.querySelector('.ad-video__highlight'),
        frameElem = document.querySelector('.ad-video__card-frame'),
        rainContainer = document.querySelector('.ad-video__rain-container'),
        rainDropsClass = 'ad-video__rain-drop',

        adTextBlock = document.querySelector('.ad-info__text'),
        buyButton = document.querySelector('.ad-control-explanation-button__buy'),
        exploreText = document.querySelector('.ad-control-explanation__explore'),
        closeButton = document.querySelector('.ad-close__button'),
        closeBlock = document.querySelector( '.main'),

        videoPlayerId = 'ad_video';


    closeButton.addEventListener( 'click', function() {
        controlModule.closeBlock( closeBlock )
    });

    rotateChanger.addEventListener( 'input', function () {

        var currRotateChangerValue = parseInt( rotateChanger.value, 10);

        adRotateModule.exploreFunc( rotateItem, currRotateChangerValue, videoAd);

        adAnimateModule.flashAnimate( currRotateChangerValue, flashElem );
        adAnimateModule.cardHighlightAnimate( currRotateChangerValue, highlightElem, frameElem );
        adAnimateModule.rainAnimate( currRotateChangerValue, rainContainer, rainDropsClass);

        adTextChangeModule.adTextChange( currRotateChangerValue, adTextBlock);

    });

    videoModule.runPlayer( videoPlayerId, function() {
        adAnimateModule.videoEmergence( videoBlock, rotateChanger, adTextBlock, buyButton, exploreText)
    });

}());
