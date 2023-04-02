
// Fetch Api

// Axios Config
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

// Add Like
function addLike(post){
    $(`.add-like${post.id}`).text(post.reactions+1);
    $(`#heart-${post.id}`).replaceWith(`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
    `)
    // console.log(post)

}

// Get Comments
function showComments(id){
    api.get(`comments/post/${id}`)
    .then( res => {

        res.data.comments.forEach( cmts => {
            $(`#comments${id}`).append(`
                <div class="card card-body border-bottom mb-2" id='comments${id}'>
                    <h6 class="card-title">@${cmts.user.username}</h6>
                    <p class="m-0">${cmts.body}</p>
                </div>
            `)
            console.log(cmts)
        });
        
    })
    .catch(err => err);
}

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
        console.log(res)
    })
    .catch(err => err);
        
});

// Put Method

function dataEdit(post){
    $('#tags').attr('value', `${post.tags}`)
    $('#title').attr('value', `${post.title}`)
    $('#body').text(`${post.body}`)
    // console.log(tags)
};

function updateData(id){
    const form = document.querySelector('#update-form')
    let formData = new FormData(form)
    formData.append('userId', 9)

    api.put(`posts/${id}`, formData)
    .then(res => {
        if(res.status == 200){
            document.querySelector('#success-update').style = "block";
        }else{
            document.querySelector('#failed-update').style = "block";
        }
        console.log(res)
    })
    .catch(err => err);
    
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
    .catch(err => err)
}



