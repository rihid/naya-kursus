const api = axios.create({
    baseURL: "https://dummyjson.com"
});

api.get("posts/9")
.then( res => {
    $(".content > h1").text(res.data.title);
    $(".content > p").text(res.data.body);
});

api.get("comments/post/9")
.then( res => {
    res.data.comments.forEach( cmts => {
        const div = $(".comment");
        div.append(`
        <p>@${cmts.user.username}</p>
        <p>${cmts.body.replace("good", "***")}</p>
        `);
    })
})