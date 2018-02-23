var express = require("express");
var app = express();

app.get('/menu-items', function(request, response) {
    var menu = [
        {
            name: "Salmon maki",
            description: "8 piece dish of salmon maki",
            price: 45,
            numPieces: 8,
            isPlatter: false
        },
        {
            name: "Tuna dragon roll",
            description: "4 piece dish of tuna California rolls topped with avo and tempura crumbs",
            price: 65,
            numPieces: 4,
            isPlatter: false
        },
        {
            name: "Veggie California roll",
            description: "6 piece dish of avo and cucumber California rolls",
            price: 50,
            numPieces: 6,
            isPlatter: false
        },
        {
            name: "Solo Platter",
            description: "4 salmon maki, 1 tuna hand roll, and 2 tempura prawns",
            price: 110,
            numPieces: 7,
            isPlatter: true
        },
        {
            name: "Pair Platter",
            description: "8 salmon maki, 8 tuna Calafornia rolls, 4 salmon nigiri, 4 eel nigiri, and 2 crab ha nd rolls",
            price: 180,
            numPieces: 26,
            isPlatter: true
        }
    ];
    response.send(menu);
});

app.listen(8000, function() {
    console.log('Listening on port 8000');
});