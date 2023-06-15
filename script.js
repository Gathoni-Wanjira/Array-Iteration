const items = [
    {name: "bike", price: 1000},
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

// Map Method.
// Its returns a required new array.

const itemsName = items.map((item) => {
    return item.name;
})
console.log(itemsName);


// Find Method
// It allows you to find a single object in an array.

const findItem = items.find((item) => {
    return item.name === 'computer';
})
console.log(findItem);

// forEach Method
// unlike other methods it doesnot return anything 

items.forEach((item) => {
    console.log(item.name)

})

// Some function
// It only returns true or false regarding to the conditions allocated not the actual entries
// output is true since there are items below 100 dollars price.

const hasCheapItems = items.some((item) => {
    return item.price <= 100
})
console.log(hasCheapItems)

// Every Method
// It checks if every item in the array is less than 100 dollars... not some items but all
// If every item is not below 100 dollars it returns false.

const hasExpensiveItems = items.every((item) => {
    return item.price >= 1000

})
console.log(hasExpensiveItems);


// Reduce Method
// it also takes a property other than the item only as shown below

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal

}, 0 )
console.log(total)

// This method wil start counting from our first value available(currentTotal)
// The current total value is 0 as indicated so thats what the whole items prices will be added to.
