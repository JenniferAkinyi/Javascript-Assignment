let products = [{price: 10.99}, {price: 5.99}, {price: 29.99}]

const sum = products
    .map(product => product.price)
    .reduce((acc, curr) => acc + curr, 0)

console.log(sum)