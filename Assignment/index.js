const myList = [
  ["Soap, 'Perfume", "Body Cream", "Hair Cream"],
  ["Rice", "Beans", "Spaghetti", "Noodles"],
  ["Salt", "Maggi", "Sugar", "Cooking ingredient"],
  ["Shirt", "Trousers", "Shoe", "Socks", "pants", "Shorts"],
  ["Skirt", "gown", "Pants", "Bra", "Blouse"],
  ["Phone", "Laptop", "Ear-pod", "Power bank"],
  ["Bournvits", "Milo", "Cornflakes", "Granula"],
  ["Biro", "Pencil", "notebook", "ruler"],
];

console.log(myList);

const list = [2000, 3000, 2500];

// let price = document.getElementById("price");

// const checkRadio = () => {
//   let jollof = document.getElementById("jollof");
//   if (jollof.checked) {
//     price.innerHTML = "hello";
//   }
// };

// document.getElementById("check_price").addEventListener(onclick, checkRadio());

let output = document.getElementById("output");
function checkPrice() {
  // accessing the radio buttons
  let radio1 = document.getElementById("radio1");
  let radio2 = document.getElementById("radio2");
  let radio3 = document.getElementById("radio3");
  // checking if any radio button is selected
  if (radio1.checked) {
    output.innerHTML = " Jollof Rice And Chicken is " + "$" + list[0];
  }
  if (radio2.checked) {
    output.innerHTML = "Fried Rice And Chicken " + "$" + list[1];
  }
  if (radio3.checked) {
    output.innerHTML = " Semo And Egusi Soup with Beef" + "$" + list[2];
  }
}

const Books = [
  {
    title: "A Space Odyssey",
    authors: "Arthur C. Clarke",
    publishYear: "2001",
  },
  {
    title: "New Revelations of the Americas Before",
    authors: " Charles C. Mann",
    publishYear: "1941",
  },
  {
    title: "Odyssey Two",
    authors: "Arthur C. Clarke",
    publishYear: "2010",
  },
  {
    title: "A Space Odyssey",
    authors: "Arthur C. Clarke",
    publishYear: "2001",
  },
  {
    title: "A Space Odyssey",
    authors: "Arthur C. Clarke",
    publishYear: "2001",
  },
  {
    title: "A Space Odyssey",
    authors: "Arthur C. Clarke",
    publishYear: "2001",
  },
];

const numbers = [10, 5, 20, 8, 50, 36, 24, 1, 3, 2, 9, 7, 6, 17, 25];

console.log(numbers);

const five_tmes_numbers = numbers.map(function (val) {
  return val * 5;
});

console.log(five_tmes_numbers);
