import axios from "axios";
const KEY= "AIzaSyCau93Pv-HjNCLLQO4WYQsxIbxJFf4GyVA";
export const apiEnvironment = {
    // export const apiEnvironment = axios.create({

        baseURL: "https://www.googleapis.com/youtube/v3",
        params: {
        part: "snippet",
        type:"video",
        maxResults: 5,
           key: KEY
       }
    // })
    
}