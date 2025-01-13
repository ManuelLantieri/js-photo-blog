// dom

const cardElm = document.getElementById("cards-containers")
const overlayElm = document.getElementById("over-img-container")
axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6').then(function(response) {
    response.data.array.forEach((element,index) => {
        const title = element.title;
        const url = element.url;
        const overId = `overlayElm-${index}`;

        cardElm.innerHTML +=
        `<div class="col-12 col-sm-6 col-lg-4">
            <div class="card">
                <div class="pin-card">
                    <img class="img-pin" src="img/pin.svg"  >
                </div>
                <div class="my-img-container">
                    <a href="#${overId}">
                        <img class="ms-img-blog" src="${url}" alt="photo">
                    </a>
                </div>
                <div class="card-body">
                    <p class="card-text">${title}</p>
                </div>
            </div>
        </div>`
        
    });


    
})
