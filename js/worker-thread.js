/**
 * Created by sourov on 11/28/2016.
 */

'use strict';

self.addEventListener("message", function (event) {

    var message = new Float32Array(event.data.message);

    for(let i = 0; i < message.length; i++) {

        if(i%3 == 0)
            message[i] += 10;
    }


    self.postMessage({ case: 1, array_buffer: message });

}, false);
