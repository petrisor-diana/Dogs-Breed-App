var myDog = document.getElementById('displayCatalog');
var myFirstPage = document.getElementById('welcomePage');
var allDogsBreeds = [];
var myGogInput = document.getElementById('myInput');

var myRequestDog = new XMLHttpRequest();
myRequestDog.open("GET", "https://dog.ceo/api/breeds/list");
myRequestDog.send();
myRequestDog.addEventListener("load", function onLoad(e) {
    var myResponseAsText = e.target.response;
    var myResponseAsAJSONBreed = JSON.parse(myResponseAsText);

    for (let i = 0; i < myResponseAsAJSONBreed.message.length; i++) {
        allDogsBreeds.push(myResponseAsAJSONBreed.message[i]);
    }
});


console.log(allDogsBreeds)

document.getElementById('companionDogs').addEventListener('click', function getCompanionDogs() {
    myFirstPage.classList.add('hidden');
    myDog.classList.remove('hidden');
    for (let i = 0; i < allDogsBreeds.length / 4; i++) {
        getPictures(i);
    }
});


document.getElementById('guardDogs').addEventListener('click', function getGuardDogs() {
    debugger
    myFirstPage.classList.add('hidden');
    myDog.classList.remove('hidden');
    for (let i = allDogsBreeds.length / 4; i < allDogsBreeds.length / 2; i++) {
        getPictures(i);
    }
});

document.getElementById('huntingDogs').addEventListener('click',function getHuntingDogs() {
    myFirstPage.classList.add('hidden');
    myDog.classList.remove('hidden');
    for (let i = allDogsBreeds.length / 2; i < allDogsBreeds.length - allDogsBreeds.length / 4; i++)
        getPictures(i);
});



document.getElementById('workingDogs').addEventListener('click', function getWorkingDogs() {
    myFirstPage.classList.add('hidden');
    myDog.classList.remove('hidden');
    for (let i = allDogsBreeds.length - allDogsBreeds.length / 4; i < allDogsBreeds.length; i++)
        getPictures(i);
});



document.getElementById('firstPage').addEventListener('click', function showFirstPage() {
    myDog.classList.add('hidden');
    myFirstPage.classList.remove('hidden');
});


function getPictures(i) {
    var myRequestPicture = new XMLHttpRequest();
    myRequestPicture.open("GET", "https://dog.ceo/api/breed/" + allDogsBreeds[i] + "/images");
    myRequestPicture.send();

    myRequestPicture.addEventListener("load", function onLoad(e) {
        var myResponseAsText = e.target.response;
        var myResponseAsAJSONPicture = JSON.parse(myResponseAsText);

        myDog.innerHTML += '<img class="dogImage" src=' + myResponseAsAJSONPicture.message[0] + ">";
        myDog.innerHTML += "<p>" + allDogsBreeds[i] + "</p>"
    });
}

// function searchDog() {

//     var yourDog = search(myGogInput.value, allDogsBreeds);
//     getPictures(yourDog);

// }

// function search('affenpinscher', allDogsBreeds) {
//     for (var i = 0; i < allDogsBreeds.length; i++)
//         if (list[i].startsWith('affenpinscher')) {
//             console.log(allDogsBreeds[i]);
//         }
//         else
//             return null;

// }

