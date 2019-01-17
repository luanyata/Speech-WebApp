import React, {Component} from 'react'
import {connect} from 'react-redux'
import Comment from "../comment/comment";
import {handleGetComments} from "../../actions/comments";
import './comment-area.css'
import NewComment from "../newComment/newComment";

class CommentArea extends Component {

    componentDidMount() {
        this.props.dispatch(handleGetComments(this.props.id))
    }

    render() {
        return (
            <div id='comment-area'>
                <NewComment idPost={this.props.idPost}/>
                {this.props.commentIds.map(idComment => (
                    <Comment key={idComment} id={idComment} />))
                }
            </div>
        )
    }
}

function mapToStateProps({posts, comments}, {id}) {
    console.log(id,'idpost');
    return {
        idPost: id,
        commentIds: Object.keys(comments)
    }
}

export default connect(mapToStateProps)(CommentArea);