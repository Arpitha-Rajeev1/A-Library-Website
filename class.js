class Book {
    constructor(bookName, author, category){
        this.bookName = bookName;
        this.author = author;
        this.category = category;
    }
}

class Display {
    add(book){
        let tableBody = document.getElementById('tableBody');
    let html = `<tr>
                    <td>${book.bookName}</td>
                    <td>${book.author}</td>
                    <td>${book.category}</td>
                </tr>`
    tableBody.innerHTML += html;
    }

    validate(book) {
        if(book.bookName==='' || book.author==='') {
            return false;
        }
        else {
            return true;
        }
    }

    clear(){
        document.getElementById('book').value = '';
        document.getElementById('author').value = '';
    }

    alertt(displayMessage){
        alert(displayMessage);
    }
}

let submit = document.getElementById('add');
submit.addEventListener('click', formSubmit);

function formSubmit(e) {
    e.preventDefault()
    let bookName = document.getElementById('book').value;
    let author = document.getElementById('author').value;
    let category;
    let basics = document.getElementById('basics');
    let advanced = document.getElementById('advanced');
    let interview = document.getElementById('interview');

    if(basics.checked) {
        category = basics.value;
    }
    else if(advanced.checked) {
        category = advanced.value;
    }
    else if(interview.checked){
        category = interview.value;
    }

    // create an instance of Book constructor function and pass the values to it to initialize
    let book = new Book(bookName, author, category)

    // create an instance of Display function and use its method 
    let display = new Display();

    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.alertt('Book added successfully');
    }
    else {
        display.alertt('Failed to add book');
    }
    e.preventDefault();
}

