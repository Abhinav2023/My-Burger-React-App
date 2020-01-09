import axios from 'axios';

const instance=axios.create({
    baseURL: 'https://my-burger-57d20.firebaseio.com/'
});

export default instance;