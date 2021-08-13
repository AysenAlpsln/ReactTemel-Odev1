import axios from 'axios';

async function getData(userId) {
    const {data} = await axios("https://jsonplaceholder.typicode.com/users/" + userId);
    console.log(data)    
}

export default getData;