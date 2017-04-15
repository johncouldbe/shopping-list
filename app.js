$(function(){
/* ******---DATA ---****** */
  var currentItems = {
    items:[]
  };

  var listItems = "";
  var bool = true;

/* ******---STATE FUNCTIONS ---****** */
function addItem(currentItems, item){
  currentItems.items.push(item);
}

function deleteItems(currentItems, item){

}

/* ******--- RENDER FUNCTIONS ---****** */
function renderList(currentItems, list){
  if (bool === true) {
    bool = false;
    listItems = currentItems.items.map(function(item){
    return `<li>
      <span class="shopping-item js-shopping-item">`+ item + `</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-checker">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
    });
  }
  else {
    listItems = list.html() + `<li>
      <span class="shopping-item js-shopping-item">` + $('.js-entry').val() + `</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-checker">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
  }
  list.html(listItems);
}

function checker(item){
  return item.closest('li').find('.js-shopping-item').toggleClass('shopping-item__checked');
}

/* ******--- CLICK EVENTS ---****** */
  $('.js-shopping-form').submit(function(e){
    e.preventDefault();
    addItem(currentItems, $('.js-entry').val());
    renderList(currentItems, $('.js-shopping-list'));
  });

  $('ul').on('click','.js-checker', function(){
    checker($(this));
  });

  $('ul').on('click','.js-delete', function(){
    $(this).closest('li').remove();

  });
});
