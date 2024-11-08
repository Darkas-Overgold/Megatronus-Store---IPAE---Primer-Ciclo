// Datos de muestra para juegos y ofertas
const games = [
    {
        title: "Dragon Ball: Sparking! Zero",
        description: "¡Libera tu potencial Saiyajin!",
        image: "images/dragonball.jpg"
    },
    {
        title: "Persona 3: Reloaded",
        description: "Sumérgete en batallas por turnos.",
        image: "images/persona.jpg"
    },
    {
        title: "Metaphor: ReFantazio",
        description: "Juegos de turnos otra vez.",
        image: "images/metaphor.jpg"
    }
];

const offers = [
    {
        title: "Descuento para universitarios",
        description: "¡30% de descuento al presentar tu carnet universitario!",
        image: "images/carnet.jpeg"
    },
    {
        title: "Poster",
        description: "¡Compra un producto auspiciador y llévate un poster del mismo!",
        image: "images/poster.jpg"
    },
    {
        title: "Remate",
        description: "¡Llévate un remate, juegos de dudosa calidad a bajo precio, tengo una familia que alimentar!",
        image: "images/oferta.jpg"
    }
];

// Función para renderizar juegos
function renderGames() {
    const gameList = document.getElementById('game-list');
    games.forEach(game => {
        const card = `
            <div class="col-md-4">
                <div class="card animate-flipIn">
                    <img src="${game.image}" class="card-img-top" alt="${game.title}">
                    <div class="card-body">
                        <h5 class="card-title">${game.title}</h5>
                        <p class="card-text">${game.description}</p>
                        <a href="#" class="btn btn-warning">Comprar Ahora</a>
                    </div>
                </div>
            </div>
        `;
        gameList.innerHTML += card;
    });
}

// Función para renderizar ofertas
function renderOffers() {
    const offerList = document.getElementById('offer-list');
    offers.forEach(offer => {
        const card = `
            <div class="col-md-4">
                <div class="card animate-flipIn">
                    <img src="${offer.image}" class="card-img-top" alt="${offer.title}">
                    <div class="card-body">
                        <h5 class="card-title">${offer.title}</h5>
                        <p class="card-text">${offer.description}</p>
                        <a href="#" class="btn btn-danger">Obtener Oferta</a>
                    </div>
                </div>
            </div>
        `;
        offerList.innerHTML += card;
    });
}

// Función para manejar la envío del formulario
function handleFormSubmission(event) {
    event.preventDefault(); // Prevenir el comportamiento de envío del formulario por defecto
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Mostrar un mensaje (puedes mejorar esto más)
    const formMessage = document.getElementById('form-message');
    formMessage.innerHTML = `<div class="alert alert-success">¡Gracias, ${name}! Tu mensaje ha sido enviado.</div>`;

    // Limpiar los campos del formulario
    document.getElementById('contact-form').reset();
}

// Escuchadores de eventos
document.getElementById('contact-form').addEventListener('submit', handleFormSubmission);

// Renderizar los juegos y ofertas al cargar la página
renderGames();
renderOffers();