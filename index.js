// item-list

const itemsArr = [
  {
    name: 'Wireless Keyboard',
    imgSrc: 'img/wirelessKeyboard.webp',
    quantity: 1,
    price: 640,
  },
  {
    name: 'Wired Keyboard',
    imgSrc: 'img/wiredKeyboard.webp',
    quantity: 1,
    price: 320,
  },
  {
    name: 'Pens',
    imgSrc: 'img/PEN.webp',
    quantity: 50,
    price: 250,
  },
  {
    name: 'Screw driver set',
    imgSrc: 'img/screwDriver.webp',
    quantity: 1,
    price: 200,
  },
  {
    name: 'Hand sanitizer ',
    imgSrc: 'img/sanitizer.jpg',
    quantity: 5,
    price: 500,
  },
  {
    name: 'Axe scent',
    imgSrc: 'img/axe.jpg',
    quantity: 1,
    price: 257,
  },
  {
    name: 'Keyboard mouse combo(wireless)',
    imgSrc: 'img/keyboardMouse2.webp',
    quantity: 1,
    price: 899,
  },
  {
    name: 'iodex',
    imgSrc: 'img/iodex.jpg',
    quantity: 50,
    price: 80,
  },
  {
    name: 'Bodywash',
    imgSrc: 'img/bodywash.jpg',
    quantity: 1,
    price: 378,
  },
  {
    name: 'Facewash',
    imgSrc: 'img/facewash.jpg',
    quantity: 1,
    price: 98,
  },
  {
    name: 'Boat tws',
    imgSrc: 'img/boatTws.webp',
    quantity: 1,
    price: 1499,
  },
];

//html for items

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

let itemContainer;
let img;
let nameElem;
let quantityElem;
let priceElem;
let button;

for (let i = 0; i < itemsArr.length; i++) {
  itemContainer = document.createElement('div');
  itemContainer.classList.add('item-container');
  container.appendChild(itemContainer);

  img = document.createElement('img');
  img.classList.add('image');
  itemContainer.appendChild(img);

  nameElem = document.createElement('h3');
  itemContainer.appendChild(nameElem);

  quantityElem = document.createElement('h4');
  itemContainer.appendChild(quantityElem);

  priceElem = document.createElement('h4');
  itemContainer.appendChild(priceElem);

  button = document.createElement('button');
  button.innerText = 'Add to Cart';
  button.classList.add('btn');
  itemContainer.appendChild(button);
}
let btn = document.getElementsByClassName('btn');

//assigning items to created html

let itemElement;
for (let i = 0; i < itemsArr.length; i++) {
  itemElement = container.children[i].children;
  itemElement[0].src = itemsArr[i].imgSrc;
  itemElement[1].innerText = itemsArr[i].name;
  itemElement[2].innerText = `Quantity: ${itemsArr[i].quantity}`;
  itemElement[3].innerText = `Price: Rs.${itemsArr[i].price}`;
}

//cart part
// let title = document.getElementsByTagName('title');
// console.log(title);

let cartContainer = document.createElement('div');
cartContainer.classList.add('cart-container');
document.body.appendChild(cartContainer);
console.log(cartContainer);

// function sendToCart() {
//   let cartItemContainer = document.createElement('div');
//   cartContainer.appendChild(cartItemContainer);
//   cartItemContainer.classList.add('cart-item-container');
//   cartItemContainer.innerHTML = container.children[i];
// }
let cartItemsArr = [];
for (let i = 0; i < itemsArr.length; i++) {
  btn[i].addEventListener('click', function () {
    let cartItemContainer = document.createElement('div');
    cartContainer.appendChild(cartItemContainer);
    cartItemContainer.classList.add('cart-item-container');
    cartItemsArr.push(container.children[i].innerHTML);
    // if (cartItemsArr.includes(container.children[i].innerHTML) === false) {
    //   cartItemsArr.push(container.children[i].innerHTML);
    //   cartItemContainer.innerHTML = cartItemsArr[i].innerHTML;
    // } else {
    //   itemElement[2].innerText = `Quantity: ${itemsArr[i].quantity++}`;
    // }

    // // cartItemsArr[j]
    // //   ? function () {
    // //       itemElement[3].innerText = `Price: Rs.${itemsArr[i].quantity++}`;
    // //     }
    // //   : cartItemsArr.push(container.children[i].innerHTML);
    // // cartItemContainer.innerHTML = cartItemsArr[cartItemsArr.length - 1];

    // console.log(cartItemsArr);
    // console.log(cartItemsArr[cartItemsArr.length - 1]);

    cartItemContainer.innerHTML = container.children[i].innerHTML;
  });
}
