import {useState, useEffect} from 'react';
import axios from 'axios';


export default function useComments(id){
    const [comments,setComments]= useState([]);
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response=>setComments(response.data))
        .catch(function (error) {
            console.log(error);
        })
    },[setComments]);
    //console.log(comments)
return [comments,setComments];
}
