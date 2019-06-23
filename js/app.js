document.addEventListener('DOMContentLoaded', () => {

// event listeners

  const form = document.querySelector('#new-character-form');
  form.addEventListener('submit', handleFormSubmit)

  const deleteButton = document.querySelector('#delete-all-items');
  deleteButton.addEventListener('click', handleDeleteButton)
});

// form submit

const handleFormSubmit = function (evt) {
  evt.preventDefault();
  const newItem = document.createElement('li');
  newItem.textContent = `Name: ${evt.target.full_name.value},  Age: ${evt.target.age.value},  Fighting Style: ${evt.target.fighting_style.value},  Continent:  ${evt.target.continent.value}`

  const list = document.querySelector('ul');
  list.appendChild(newItem);



  const resetFormSubmit = document.querySelector('#new-character-form')
  resetFormSubmit.reset();
};

  //  delete all

const tekkenCharacterList = document.querySelector('#new-character')
const handleDeleteButton = function () {
  while (tekkenCharacterList.firstChild) {
  tekkenCharacterList.removeChild(tekkenCharacterList.firstChild);
  }
};


// const createTekkenListCharacter = function (form) {
//   const tekkenListCharacter = document.createElement('li');
//   tekkenListCharacter.classList.add('tekken-list-character')
//
//   const firstName = document.createElement('h2');
//   firstName.textContent = form.first_name.value;
//   tekkenListCharacter.appendChild(firstName);
//
//   const lastName = document.createElement('h2');
//   lastName.textContent = form.last_name.value;
//   tekkenListCharacter.appendChild(lastName);
//
//   const fightingStyle = document.createElement('h3');
//   fightingStyle.textContent = form.fighting_style.value;
//   tekkenListCharacter.appendChild(fightingStyle);
//
//   const age = document.createElement('p');
//   age.textContent = form.age.value;
//   tekkenListCharacter.appendChild(age);
//
//   const continent = document.createElement('p');
//   continent.textContent = form.continent.value;
//   tekkenListCharacter.appendChild(continent);
//
//   return tekkenListCharacter;
// }
//
//   const tekkenListCharacter = createTekkenListCharacter(event.target);
//   const tekkenList = document.querySelector('ul');
//   tekkenList.appendChild(tekkenListCharacter);
