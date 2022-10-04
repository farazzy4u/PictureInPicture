const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media strea, pass to vide element ,then play
async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        console.log(videoElement);
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }
    }  catch (error){
        // Catch Error here
        console.log('Hey buddy,error here:', error);
    }
}

button.addEventListener('click', async () =>{
    // Disable Button
    button.disable = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// On Load
selectMediaStream();