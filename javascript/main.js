/* 1. Obetener el input */
var input;

document.querySelector(".js-go").addEventListener('click', function () {

    input = document.querySelector("input").value;
    console.log(input);
});

/* 2. Llamar la API */

var url = "https://api.giphy.com/v1/gifs/search?api_key=HsdndAAeztqsmgGVBlrXavpjIoeADOCf&q=" + input + "&limit=25&offset=0&rating=g&lang=en";
console.log(input);

var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', url);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', function (e) {
    var data = e.target.response;
    console.log(data);
    pushToDOM(data);
});

/* 3. Mostrar los GIFS */

function pushToDOM(value) {

    var response = JSON.parse(value);

    var imageUrls = response.data;

    var container = document.querySelector(".js-container");

    imageUrls.forEach(function (image) {

        var src = image.images.fixed_height.url;

        container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
    });
}