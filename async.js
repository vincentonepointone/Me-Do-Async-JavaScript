async function usersGetty() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const formatedResponse = await (response).json();
    console.log(formatedResponse)
}


usersGetty()