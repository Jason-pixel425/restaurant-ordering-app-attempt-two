import {menuArray} from './data.js';

const documentMainElm = document.getElementById('document');

const order = {
    name: "",
    items: [],
    total: 0
}


documentMainElm.addEventListener('click', e => {
    if (e.target.dataset.itemId) {
        if(e.target.className === "add-btn"){
            addItemToOrder(parseInt(e.target.dataset.itemId))
            e.target.disabled = true;
        } else {
            document.querySelector(`[data-item-id="${e.target.dataset.itemId}"]`).disabled = false;
            removeItemFromOrder(parseInt(e.target.dataset.itemId))
        }
     document.getElementById("order-items-outer-div").innerHTML = getOrderArray();
     document.getElementById("order-total").textContent = `$${order.total}`;

    }
})

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
            <button class="add-btn" id="add-btn" data-item-id="${item.id}">+</button>
        </div>
            `)
    }).join("");
    return menuString;
}

function addItemToOrder(itemId){
    console.log(order.items)
    order.items.push(menuArray.find(item => item.id === itemId));
    order.total += order.items.find(item => item.id === itemId).price;
}

function removeItemFromOrder(itemId){
    order.total -= menuArray.find(item => item.id === itemId).price;
    order.items = order.items.filter(item => itemId !== item.id);
}

function getTotal(){
    return (`
        `)
}

function getOrderArray() {
    const orderString = order.items.map((item) => {
        return (`
            <div class="order-items-inner-div">
                <div class="order-items-inner-div-left">
                    <p class="item-name">${item.name}</p>
                    <button class="remove-btn" data-item-id="${item.id}">Remove</button>
                    </div>
                <p class="item-price">$${item.price}</p>
            </div>
            `)
    }).join(" ")
    return orderString;
}

function render() {
    document.getElementById('menu').innerHTML = getMenuArray();
    
}

render();