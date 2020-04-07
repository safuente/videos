import axios from "axios";
const KEY = 'AIzaSyBgIBpuXUl8ING4Zv4mFdk5fpcv6XXIhf0';



 
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
      part:'snippet',
      type: 'video',
      maxResults: 5,
      key: `${KEY}`,
  }

});