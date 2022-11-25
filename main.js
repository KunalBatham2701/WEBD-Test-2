var search = document.getElementById('sear');
var form = document.getElementById('form');
form.addEventListener("submit", (e) => {
  e.preventDefault();
  search_movie();
});
function search_movie() {
    var url_2 = `https://api.tvmaze.com/search/shows?q=${search.value}`;
    // console.log(search.value);
    fetch(url_2)
        .then((res) => {
          
            return res.json();
        })
        .then((data) => {
            console.log(data);
            add_search(data);
        });
}
function add_search(data) {
      var search_movies = document.querySelector(".s-box"); 
      var movies = document.querySelector(".moviess");
      movies.innerHTML='';
      console.log(data);
      for (const movie in data) {
          const imgg = data[movie].show.image.original;
          movies.innerHTML += `<div class='movie'>
                      <img src=${imgg} height="250"/>  
                  </div>`;
      };
      search_movies.style.visibility = "visible";
    
  };