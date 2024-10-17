import {menuArray} from './data.js';




function getMenuArray() {
    const menuString = menuArray.map((item) => {
        return (`
        <div class="menu-item">
            <div class="menu-item-description-left">
                <p class="item-img">${item.emoji}</p>
                <div class="menu-item-description">
                    <p class="menu-item-name">${item.name}</p>
                    <p class="ingredients">${item.ingredients.join(", ")}</p>
                    <p class="menu-item-price-p">$${item.price}</p>
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