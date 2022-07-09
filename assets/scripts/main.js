let booksList = document.querySelector(".books__list");
let searchBox = document.querySelector(".search__books--input");
let addInput = document.querySelector(".add__books--input");

//PLEASE IGNORE ALL COMMENTS

/*
steps for adding books:
1. Pick the addInput function
2. we want to add (push) the elements created in a place to be stored and then displayed
3. So we will Create an array to push elemnts value in
4. we want to call these elements created and display them in a container
** we want to make sure the add input doen't accept spaces as a value
** we want to make sure that the input clears after evey insertion
** we want to erase the input value to prevent it from being added when the loop runs 
*/

/*
steps for delete button
1. pass the i (index) premeter for the elements to be deleted
2. pass an event to be excuted (onclick)
3. apply the method that will remove the element onclick (splice) 
4. invoke the function to be implemented
*/

/*
steps for seach functionality
1. we want to pick the searchbox values 
2. we want to store these values
3. A block of code to when the search matches any of the existing books, return it
4. invoke the search function to run
 */

let inputData = ["The Alchemist", "Notes from underground", "Any and all water is the color of drowning", "The stranger", "Sufi world"];

function addBooks(e) {
  e.preventDefault();
  if (addInput.value.trim() === "") {
    //input won't accept space as a value
    return;
  }
  inputData.push(addInput.value); // pushing elements in the array
  displayData(inputData);
  addInput.value = ""; //input is cleared after insertion
}

function displayData(dataMatch) {
  booksList.innerHTML = ""; // to erase the input value to prevent it from being added again when the loop runs
  dataMatch.forEach((book, i) => {
    //foreach function loops and return every element of the array
    booksList.innerHTML += `
    <li class="books__list--items">
        <span>${book}</span>
        <button class="delete__button" onclick="deleteBooks(${i})">
            <img src="..//assets/images/trash3-fill.svg" alt="blue delete icon">
        </button>
    </li>
    `;
  });
}

displayData(inputData);

function deleteBooks(i) { //fucntion using the i premeter to excute the code below on
  inputData.splice(i, 1); //removing the element with a start of i and delete count of 1
  displayData(inputData); //invoking the associated function for the created elements
}

function preventSubmit(event) {
  event.preventDefault();
}

function searchBooks() { // picking the search input we passed to the form input
  let bookText = searchBox.value.toLowerCase(); //storing the seachbox value
  let searchResult = []; //a place save the values in
  searchResult = inputData.filter((bookItem) => { //when the search matches any of the existing books, return it
    return bookItem.toLowerCase().includes(bookText);
  });
  displayData(searchResult); //invoking the function
}
