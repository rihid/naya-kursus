let email = '';
let pass = '';

const formLogin = document.querySelector('#form-login');
formLogin.addEventListener('submit', evt => {
    evt.preventDefault();
    
    if(email == 'rizal@mail.com' && pass == 'asd'){
        const element = document.querySelector('.content');
        element.style = 'display: none;'

        const h1 = document.createElement('h1')
        document.body.appendChild(h1);
        h1.innerText = 'Selamat anda kena prank'
        
    } else{
        const errMsg = document.querySelector('span');
        errMsg.style.display = 'block';
    }
});

const inEmail = document.querySelector('#email');
inEmail.addEventListener('keyup', evt =>{
    email = evt.target.value;
});

const inPass = document.querySelector('#pass');
inPass.addEventListener('keyup', evt =>{
    pass = evt.target.value;
});