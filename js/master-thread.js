/**
 * Created by sourov on 11/28/2016.
 */

'use strict';


function createWorkerThread () {
    let worker_script_name = 'js/worker-thread.js';
    let workerThread = new Worker(worker_script_name);

    workerThread.addEventListener("message", worker_thread_on_message, false);

    workerThread.addEventListener('error', worker_thread_on_error, false);

    return workerThread;
}


function worker_thread_on_message(event)
{
    var received_data = event.data;
    switch(received_data.case)
    {
        case 1:
            array_buffer = received_data.array_data;
            break;
        default:
    }
}

function worker_thread_on_error(event)
{
    alert('ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
}



var array_buffer = new Float32Array(10);
for(let i = 0; i < 10; i++)
    array_buffer[i] = i;

var worker_thread = createWorkerThread();

var obj_data= {
    message: array_buffer
};
worker_thread.postMessage(obj_data, [obj_data.message.buffer]);


function animate() {
    window.requestAnimationFrame(animate);
}

animate();


