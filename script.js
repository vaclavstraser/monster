const template = document.querySelector(".card-container");
const cardList = document.querySelector(".card-list");
const searchBar = document.querySelector(".search")
let monsters = []
const getMonsters = async () => {
  const response = await fetch("https://627beac8b54fe6ee009130e1.mockapi.io/monsters");
  const data = await response.json();
  return data;
};

const generateCards = (monsters) => {
  let i = 0;
  while (i < monsters.length) {
    const clone = template.cloneNode(true);
    const monsterImage = clone.querySelector(".monster-img");
    const monsterName = clone.querySelector(".monster-name");
    monsterName.textContent = monsters[i].name;
    const monsterEmail = clone.querySelector(".monster-email");
    monsterEmail.textContent = monsters[i].email;
    monsterImage.src = `https://robohash.org/${i}?set=set1`;
    clone.classList.remove("invisible");
    cardList.appendChild(clone);
    i++;
  }
};
searchBar.onkeyup = (Event) =>{
 cardList.innerHTML = ""
  const searchedName = Event.target.value;
  console.log(searchedName)
  const selectedMonsters = monsters.filter((monster) =>
  monster.name.toLowerCase().includes(searchedName.toLowerCase()))
console.log(selectedMonsters)
  generateCards(selectedMonsters);
};

const init = async () => {
   monsters = await getMonsters();
  generateCards(monsters);
};

init(); 