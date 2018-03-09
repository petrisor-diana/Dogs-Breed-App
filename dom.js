
var myDogBtn = document.getElementById('giveGog');
var myDog = document.getElementById('dogBreed');
var myPicture = document.getElementById('dogImage');

myDogBtn.addEventListener('click', generateNew)

function generateNew() {
    var myRequestDog = new XMLHttpRequest();
    myRequest.open("GET", "https://dog.ceo/api/breeds/list");
    myRequest.send();
    myRequest.addEventListener("load", function onLoad(e) {
        var myResponseAsText = e.target.response;
        var myResponseAsAJSONBreed = JSON.parse(myResponseAsText);
        console.log(myResponseAsAJSONBreed)
    });

 
    var myRequestPicture = new XMLHttpRequest();
    myRequest.open("GET", "https://dog.ceo/api/breed/"+ x + "/images");
    myRequest.send();
    myRequest.addEventListener("load", function onLoad(e) {
        var myResponseAsText = e.target.response;
        var myResponseAsAJSONPicture = JSON.parse(myResponseAsText);
    });

    addContent();
}


function addContent() {
    for (var i=0; i< myResponseAsAJSONBreed.message.length; i++)
      myDog.innerHTML = myResponseAsAJSONBreed.message[i];
      myDog.innerHTML = myResponseAsAJSONPicture.message[0];
}