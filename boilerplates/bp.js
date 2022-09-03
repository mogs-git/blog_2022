const navs = document.querySelectorAll('.navbar')

navs.forEach(nav => {
    nav.addEventListener("mouseover", function() {
    nav.classList.add('nav-hover')
    })

    nav.addEventListener("mouseout", function() {
        nav.classList.remove('nav-hover')
        })
})
