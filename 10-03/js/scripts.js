
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
});



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
};

// Get Commen
function showComments(id){
    api.get(`comments/post/${id}`)
    .then( res => {

        res.data.comments.forEach( cmts => {
            $(`#comments${id}`).append(`
                <div class="card card-body border-bottom" id='comments${id}'>
                    <h6 class="card-title">@${cmts.user.username}</h6>
                    <p class="m-0">${cmts.body}</p>
                </div>
            `)
            console.log(cmts)
        })
        
    })
}


// function showComment(id){
//     return {
//         dataCmts : [],
//         initData(){
//             return api.get(`comments/post/${id}`)
//                 .then(res => {
//                     res.data.comments.forEach( cmts => {
//                         console.log(cmts)
//                     })
//                 });
//         }
//     };
// }



// let y = {
//     singleData: [],
//     init(){
//         return api.get("posts/9")
//             .then(res => {
//                 return res.data;
//             });
//     }
// }
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
        
});

// Put Method

function dataEdit(post){
    let tags = document.querySelector('#tags')
    tags.setAttribute('value', `${post.tags}`)
    console.log(tags)
};
function updateData(){
    console.log('n')
}


// Delete Method

function delPost(id){
    api.delete(`posts/${id}`)
    .then(res => {
        if(res.data.isDeleted == true){
            let content = $('#posting')
            content.attr('id', `posting${id}`)
            $(`#posting${id}`).css('display', 'none')
        }
        console.log(res)
    })
}



