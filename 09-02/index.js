const api = axios.create({
    baseURL: "https://dummyjson.com"
});

api.get("posts/9")
// .then( res => res.json())
// .then( res => JSON.stringify(res))
.then( res => {
    $("h1").text(res.data.title);
    $("p").text(res.data.body);
})

api.get("comments/post/9")
.then( res => {
    res.data.comments.forEach( cmts => {
        const div = $(".comment");
        div.append(`
        <p>@${cmts.user.username}</p>
        <p>${cmts.body}</p>
        `);
    })
})