const categoriesEl = document.querySelector('#categories').querySelectorAll('.item');

console.log(`Number of ` + categoriesEl.length + ` categories.`);

for (const category of categoriesEl) {
 
    
    console.log(`Category: ` + category.firstElementChild.textContent);
    console.log(`Number of categories: ` + category.lastElementChild.children.length);

};