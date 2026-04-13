<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <script src="./filter.js"></script>
</head>
<body>
<video id="video" autoplay playsinline></video>
<pre id="log"></pre>
<script>
const video = document.getElementById("video");
const log   = document.getElementById("log");

function startCamera() {
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    }).then(stream=>{
        video.srcObject = stream;
        setInterval(e=>{
            NSFWFilter(video).then(response=>{
              log.innerHTML = JSON.stringify(response)
              console.log(response)
              let values = Object.fromEntries(response.map(e=>[e.className,e.probability]))
              if(values.Porn>0.8){
                video.style.filter="blur(20px)"
              }else{
                video.style.filter="none"
              }
            })
        },1000)
    })
}

startCamera();
</script>

</body>
</html>
