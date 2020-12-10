import useComments from '../../hooks/useComments/useComments';
import Comment from '../Comment/Comments';

export default function Comments(props){
    const id = props.match.params.id;
    const [comments]=useComments(id);
    console.log(comments)

    return(
        <div className="container">
            <h1 className="text-center" Style="font-size: 72px;color:white">Comments</h1> 
            <div className="row">
                {comments.map((comment)=><Comment
                    key={comment.id}
                    id={comment.id}
                    title={comment.name}
                    description={comment.body}
                ></Comment>)}
            </div>
        </div>
    )
}