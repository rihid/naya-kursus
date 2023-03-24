const api = axios.create({
    baseURL: "https://dummyjson.com"
});

// Single Post
api.get("posts/9")
.then( res => {
    $(".content > h1").text(res.data.title);
    $(".content > p").text(res.data.body);
});

api.get("comments/post/9")
.then( res => {
    res.data.comments.forEach( cmts => {
        let div = $(".comment");
        div.append(`
        <p>@${cmts.user.username}</p>
        <p>${cmts.body.replace("good", "***")}</p>
        `);
    })
})

// All Posts

api.get("posts/")
.then( res => {
    res.data.posts.forEach( post => {
        let container = $('.content-all');
        container.append(`
            <h1><a href="#" style="color:black;">${post.title}</a></h1>
            <p>${post.body}</p>
        `)
        // console.log(post.title);
    })
});

// Post Method

const form = document.querySelector('#post-form')
form.addEventListener('submit', function(e){
    e.preventDefault();
    let formData = new FormData(form)
    formData.append('userId', 9)

    api.post('posts/add', formData)
    .then(res => {console.log(res)})
    .catch(err => err)
        
})





