
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                // console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})



// Fetch Api
const api = axios.create({
    baseURL: "https://dummyjson.com"
});

// Get Method
let x = {
    datas : [],
    init(){
        return api.get("posts/")
            .then(res => {
                return res.data.posts;
            });
    }
}

// Single Post

let y = {
    singleData: [],
    init(){
        return api.get("posts/9")
            .then(res => {
                return res.data;
            });
    }
}
// console.log(y)

// Post Method

const form = document.querySelector('#post-form')
form.addEventListener('submit', function(e){
    e.preventDefault();
    let formData = new FormData(form)
    formData.append('userId', 9)

    api.post('posts/add', formData)
    .then(res => {
        if(res.status == 200){
            document.querySelector('#success-info').style = "block";
        }else{
            document.querySelector('#failed-info').style = "block";
        }
        // console.log(res.status)
    })
    .catch(err => err)
        
})

// Delete Method

function delPost(){
    api.delete('posts/1')
    .then(res => {
        if(res.data.isDeleted == true){
            document.querySelector('#hapus').style = "block"
        }
    })
    // console.log('j')
}



