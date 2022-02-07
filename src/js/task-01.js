const categoriesEl = document.querySelector('#categories').querySelectorAll('.item');

console.log(`Number of categories: ` + categoriesEl.length);

for (const category of categoriesEl) {
 
    
    console.log(`Category: ` + category.firstElementChild.textContent);
    console.log(`Elements: ` + category.lastElementChild.children.length);

};