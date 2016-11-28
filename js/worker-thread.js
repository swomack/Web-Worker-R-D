/**
 * Created by sourov on 11/28/2016.
 */

'use strict';

self.addEventListener("message", function (event) {

    var message = event.data.messages;

    for(let i = 0; i < message.length; i++)
        message[i] += 10;

    self.postMessage({ case: 1, array_data: message });

}, false);