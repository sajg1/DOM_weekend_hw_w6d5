document.addEventListener('DOMContentLoaded', () => {

// event listeners

  const form = document.querySelector('#new-character-form');
  form.addEventListener('submit', handleFormSubmit)

  const deleteButton = document.querySelector('#delete-all-items');
  deleteButton.addEventListener('click', handleDeleteButton)
});

// create Tekken list

const createTekkenListCharacter = function (form) {
  const tekkenListCharacter = document.createElement('li');
  tekkenListCharacter.classList.add('tekken-list-character')

  const fullName = document.createElement('h2');
  fullName.textContent = `Name: ${form.full_name.value}`;
  tekkenListCharacter.appendChild(fullName);

  const fightingStyle = document.createElement('h3');
  fightingStyle.textContent = `Fighting Style: ${form.fighting_style.value}`;
  tekkenListCharacter.appendChild(fightingStyle);

  const age = document.createElement('p');
  age.textContent = `Age: ${form.age.value}`;
  tekkenListCharacter.appendChild(age);

  const continent = document.createElement('p');
  continent.textContent = `Continent: ${form.continent.value}`;
  tekkenListCharacter.appendChild(continent);

  return tekkenListCharacter;
}

// form submit

const handleFormSubmit = function (evt) {
  evt.preventDefault();

  const tekkenListCharacter = createTekkenListCharacter(event.target);
  const tekkenList = document.querySelector('ul');
  tekkenList.appendChild(tekkenListCharacter);

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
