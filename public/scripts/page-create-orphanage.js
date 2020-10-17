//create map
const map = L.map('mapid').setView([-18.9339068, -48.2383719], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', ).addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

let marker;
// create and add markers
map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remover icon
    marker && map.removeLayer(marker);
    // add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add campo de fotos
function addPhotoField() {
    //pegar container de fotos #images
    const container = document.querySelector('#images');
    //pegar container para duplicar .new-images
    const fieldsContainer = document.querySelectorAll('.new-upload');
    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
    // verificar se o campo esta vazio se sim não add ao container de imagens
    const input = newFieldContainer.children[0];
    if (input.value == "") {
        return
    }
    //limpar o campo antes de adicionar o container de imagens
    input.value = '';

    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');
    if (fieldsContainer.length <= 1) {
        // limpar o valor do campo
        span.parentNode.children[0].value = "";
        return
    }
    //deletar o campo
    span.parentNode.remove();

}

//tseleção do sim e não

function toggleSelect(event) {
    //retirar a class .active(dos botes)
    document.querySelectorAll('.button-select button')
        .forEach(button => button.classList.remove('active'));

    //colocar a class .active nesse botao clicado
    const button = event.currentTarget;
    button.classList.add('active');

    // atualizar o meu input hidden com o valor seleionado
    const input = document.querySelector('[name="open_on_weekends"]')

    //verificar se sim ou não
    input.value = button.dataset.value

}
// desafio
/*function validate(event) {

   const needLatAndLng = true
   if(needLatAndLng){
       event.preventDefault()
       alert("selecione um ponto no mapa")
   }

}*/