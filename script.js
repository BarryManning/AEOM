const menuButton = document.getElementById('menuButton');
const slideInMenu = document.getElementById('slideInMenu');
const simItems = document.getElementsByClassName('sim-Item');
const shopTrackOne = document.getElementById('trackOne');
const shopTrackTwo = document.getElementById('trackTwo');

const aeomPrints = [
    'AEOMAssets/pexels-tolga-ahmetler-18000249.jpg',
    'AEOMAssets/pexels-pincalo-15030785.jpg',
    'AEOMAssets/pexels-nelson-lorenz-18845175.jpg',
    'AEOMAssets/pexels-mhajr-invincible-18844347.jpg',
    'AEOMAssets/pexels-lukas-rychvalsky-3075449.jpg',
    'AEOMAssets/pexels-carolin-wenske-18758628.jpg'
];

function populateShopTile() {

    for (let i = 0; i < aeomPrints.length; i++) {
        const img = document.createElement('img'); // Create a new img element
        img.src = aeomPrints[i]; // Set the src attribute with the image link from simItems
        img.classList.add('shopItems');

        if (shopTrackOne.childElementCount === 3){
            shopTrackTwo.appendChild(img); // Add the img element to the shopTile container
        } else {
            shopTrackOne.appendChild(img); // Add the img element to the shopTile container
        }
    }
}

populateShopTile();

function makeOpaque (items) {
    for (let i = 0; i < items.length; i++){
        items[i].style.transition = '0.6s';
        items[i].style.opacity = '100';
    }
};

function makeTransparent (items) {
    for (let i = 0; i < items.length; i++){
        items[i].style.transition = '0.6s';
        items[i].style.opacity = '0';
    }
};

menuButton.addEventListener('click', () => {
    if (slideInMenu.style.width == '300px') {
        slideInMenu.style.width = '0px';
        makeTransparent(simItems)
    } else {
        slideInMenu.style.transition = '0.6s';
        slideInMenu.style.width = '300px';
        makeOpaque(simItems);
    }
});

function addPrintToTrack () {

}