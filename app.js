const form = document.querySelector("#blog-form");
const blogList = document.querySelector("#blog-list");
let blogs = [];

if (localStorage.getItem("blogs")){
    blogs = JSON.parse(localStorage.getItem("blogs"));
    displayBlogs();
}

function displayBlogs() {
    blogList.innerHTML = "";
    for (let i = 0; i < blogs.length; i++) {
      const blog = blogs[i];
      const blogItem = `
                    <div class="blog-item">
                        <h2>${blog.title}</h2>
                        <p>${blog.content}</p>
                    </div>
      `;
      blogList.innerHTML = blogList.innerHTML + blogItem
  
    }
  }