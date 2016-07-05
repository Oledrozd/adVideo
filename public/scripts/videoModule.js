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