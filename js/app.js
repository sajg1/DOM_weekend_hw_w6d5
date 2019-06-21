document.addEventListener('DOMContentLoaded', () => {

// form submit

  const handleFormSubmit = function (evt) {
    evt.preventDefault();
    const newItem = document.createElement('li');
    newItem.textContent = `Name: ${evt.target.first_name.value} ${evt.target.last_name.value},  Age: ${evt.target.age.value},  Fighting Style: ${evt.target.fighting_style.value},  Continent:  ${evt.target.continent.value}`

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

// event listeners

  const form = document.querySelector('#new-character-form');
  form.addEventListener('submit', handleFormSubmit)

  const deleteButton = document.querySelector('#delete-all-items');
  deleteButton.addEventListener('click', handleDeleteButton)
});
