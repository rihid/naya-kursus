const button = document.querySelector('#btn');
let counter = 5;
let text = document.querySelector('span');
button.addEventListener( 'click', () => {

    text.innerHTML = '...';
    const interval = setInterval( () => {
        if(counter === 0){
            const element = document.querySelector('.container');
            element.style = 'display: none;'
            
            const h1 = document.createElement('h1')
            document.body.appendChild(h1);
            h1.innerText = 'Selamat Datang!!!';
            clearInterval(interval);
        }else {
            text.innerHTML = counter;
        }
        counter--;
        
    }, 1000);
    
});