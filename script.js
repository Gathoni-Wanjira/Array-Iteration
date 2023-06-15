const items = [
    {name: "bike", price: 100},
    {name: "TV", price: 200},
    {name: "album", price: 70},
    {name: "book", price: 60},
    {name: "phone", price: 300},
    {name: "keyboard", price: 100},
    {name: "computer", price: 400}
]

// The filter method.
// Lets assume that we need to get all the items that are less than 100 bob in this array by using filter method.


const filteredItems = items.filter((item) => {
    return item.price <= 100;
})
console.log(filteredItems);