import React, {Component} from 'react'
import {connect} from 'react-redux'
import Comment from "../comment/comment";
import {handleGetComments} from "../../actions/comments";
import './comment-area.css'
import NewComment from "../newComment/newComment";

class CommentArea extends Component {

    state = {
        comment: {}
    };

    componentDidMount() {
        this.props.dispatch(handleGetComments(this.props.id))
    }


    handleEditComment = (comment) => {
        this.setState({
            comment
        });

        console.log('comment', comment)
    };

    render() {
        return (
            <div id='comment-area'>
                <NewComment comment={this.state.comment} idPost={this.props.idPost}/>
                {this.props.commentIds.map(idComment => (
                    <Comment key={idComment} id={idComment}
                             handleEditComment={this.handleEditComment}/>))
                }
            </div>
        )
    }
}

function mapToStateProps({posts, comments}, {id}) {
    return {
        idPost: id,
        commentIds: Object.keys(comments)
    }
}

export default connect(mapToStateProps)(CommentArea);