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
