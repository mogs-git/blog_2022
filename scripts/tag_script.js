let my_arr = []
for (let tag_dict in tag_arr) {my_arr.push(tag_arr[tag_dict]['tags'])} 
all_tags = Array.prototype.concat.apply([], my_arr).filter((v, i, a) => a.indexOf(v) === i);

console.log(all_tags)
const tag_cont = document.getElementById("tag_container")
all_tags.forEach(tag => {
    const tag_div = document.createElement("div")
    tag_div.innerHTML = tag
    tag_div.classList = "tag-title"
    tag_cont.appendChild(tag_div)

    let links_to_make = []
   tag_arr.forEach( blogpost => {
        if (blogpost['tags'].includes(tag)) {
            links_to_make.push(blogpost)
        }
    })

    links_to_make.forEach(post => {
        const links_div = document.createElement("a")
        links_div.innerHTML = post['title']
        links_div.setAttribute("href", "../" + post['link']);
        links_div.setAttribute("target", "_blank");
        links_div.classList = "tag-link"
        tag_cont.appendChild(links_div)
        tag_cont.appendChild(document.createElement("p"))
    }) 
})

const tag_links = document.querySelectorAll('.tag-link')

tag_links.forEach(taglink => {
    taglink.addEventListener("mouseover", function() {
    taglink.classList.add('tag-link-hover')
    })

    taglink.addEventListener("mouseout", function() {
        taglink.classList.remove('tag-link-hover')
        })
})
