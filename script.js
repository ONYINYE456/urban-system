function generate() {
    var quotes = {
        "- Charlotte Brontë, Jane Eyre": '"I am no bird; and no net ensnares me: I am a free human being with an independent will."',
        "- Virginia Woolf": '“Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.”',
        "- John Green": '“Some tourists think Amsterdam is a city of sin, but in truth it is a city of freedom. And in freedom, most people find sin.”'
    }

    var authors = Object.keys(quotes);
    var randomAuthor = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[randomAuthor];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = randomAuthor;
}

generate();
