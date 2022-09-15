const quantityCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${quantityCategories.length}`);

quantityCategories.forEach(function (quantityCategories, index) {
    const nameCategories = quantityCategories.querySelector('h2');
    const ElemtsCategori = quantityCategories.querySelectorAll('.item li');
console.log(`Category ${nameCategories.textContent}`);
console.log(`Elements: ${ElemtsCategori.length}`);
})







