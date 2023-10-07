 const btn = document.getElementById('menu-btn')
 btn.addEventListener('click', navToggle)
 const menu = document.getElementById('menu')


function navToggle(){
     btn.classList.add('open');
     menu.classList.toggle('flex');
     menu.classList.toggle('hidden');

}