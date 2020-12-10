import {Link} from 'react-router-dom';

export default function Post(props){
    const {title, description,id}= props 
    return(
        <div id={id} className="container">
            <div className="col-md-8 offset-md-2">
                <div className="d-inline-flex p-5">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p className="card-text">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    );
}