
var myDogPic = document.getElementsByClassName('myDog');
var myDog = document.getElementById('displayCatalog');




var myRequestDog = new XMLHttpRequest();
myRequestDog.open("GET", "https://dog.ceo/api/breeds/list");
myRequestDog.send();
myRequestDog.addEventListener("load", function onLoad(e) {
    var myResponseAsText = e.target.response;
    var myResponseAsAJSONBreed = JSON.parse(myResponseAsText);

    for (let i = 0; i < myResponseAsAJSONBreed.message.length; i++) {
        
        var myRequestPicture = new XMLHttpRequest();
        myRequestPicture.open("GET", "https://dog.ceo/api/breed/" + myResponseAsAJSONBreed.message[i] + "/images");
        myRequestPicture.send();
        myRequestPicture.addEventListener("load", function onLoad(e) {
            var myResponseAsText = e.target.response;
            var myResponseAsAJSONPicture = JSON.parse(myResponseAsText);
  
            myDog.innerHTML += "<img src=" + myResponseAsAJSONPicture.message[0] + ">";
            myDog.innerHTML += "<p class='myDog'>" + myResponseAsAJSONBreed.message[i] + "</p>"

        });
    }
});




