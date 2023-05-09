const userInputList = document.querySelector('.inputList');

const addUserList = document.querySelector('.addList');

const viewUserListCont = document.querySelector('.viewList');
const suggestionText = document.querySelector('.suggestionText');

addUserList.addEventListener('click',() => {
  createUserElementList();
  clearUserInputText();
}); 
document.addEventListener('keydown',(e)=>{
  if(e.key === "Enter"){
    createUserElementList();
    clearUserInputText();
  }
  else{
       console.log(" ")
  }
});
function createUserElementList(){
  const createElement = document.createElement('p');

  const deleteList = document.createElement('i');

  deleteList.setAttribute('class','delete fas fa-trash-alt');
  
  deleteList.addEventListener('click', () =>{
    createElement.remove();
  });
  
  createElement.append(userInputList.value);
  
  createElement.classList.add('viewUserText');
  createElement.appendChild(deleteList);
  
  viewUserListCont.appendChild(createElement);
  addList.push(viewUserListCont);
  
}

function clearUserInputText(){
  userInputList.value = '';
}
