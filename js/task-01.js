const numberOfCategoriesEl = document.querySelectorAll("li.item");
console.log('Number of category:', numberOfCategoriesEl.length);

const titleCategoryEl = document.querySelectorAll("h2");

titleCategoryEl.forEach(function callback(category) {
    console.log('Category:', category.textContent);
    console.log('Elements:', category.nextElementSibling.children.length);
});