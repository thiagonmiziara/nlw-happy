const options = {
    dragging: false,
    touchZoom: false,
    dobleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
};

//create map
const map = L.map("mapid", options).setView([-18.9339068, -48.2383719], 15);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

//create and add marker
L.marker([-18.9339068, -48.2383719], { icon }).addTo(map);


/*image galery*/

function selectImage(event) {

    const button = event.currentTarget;

    //remove a class .active
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach((button) => {
        button.classList.remove("active");
    });

    // selecionar a image clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details  >  img");

    //atualizar o container de image
    imageContainer.src = image.src

    //adicionar a classe .active para o botao clicado
    button.classList.add("active");
}