const userInputList = document.querySelector('.inputList');

const addUserList = document.querySelector('.addList');

const viewUserListCont = document.querySelector('.viewList');
const suggestionText = document.querySelector('.suggestionText');

addUserList.addEventListener('click',() => {
  createUserElementList();
  clearUserInputText();
}); 

function createUserElementList(){
  let recentDelete = [];
  let i = 0;
  const createElement = document.createElement('p');

  const deleteList = document.createElement('i');

  deleteList.setAttribute('class','delete fas fa-trash-alt');
  
  deleteList.addEventListener('click', () =>{
    createElement.remove();
  });
  
  createElement.append(userInputList.value);
  
  createElement.classList.add('viewUserText');
  createElement.appendChild(deleteList);
  
  viewUserListCont.appendChild(createElement)
  
}

function clearUserInputText(){
  userInputList.value = ' ';
}