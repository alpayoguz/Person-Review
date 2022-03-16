// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.He is talented and handsome",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// const btnsprise = document.querySelector(".suprise");
// btnsprise.addEventListener("click", setCardImg);

// let num;
// function setCardImg(){

//   let ranNum = Math.floor(Math.random()*reviews.length);
//   if(ranNum !== num){
//         num = ranNum;
//         let cardImg = document.querySelector(".card-img-top");
//       cardImg.src = reviews[num].img;
//       let cardTitle = document.querySelector(".card-title");
//       cardTitle.innerText = reviews[num].name ;
//       let cardSubTitle = document.querySelector(".card-subtitle");
//       cardSubTitle.innerText = reviews[num].job;
//       let cardText = document.querySelector(".card-text");
//       cardText.innerText = reviews[num].text;
//       console.log(reviews[num].id);
//   }else{
//     setCardImg();
//   }
  

// }
//  Select Person Elements
let cardImg = document.querySelector(".card-img-top");
let cardTitle = document.querySelector(".card-title");
let cardSubTitle = document.querySelector(".card-subtitle");
let cardText = document.querySelector(".card-text");
let currentItem = 3;

// Select Prev-Next-Random Buttons
const nextButton = document.querySelector(".next-but");
const prevButton = document.querySelector(".prev-but");
const ranButton = document.querySelector(".suprise");


window.addEventListener("DOMContentLoaded", ()=>{
  setPerson(currentItem);
})

function setPerson(personNum){
  let item = reviews[personNum];
  cardImg.src = item.img;
  cardTitle.innerText = item.name;
  cardSubTitle.innerText = item.job;
  cardText.innerText = item.text;
}

// Event Listeners To Prev-Next Buttons
nextButton.addEventListener("click",()=>{
  currentItem++;
  
  if(currentItem> reviews.length -1){
    currentItem = 0;
  }
  console.log(currentItem);
  setPerson(currentItem);
})

prevButton.addEventListener("click",()=>{
  currentItem--;
  if(currentItem<0){
      currentItem = reviews.length - 1;
  }
  setPerson(currentItem);
})

// Random Person Button
ranButton.addEventListener("click",()=>{
  currentItem = Math.floor(Math.random()*reviews.length);
  setPerson(currentItem);
})


