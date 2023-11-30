let hotel = [];
var $ = function (id) { return document.getElementById(id); }

function addInfo() {
    const name = $("firstname").value;
    const lname = $("lastname").value;
    const review = $("review").value;
    const comment = $("comment1").value;

    const cuisine = [];
    document.querySelectorAll('input[type="checkbox"][id$="-checkbox"]').forEach(checkbox => {
        if (checkbox.checked) {
            cuisine.push(checkbox.value);
        }
    });
    const hotel_book = { name, lname, review, comment, cuisine };
    hotel.push(hotel_book);
    console.log(hotel);
    display()

}
function display() {
    const outputTextarea = $("output");
    outputTextarea.innerHTML = "";
    hotel.forEach(hotel_book => {
        outputTextarea.innerHTML += `\nFirst Name: ${hotel_book.name}\nLast Name: ${hotel_book.lname}\nCuisines: ${hotel_book.cuisine}` +
            `\nReview: ${hotel_book.review}\nComment: ${hotel_book.comment}` + '\n';
    });
}