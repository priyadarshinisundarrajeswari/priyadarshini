const foods = [
{
name:"Pizza",
country:"italy",
image:"pizza.jpeg",
desc:"Classic Italian dish with cheese and tomato."
},
{
name:"Sushi",
country:"japan",
image:"sushi.jpeg",
desc:"Japanese rice dish with seafood."
},
{
name:"Biryani",
country:"india",
image:"sushi.jpeg",
desc:"Spicy Indian rice dish with meat or vegetables."
},
{
name:"Tacos",
country:"mexico",
image:"tacco.jpeg",
desc:"Mexican tortilla filled with meat and veggies."
},
{
name:"Burger",
country:"usa",
image:"burger.jpeg",
desc:"American sandwich with beef patty."
}
];

const container = document.getElementById("foodContainer");
const filter = document.getElementById("countryFilter");

function displayFoods(foodList){
container.innerHTML="";

foodList.forEach(food=>{
const card = document.createElement("div");
card.classList.add("food-card");

card.innerHTML=`
<img src="${food.image}">
<h3>${food.name}</h3>
<p>${food.desc}</p>
`;

container.appendChild(card);
});
}

filter.addEventListener("change",()=>{

const value = filter.value;

if(value==="all"){
displayFoods(foods);
}else{
const filtered = foods.filter(food=>food.country===value);
displayFoods(filtered);
}

});

displayFoods(foods);