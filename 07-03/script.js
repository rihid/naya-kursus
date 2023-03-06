const button = document.querySelector('#btn');
button.addEventListener( 'click', () => {
    let counter = 7;
    const interval = setInterval( () => {
        counter--;
        if(counter === 0){
            const element = document.querySelector('.container');
            element.style = 'display: none;'
        
            const h1 = document.createElement('h1')
            document.body.appendChild(h1);
            h1.innerText = 'Selamat Datang';
            clearInterval(interval);
        }else {
            let text = document.querySelector('span');
            (counter === 6) ? text.innerHTML = '...' : text.innerHTML = counter;
        }
        
    }, 1000)
    
})