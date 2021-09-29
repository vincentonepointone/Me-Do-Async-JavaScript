const posts = [
    {title: "post one", body: "post one"},
    {title: "post two", body: "post two"},
];

const getPost = () => {
    
    setTimeout(() => {
        let output = "";
        posts.forEach((post) => {
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

const createPost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let newPost = "";
            let ENOENT = true;
            newPost = {title: "post three", body: "post three"};   
            posts.push(newPost);
            if(ENOENT === true) {
                reject("Internal Server Error")
            } else {
                resolve()
            }
        },200)
    })
}

createPost()
.then(getPost)
.catch(err => alert(err));
