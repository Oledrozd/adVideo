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