let users = ['Eliott', 'Than', 'Déborah', 'Faustine', 'Armand', 'Lyndon', 'Michelle', 'Adam', 'Jason'];
let userImages = {
    'Eliott': 'images/eliott.jpg',
    'Than': 'images/than.jpg',
    'Déborah': 'images/deborah.jpg',
    'Faustine': 'images/faustine.jpg',
    'Armand': 'images/armand.jpg',
    'Lyndon': 'images/lyndon.jpg',
    'Michelle': 'images/michelle.jpg',
    'Adam': 'images/adam.jpg',
    'Jason': 'images/jason.jpg'
};
let restaurants = ['Monoprix', 'McDonalds', 'Burger King', 'Poulet Braisé', 'OTacos', 'Mangez & Cassez-vous'];
let restaurantImages = {
    'Monoprix': 'images/monoprix.webp',
    'McDonalds': 'images/mcdo.png',
    'Burger King': 'images/burgerking.png',
    'Poulet Braisé': 'images/pb.jpg',
    'OTacos': 'images/otacos.png',
    'Mangez & Cassez-vous': 'images/mangez.jpg'
};

document.addEventListener('DOMContentLoaded', function () {
    const userSelect = document.getElementById('userSelect');
    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user;
        option.textContent = user;
        userSelect.appendChild(option);
    });
});

document.getElementById('findRestaurant').addEventListener('click', function () {
    let existingImage = document.getElementById('userImage');
    if (existingImage) {
        existingImage.remove();
    }
    const selectedUser = document.getElementById('userSelect').value;
    const restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    document.getElementById('restaurantDisplay').textContent = `${selectedUser}, you should eat at ${restaurant}.`;
    let img = document.createElement('img')
    img.id = 'userImage';
    img.src = userImages[selectedUser];
    document.getElementById('imageContainer').appendChild(img);

    let restaurantImg = document.getElementById('restaurantImage');
    restaurantImg.src = restaurantImages[restaurant];
    restaurantImg.style.display = 'block';
});
