function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}
// loadCategories();
function displayCategories(categories){
    //get the container
    const categoryContainer = document.getElementById("category-container");

    //loop operation to the array of objects

    for(let cat of categories)
    {
        console.log(cat);
        //create element
        const categoryDIv = document.createElement("div");
        categoryDIv.innerHTML = `<button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>`
        categoryContainer.appendChild(categoryDIv);
    }
}

loadCategories();
