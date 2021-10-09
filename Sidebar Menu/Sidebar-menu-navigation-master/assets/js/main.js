// SHOW MENU
const showMenu = (toggleId, navbar, bodyId) => {
    const nav = document.getElementById(navbar),
    toggle = document.getElementById(toggleId),
    body = document.getElementById(bodyId)

    if(toggle && nav) {
        toggle.addEventListener('click', ()=> {
            toggle.classList.toggle('rotate')
            
            nav.classList.toggle('show')
            
            body.classList.toggle('expander')
        })
    }
}
showMenu('nav-toggle','navbar','body')


// LINK ACTIVE COLOR
const linkColor = document.querySelectorAll('.nav__link');   
function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
}

linkColor.forEach(l => l.addEventListener('click', colorLink))