// dom

const cardElm = document.getElementById("cards-containers");
const overlayElm = document.getElementById("cover-img-container");
const cardImgElm = document.getElementById("img-card");
const OverlayImgElm = document.getElementById("over-img");
const closeBtnElm = document.getElementById("btn-close");

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then(function(response) {
    response.data.forEach((element, index) => {
        const titleResult = element.title;
        const urlResult = element.url;
        const overId = `overlayElm-${index}`;

        cardElm.innerHTML +=
        `<div class="col-12 col-sm-6 col-lg-4">
            <div class="card">
                <div class="pin-card">
                    <img class="img-pin" src="img/pin.svg"  >
                </div>
                <div class="my-img-container">
                    <a href="#${overId}">
                        <img class="img-card" src="${urlResult}" alt="photo">
                    </a>
                </div>
                <div class="card-body">
                    <p class="card-text">${titleResult}</p>
                </div>
            </div>
        </div>`    
    });
    images.forEach((img) => {
        img.addEventListener("click", function (event) {
            event.preventDefault();
            OverlayImgElm.src = img.getAttribute("data-url");
            overlayElm.classList.remove("hidden");
        })
    })
})
    .catch(function(error) {
        console.log("errore")
    });

closeBtnElm.addEventListener("click", function() {
    overlayElm.classList.add("hidden");
});