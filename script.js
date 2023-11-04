const menuButton = document.getElementById('menuButton');
const slideInMenu = document.getElementById('slideInMenu');
const simItems = document.getElementsByClassName('sim-Item');
const shopTrackOne = document.getElementById('trackOne');
const shopTrackTwo = document.getElementById('trackTwo');
const shopTrackThree = document.getElementById('trackThree');

const shopTiles = [shopTrackOne, shopTrackTwo, shopTrackThree];

const aeomPrints = [
    'AEOMAssets/pexels-tolga-ahmetler-18000249.jpg',
    'AEOMAssets/pexels-pincalo-15030785.jpg',
    'AEOMAssets/pexels-nelson-lorenz-18845175.jpg',
    'AEOMAssets/pexels-mhajr-invincible-18844347.jpg',
    'AEOMAssets/pexels-lukas-rychvalsky-3075449.jpg',
    'AEOMAssets/pexels-carolin-wenske-18758628.jpg',
    'AEOMAssets/pexels-luke-miller-18802089.jpg',
    'AEOMAssets/pexels-lexi-lauwers-2840896.jpg',
    'AEOMAssets/pexels-bekir-donmez-6304646.jpg'
];

// write a script that uses a loop to populate the three shop tiles
function populateShopTile () {
    let printList = 0;
    for (let i = 0; i < shopTiles.length; i++) {
        for (let itemCount = 0; itemCount < 3; itemCount++ && printList++) {
            const item = document.createElement('img');
            item.src = aeomPrints[printList];
            item.classList.add('shopItems');
            shopTiles[i].appendChild(item);
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