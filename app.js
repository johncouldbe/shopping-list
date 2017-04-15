$(function(){
  /* ******---DATA ---****** */
  var currentItems = {};

  /* ******---STATE FUNCTIONS ---****** */
  function addItem(currentItems, item){
    if (!currentItems.hasOwnProperty(item)) {
      currentItems[item] = false;
    } else {
      alert('You already have \"' + item + '\" on the list!');
    }
  }

  function checkItems(currentItems, listedItem){
    var item = listedItem.closest('li').find('.js-shopping-item').text();
    if (currentItems[item] === false) {
      currentItems[item] = true;
    } else {
      currentItems[item] = false;
    }

  }

  function deleteItems(currentItems, listedItem){
    var item = listedItem.closest('li').find('.js-shopping-item').text();
    delete currentItems[item];
    console.log(currentItems);
  }
  /* ******--- RENDER FUNCTIONS ---****** */
  function renderList(currentItems, list){
    var listItems = ""
     Object.keys(currentItems).forEach(function(item){
      if(currentItems[item] === true){
        listItems += `<li> <span class="shopping-item js-shopping-item shopping-item__checked">`+ item + `</span> <div class="shopping-item-controls"> <button class="shopping-item-toggle js-checker"> <span class="button-label">check</span> </button> <button class="shopping-item-delete js-delete"> <span class="button-label">delete</span> </button> </div> </li>`;
      } else {
        listItems += `<li> <span class="shopping-item js-shopping-item">`+ item + `</span> <div class="shopping-item-controls"> <button class="shopping-item-toggle js-checker"> <span class="button-label">check</span> </button> <button class="shopping-item-delete js-delete"> <span class="button-label">delete</span> </button> </div> </li>`;
      }
    });
    list.html(listItems);
   }

   function clearInputField(){
     $('.js-entry').val("");
   }

  /* ******--- CLICK EVENTS ---****** */ $('.js-shopping-form').submit(function(e){                     e.preventDefault();
    addItem(currentItems, $('.js-entry').val());
    renderList(currentItems, $('.js-shopping-list'));
    clearInputField();
  });

  $('ul').on('click','.js-checker',function(){
    checkItems(currentItems, $(this));
    renderList(currentItems, $('.js-shopping-list'));
  });

  $('ul').on('click','.js-delete', function(){
    deleteItems(currentItems, $(this));
    renderList(currentItems, $('.js-shopping-list'));
  });

});
