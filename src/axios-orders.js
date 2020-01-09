import axios from 'axios';

const instance=axios.create({
    baseURL: "https://my-burger-90446.firebaseio.com/"
});

export default instance;