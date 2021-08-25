const btn = document.getElementById('header__btn')
const modal = document.getElementById('modal')

btn.addEventListener('click', () => {
  //Modal no visible
  if (modal.classList.contains('modal--hidden')) {
    modal.classList.remove('modal--hidden')
    modal.classList.add('modal--visible')

    //Modal visible
  } else {
    modal.classList.remove('modal--visible')
    modal.classList.add('modal--hidden')
  }
})
