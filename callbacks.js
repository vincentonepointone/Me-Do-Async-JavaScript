const postsc = [
    {title: "post one", body: "post one"},
    {title: "post two", body: "post two"},
];

const getPostc = () => {
    
    setTimeout(() => {
        let output = "";
        postsc.forEach((post) => {
            output += `
            <h4>${post.title}</h4>
            <ul>
                <li>    
                    ${post.body}
                </li>
            </ul>`
    });
    console.log(output)
    document.body.innerHTML = output;
    }, 1000)
}

const createPostc = (cb) => {
    setTimeout(() => {
        let newPost = {title: "post three", body: "post three"};
        postsc.push(newPost)
    },200)
    cb();
}

createPostc(getPostc);
