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

// createPost()
// .then(getPost)
// .catch(err => alert(err));

const promise1 = Promise.resolve('Hello');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "goodbye"))

const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

Promise.all([promise1, promise2, promise3, promise4])
.then(values => console.log(values))
