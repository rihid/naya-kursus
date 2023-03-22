const api = axios.create({
    baseURL: "https://dummyjson.com"
});

api.get("posts/")
.then( res => {
    // console.log(res.data.posts[1].tags);
    res.data.posts.forEach( posts => {
        $(".posts-card").append(`
        <div class="border-b border-grey-lighter pb-4 pt-4">
            <span
                class="mb-4 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green">July 19, 2022
            </span>
            <span class="mb-4 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green">
                ${posts.tags}
            </span>
            <h1>
                <a href="" class="block font-sans text-xl font-semibold text-primary transition-colors title">${posts.title}
                </a>
            </h1>
            
            <p class="py-6 text-lg font-sans">
                ${posts.body.slice(0, 100)}...
            </p>
            
            <div class="flex w-full items-center font-sans py-2">
                <img class="w-10 h-10 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author">
                <div class="flex-1 px-2">
                    <p class="text-base font-bold text-base md:text-xl leading-none mb-2">John Doe</p>
                    <p class="text-gray-600 text-xs md:text-base">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

        </div>
        `)
        // console.log(posts.title)

    })
});