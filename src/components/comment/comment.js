import React, {Component} from 'react'
import {connect} from 'react-redux'
import {FaAngleDown, FaAngleUp, FaTrash} from "react-icons/fa";
import {handleDecreaseCommentVote, handleDeleteComment, handleIncreaseCommentVote} from "../../actions/comments";
import './comment.css'


class Comment extends Component {

    handleLike = (e) => {
        e.preventDefault();
        const {dispatch, comment} = this.props;

        dispatch(handleIncreaseCommentVote(comment.id))
    };

    handleDislike = (e) => {
        e.preventDefault();
        const {dispatch, comment} = this.props;

        dispatch(handleDecreaseCommentVote(comment.id))
    };

    handleDelete = () => {
        const {dispatch, comment} = this.props;
        dispatch(handleDeleteComment(comment.id))
    };

    render() {

        console.log(this.props, 'Propsss');

        const {comment, disableDelete} = this.props;

        const {author, body, timestamp, voteScore} = comment;


        return (
            <div className='comment'>
                <h3>{author}</h3>
                <div>{body}</div>
                <div className='footer-post'>
                    <FaAngleUp data-like='like' onClick={this.handleLike} className='like'/>
                    <small className='vote-score'>{voteScore}</small>
                    <FaAngleDown onClick={this.handleDislike} className='dislike'/>
                    <small>{new Intl.DateTimeFormat('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(timestamp)}</small>
                </div>
                <div hidden={disableDelete}>
                    <FaTrash className='delete-comment' onClick={this.handleDelete}/>
                </div>

            </div>
        )
    }
}


function mapToStateProps({authedUser, posts, comments}, {id}) {
    let comment = comments[id];

    let disableDelete = comment.author !== authedUser;

    return {
        comment,
        disableDelete,
    }

}


export default connect(mapToStateProps)(Comment);