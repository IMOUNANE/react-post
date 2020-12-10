import {useState, useEffect} from 'react';
import axios from 'axios';


export default function usePosts(){
    const [posts,setPosts]= useState([]);
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>setPosts(response.data))
        .catch(function (error) {
            console.log(error);
        })
    },[setPosts]);
    //console.log(posts)
return [posts,setPosts];
}
