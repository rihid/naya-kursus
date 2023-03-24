// Fetch Api
const api = axios.create({
    baseURL: "https://dummyjson.com"
});

// Read Api
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




