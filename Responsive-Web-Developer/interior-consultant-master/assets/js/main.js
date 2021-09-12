const btn = document.getElementById('header-btn')
const headerNav = document.getElementById('header-nav')

btn.addEventListener('click', () => {
  //Modal no visible
  if (headerNav.classList.contains('nav--hidden')) {
    headerNav.classList.remove('nav--hidden')
    headerNav.classList.add('nav--visible')
    btn.classList.add('btn--close')

    //Modal visible
  } else {
    headerNav.classList.remove('nav--visible')
    headerNav.classList.add('nav--hidden')
    btn.classList.remove('btn--close')
  }
})
