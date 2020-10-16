Vue.component("book-view", {
    props: [ "book" ],
    template: "<li> {{ book.name }} <br> {{ book.cover }} <br> {{book.author}} <br></li>"
})

var app = new Vue({
    el: '#app',
    data: {
        message: "Book Types",
        visible: true,
        books: [
           { id:0, name: "Harry Potter",  cover: "⚡", author: "J.K. Rowling"},
           
           { id:1, name: "The Hunger Games", cover: "🏹", author: "Suzanne Collins"}
         ]
        },
});
