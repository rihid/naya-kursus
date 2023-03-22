const api = axios.create({
    baseURL: "https://dummyjson.com"
});

var x = {
    posts : [],
    init(){
        api.get("posts/")
        .then(res => x.posts = res.data);
    }
    
}
