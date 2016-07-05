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

        setTimeout( function ( ){ //first stage changes

            opacityChange ( adTextBlock );
            opacityChange ( exploreText );

        }, emergenceConfig.firstStageTimeout);

        setTimeout( function ( ){ //second stage changes

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
            dropsQuantity: 5
        };

        function randomInteger ( min, max ) {
            var int = min - 0.5 + Math.random() * (max - min + 1);
            return int = Math.round(int);
        }

        if ( rotateChangerValue <= 57 && rotateChangerValue >= 40) {

            for ( var i = 0; i <= rainConfig.dropsQuantity; i++ ) {

                var newDrop = document.createElement('div');

                newDrop.classList.add( dropsClass );
                newDrop.classList.add( dropsClass + '_' + randomInteger( 1, rainConfig.rainDropsTypeQuantity )  ); //define drop with random class


                newDrop.style.top = randomInteger(1, 100) + "%";
                newDrop.style.left = randomInteger(1, 100) + "%";
                newDrop.style.zIndex = 2;

                rainContainer.appendChild( newDrop );

            }

            for ( var j = 0; j < document.querySelectorAll( '.' + dropsClass ).length; j++) {

                ( function ( n ) {

                    var currDropsSpeed = rainConfig.speed * randomInteger( 1, rainConfig.maxDropsTransition ); //define drop speed formula

                    setTimeout(function() {

                        if( rainContainer.innerHTML !== '' ) {
                            document.querySelectorAll( '.' + dropsClass )[n].style.top = '110%';
                            document.querySelectorAll( '.' + dropsClass )[n].style.transition = currDropsSpeed + 's';
                            document.querySelectorAll( '.' + dropsClass )[n].style.webkitTransition = currDropsSpeed + 's';
                            document.querySelectorAll( '.' + dropsClass )[n].style.mozTransition = currDropsSpeed + 's';
                        }
                    }, 100);

                })( j );
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