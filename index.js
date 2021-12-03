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
    name: 'Pens(pack of 50)',
    imgSrc: 'img/PEN.webp',
    quantity: 1,
    price: 250,
  },
  {
    name: 'Screw driver set',
    imgSrc: 'img/screwDriver.webp',
    quantity: 1,
    price: 200,
  },
  {
    name: 'Hand sanitizer(5bottles) ',
    imgSrc: 'img/sanitizer.jpg',
    quantity: 1,
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
    name: 'iodex(50g)',
    imgSrc: 'img/iodex.jpg',
    quantity: 1,
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

let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
const containerDiv = document.getElementsByClassName('container');

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
const btn = document.getElementsByClassName('btn');

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

let cartContainer = document.createElement('div');
cartContainer.classList.add('cart-container');
document.body.appendChild(cartContainer);

let cartItemsArr = [];
let quantityNumber;
let cartButton;
let j = -1;
let quantityElemSet =
  '<button class = "decrease-btn">-</button> <span class = "total-quantity"> 1 </span> <button class = "increase-btn">+</button> </br> <button class = "remove-btn">Remove</button>';

let cartButtonContainer;
for (let i = 0; i < itemsArr.length; i++) {
  btn[i].addEventListener('click', function () {
    j++;
    cartItemsArr.push(container.children[i].innerHTML);
    let cartItemContainer = document.createElement('div');
    cartItemContainer.classList.add('cart-item-container');
    cartContainer.appendChild(cartItemContainer);

    cartItemContainer.innerHTML +=
      cartItemsArr[cartItemsArr.length - 1] + quantityElemSet;

    let newElem = document.createElement('p');

    newElem.innerText = 'Visit Cart';
    newElem.classList = 'deactivated';
    this.parentNode.replaceChild(newElem, this);
    console.log(j);
    cartButton = cartContainer.children[j].children[4];
    cartButton.remove();
    quantityDIv = cartContainer.children[j].children[2];
    quantityDIv.remove();
  });
}

do {
  console.log('baal');
  const increaseButton = Document.getElementsByClassName('increase-btn');
  const decreaseButton = Document.getElementsByClassName('decrease-btn');
  const removeButton = Document.getElementsByClassName('remove-btn');
  let totalQuantitySpan = Document.getElementsByClassName('total-quantity ');

  for (let x = 0; x < cartItemsArr.length; x++) {
    cartItemQuantity = totalQuantitySpan[i].innerText;
    increaseButton[i].addEventListener('click', function () {
      console.log('increase');
    });
    decreaseButton[i].addEventListener('click', function () {
      console.log('decrease');
    });
  }
} while (cartItemsArr.length > 0);
// cartContainer = document.getElementsByClassName('cart-container');
// cartItemContainer = cartContainer.children;
// if ((cartItemsArr.length = 0)) {
//   cartContainer.innerHTML = '<h1>Add items </h1>';
// } else {
//   for (j >= 0; j < cartItemsArr.length; j++) {
//     let newElemSet =
//       '<button class = "decrease-btn"></button> <button class = "increase-btn"></button> <button class = "remove-btn"></button>';
//     cartItemContainer[j].appendChild(newElemSet);
//     console.log('ghanta');
//   }
// }
// console.log(plusButton);

// function cartItemDivCreator() {
//   cartContainer.innerHTML +=
//     '<div class="cart-item-container"><img class ="cart-image" src =""><h3 class = "cart-item-name"></h3><h4>Quantity: <span class="cart-quantity"></span> </h4><h4>Price: <span class="cart-price"></span> </h4><button class = "plus">+</button><button class="minus">-</button> </div>';
//   return;
// }

// let cartItemImage;
// let cartItemName;
// let cartItemQuantity;
// let cartItemPrice;
// let cartPlusButton;
// let cartMinusButton;
// function cartAssign() {}
// for (let i = 0; i < itemsArr.length; i++) {
//   btn[i].addEventListener('click', function () {
//     cartItemsArr.push(itemsArr[i]);
//     let newElem = document.createElement('p');

//     newElem.innerText = 'Visit Cart';
//     newElem.classList = 'deactivated';
//     this.parentNode.replaceChild(newElem, this);
//     cartItemDivCreator();
//     //
//     cartItemImage = document.querySelectorAll('.cart-image');
//     cartItemName = document.querySelectorAll('.cart-item-name');
//     cartItemQuantity = document.querySelectorAll('.cart-quantity');
//     cartItemPrice = document.querySelectorAll('.cart-price');
//     cartPlusButton = document.querySelectorAll('.plus');
//     cartMinusButton = document.querySelectorAll('.minus');
//     cartItemImage[i].src = cartItemsArr[i].imgSrc;
//     console.log(cartItemsArr[i].imgSrc);
//     console.log(cartItemImage[i]);
//   });
// }
// // console.log(cartContainer);

// if (cartItemsArr !== []) {
//   for (let i = 0; i < cartItemsArr.length; i++) {
//     cartItemImage[i].src = itemsArr[i].imgSrc;
//   }
// }

// for (let i = 0; i < itemsArr.length; i++) {
//   btn[i].addEventListener('click', function () {
//     let cartItemContainer = document.createElement('div');
//     cartItemContainer.classList.add('cart-item-container');

//     //another

//     if (cartItemsArr[i] !== container.children[i].innerHTML) {
//       cartContainer.appendChild(cartItemContainer);
//       cartItemsArr.push(container.children[i].innerHTML);

//       cartItemContainer.innerHTML += cartItemsArr[cartItemsArr.length - 1];
//     } else {
//       cartContainer.children[i].children[2].innerText = `Quantity: ${(itemsArr[
//         i
//       ].quantity += 1)}`;
//     }
//   });
// }

//another
