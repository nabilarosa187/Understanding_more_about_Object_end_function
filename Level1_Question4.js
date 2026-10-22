const book = { title: "Clean Code", author: "Robert C. Martin", year: 2008 };

function getProperty(object, key) {
    return object[key];
}

console.log(getProperty(book, "title"));
console.log(getProperty(book, "author"));
console.log(getProperty(book, "year"));
console.log(getProperty(book, "publisher"));