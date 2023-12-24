let btn = document.querySelector('.mobile-menu-bar')
let listLi = document.querySelectorAll('.navbar>li')
btn.addEventListener('click', () => {
    for (let i = 0; i < listLi.length; i++) {
        if (listLi[i].style.display == 'block') {
            listLi[i].style.display = 'none'
        }
        else {
            listLi[i].style.display = 'block'
        }
    }

})
