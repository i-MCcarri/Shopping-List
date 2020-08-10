function shoppingList(){
    $('#js-shopping-list-form').submit(function (str){
        str.preventDefault();
        let listItem = $('#shopping-list-entry').val();
        console.log(listItem);
       // ----------- $('.shopping-item').empty();
        $('.shopping-list').append(`<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`)

    })
}
 // A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});


//declare function called ad item: 
//declare var 'listItem' to store value inside text field: 'shopping-list-entry'
//Validation check 
//Event: Add Submit on Form
/*
Append: `<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
*/

/* 
Requirements
In terms of user experience, your shopping list app must allow users to:

1. enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
2. check and uncheck items on the list by clicking the "Check" button
3. permanently remove items from the list

Additionally:

a. You must use a CDN-hosted version of jQuery => Done
b. Put your application code in a file called index.js and link to it in index.html => Done
c. Be sure to put both script elements at the bottom of the <body> element. => Done
d. Do not alter index.html or main.css other than adding the links to the external JavaScript inside index.html. Write JavaScript code that works with the existing HTML and CSS to implement the required features.
** Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().
/*