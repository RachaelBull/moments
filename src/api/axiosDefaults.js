import axios from "axios";

axios.defaults.baseURL = 'https://moment-f98bfaa6bcb4.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;