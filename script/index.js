function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}
// loadCategories();
function displayCategories(categories) {
  //get the container
  const categoryContainer = document.getElementById("category-container");

  //loop operation to the array of objects

  for (let cat of categories) {
    console.log(cat);
    //create element
    const categoryDIv = document.createElement("div");
    categoryDIv.innerHTML = `<button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>`;
    categoryContainer.appendChild(categoryDIv);
  }
}

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
}

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");
  videos.forEach((video) => {
    console.log(video);

    const videoCart = document.createElement("div");
    videoCart.innerHTML = `
        
        <div class="card bg-base-100 shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        
        `;
    videoContainer.appendChild(videoCart);
  });
};

loadCategories();
loadVideos();
