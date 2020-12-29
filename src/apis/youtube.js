import axios from "axios";

const KEY = 'AIzaSyAtIdcfT6ipYPtqYsdtaO6lJCGMlJeCerw';
 export default axios.create({
     baseURL:'https://youtube.googleapis.com/youtube/v3',
     params:{
         part:'snippet',
         maxResults:5,
         key:KEY
     }
 });