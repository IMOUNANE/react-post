import usePosts from '../../hooks/usePosts/usePosts';
import Post from '../Post/Post'; 

export default function Posts(){
    const [posts] = usePosts();
    
    return(
        <div className="container">
            <h1 className="text-center" Style="font-size: 72px;color:white">Posts</h1>
            <div className="row">
                {posts.map((post)=><Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    description={post.body}
                ></Post>
                )}
            </div>
        </div>
    )
}