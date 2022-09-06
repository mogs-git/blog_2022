const navs = document.querySelectorAll('.navbar')

navs.forEach(nav => {
    nav.addEventListener("mouseover", function() {
    nav.classList.add('nav-hover')
    })

    nav.addEventListener("mouseout", function() {
        nav.classList.remove('nav-hover')
        })
})




function compare( a, b ) {
    if ( a.post_date < b.post_date ){
      return 1;
    }
    if ( a.post_date > b.post_date ){
      return -1;
    }
    return 0;
  }
  

//text = text.replaceAll(".html", "")
// text = text.split('.html')
// console.log(text)
// text.forEach( blogtext => {
//     const blogpost = document.createElement("p");
//     blogpost.className = "blog-post"
//     blogpost.innerHTML = blogtext
//     document.getElementById("blog_list").appendChild(blogpost)
// })
arr.sort(function(a,b) {
  return b.post_date - a.post_date
});

for (item in arr) {
    const blog_anchor = document.createElement("a");
    const blogpost = document.createElement("div");
    const blogtitle = document.createElement("div");
    const blogdesc = document.createElement("div");
    const blogdate = document.createElement("div");

    blogpost.className = "blog-post"
    blogtitle.className = "blog-title"
    blogdesc.className = "blog-desc"
    blogdate.className = "blog-date"
    blogtitle.innerHTML = arr[item].post_name 
    blogdesc.innerHTML = arr[item].post_text
    blogdate.innerHTML = arr[item].post_date.toDateString();

    // blogpost.addEventListener("click", window.open(key, '_blank'))
    blog_anchor.setAttribute("href", arr[item].post_link);
    // blog_anchor.setAttribute("target", "_blank");
    blog_anchor.classList = "blog-anchor";
    blog_anchor.appendChild(blogpost)
    blogpost.appendChild(blogtitle)
    blogpost.appendChild(blogdesc)
    blogpost.appendChild(blogdate)
    // blogpost.appendChild(document.createElement("p"));
    document.getElementById("blog_list").appendChild(blog_anchor)
}

const posts = document.querySelectorAll('.blog-post')

posts.forEach(po => {
    po.addEventListener("mouseover", function() {
    po.classList.add('blog-post-hover')
    })

    po.addEventListener("mouseout", function() {
        po.classList.remove('blog-post-hover')
        })
})


// console.log(text)


