const button = document.querySelector('#btn');
button.addEventListener( 'click', () => {
    let counter = 6;
    setInterval( () => {
        counter--;
        if(counter > 0){
            let text = document.querySelector('span');
            text.innerHTML = counter;
        } else{
            if(counter === 0){
                const element = document.querySelector('.container');
                element.style = 'display: none;'
        
                const h1 = document.createElement('h1')
                document.body.appendChild(h1);
                h1.innerText = 'Selamat Datang'
            }
        }
    }, 1000)
})