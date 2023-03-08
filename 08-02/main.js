const jsonStr = `{
    "id": 9,
    "title": "Infinix INBOOK",
    "description": "Infinix Inbook X1 Ci3 10th 8GB...",
    "price": 1099,
    "discountPercentage": 11.83,
    "rating": 4.54,
    "stock": 96,
    "brand": "Infinix",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/9/1.jpg",
      "https://i.dummyjson.com/data/products/9/2.png",
      "https://i.dummyjson.com/data/products/9/3.png",
      "https://i.dummyjson.com/data/products/9/4.jpg",
      "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
    ]
}`

// Menampilakan Data
let pre = $('<pre></pre>');
$('.container').append(pre);
pre.text(jsonStr);

// Search
let jsonObj = JSON.parse(jsonStr)
let tampil = $('p');
tampil.text('...');
$('#inputan').on( 'keyup', function(evt){
    let userInput = evt.target.value;
    if(userInput in jsonObj){
        tampil.text(jsonObj[userInput]);
    }else{
        tampil.text('...');
    }
})

