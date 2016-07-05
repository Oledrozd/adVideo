var adRotateModule = (function () {

    var exploreFunc = function ( rotateItem, rotateChangerValue, videoAd ) {

        var maxChangerValue = 60;

        var rotateItemCurrPos = ( maxChangerValue - rotateChangerValue ) * ( -221 );

        rotateItem.style.backgroundPosition = '0px ' + ( rotateItemCurrPos ) + 'px';

        if ( rotateChangerValue !== 60 ) {
            videoAd.style.display = 'none';
        } else {
            videoAd.style.display = 'block';
        }

    };

    return {
        exploreFunc: exploreFunc
    }
}());