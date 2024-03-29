const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn img')
const dropDownMenu = document.querySelector('.dropdown-menu')

function changeImage (){
    let displayImage = document.getElementById('icon1')
    if (displayImage.src.match('./img/icons/menu.svg')){
        displayImage.src = './img/icons/close.svg'
    } else {
        displayImage.src = './img/icons/menu.svg'
    }
}

toggleBtn.onclick = function (){
    dropDownMenu.classList.toggle('open')
}
