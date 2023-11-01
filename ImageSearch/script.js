const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const resultBox = document.getElementById("search-result");
const showMore = document.getElementById("show-more-button");
const accessKey = '9mQqTZBdUiQtltfZSHBxYKLnrA6vH6ov33IdYylIbWw' ;

let keyword = "";
let page = 1;
async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    if(page === 1){
        resultBox.innerHTML = "";
    }
    const results = data.results;

    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        resultBox.appendChild(imageLink);
    })
}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
    showMore.style.display = "block";
})
showMore.addEventListener("click",()=>{
    page += 1;
    searchImages();
})