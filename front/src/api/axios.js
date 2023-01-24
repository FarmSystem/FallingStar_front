
import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params:{
        api_key:"AIzaSyChMwJ6Z0m-6Jxg7wVDvqlKJYrZG6z9yOI",
        language:"ko-KR",
    },
});

export default instance; 