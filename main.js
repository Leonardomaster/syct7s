x = 0;
y = 0;

screenWidht = 0;
screenHeight = 0;

drawApple = "";

apple = "";
speakData = "";
toNumber = 0;

function preload()
{
  apple = loadImage("apple.png");
}

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 

}

function setup() {
 screenWidth = window.innerWidth;
 screenHeight = window.innerHeight;

 canvas = createCanvas(screenWidht, screenHeight-150);
 canvas.position(0,150);
}

function draw() {
  if(drawApple == "set")
  {
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}
