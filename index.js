import {menuArray} from './data.js';


function getMenuArray() {
    const menuString = menuArray.map((item) => {
        return (`
        <div class="menu-item">
            <div class="menu-item-description-left">
                <p class="item-img">${item.emoji}</p>
                <div class="menu-item-description">
                    <p>${item.name}</p>
                    <p>${item.ingredients.join(", ")}</p>
                    <p>$${item.price}</p>
                </div>
            </div>
            <button class="add-btn" id="${item.id}">+</button>
        </div>
            `)
    }).join("");
    return menuString;
}

function render() {
    document.getElementById('menu').innerHTML = getMenuArray();
}

render();