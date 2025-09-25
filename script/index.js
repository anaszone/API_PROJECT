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
    categoryDIv.innerHTML = `<button onclick = "loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>`;
    categoryContainer.appendChild(categoryDIv);
  }
}

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
}

const loadCategoryVideos = (id) => {
   
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
     console.log(url);

     fetch(url)
     .then(res=>res.json())
     .then(data=> displayVideos(data.category));
};

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = "";
  videos.forEach((video) => {
    console.log(video);

    const videoCart = document.createElement("div");
    videoCart.innerHTML = `
        
       <div class="card bg-base-100 shadow-sm">
        <figure class="relative">
          <img class = "w-full h-[150px] object-cover" src="${video.thumbnail}" alt="Shoes" />
          <span
            class="absolute bottom-2 right-2 text-sm text-white bg-black px-2 rounded"
            >3hrs 56 min ago</span
          >
        </figure>
        <div class="flex gap-3 px-0 py-5">
          <div class="profile">
            <div class="avatar">
              <div
                class="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2"
              >
                <img
                  src="${video.authors[0].profile_picture}"
                />
              </div>
            </div>
          </div>
          <div class="intro">
            <h2 class="text-sm font-semibold">Midnight Serenade</h2>
            <p class="text-sm text-gray-400 flex gap-1">
              ${video.authors[0].profile_name}
              <img
              class="w-5 h-5"
                src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png"
                alt=""
              />
            </p>
            <p class="text-sm text-gray-400 flex gap-1">${video.others.views} views</p>
          </div>
        </div>
      </div>
        
        `;
    videoContainer.appendChild(videoCart);
  });
};

loadCategories();
// loadVideos();
