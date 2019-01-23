import React, {Component} from 'react'
import {connect} from 'react-redux'
import './post.css'
import {FaAngleDown, FaAngleUp, FaCommentDots, FaTrash} from "react-icons/fa";
import {handleDecreaseVote, handleDeletePost, handleIncreaseVote} from "../../actions/post";
import {Link} from "react-router-dom";
import PostModal from "../../utils/modalPost";


class Post extends Component {

    handleLike = (e) => {
        console.log(e);
        e.preventDefault();

        const {dispatch, post} = this.props;

        dispatch(handleIncreaseVote(post))
    };

    handleDislike = (e) => {
        e.preventDefault();
        const {dispatch, post} = this.props;
        dispatch(handleDecreaseVote(post))
    };

    handleDelete = () => {
        const {dispatch, post} = this.props;
        dispatch(handleDeletePost(post.id))
    };

    render() {

        const {post, disableAction} = this.props;

        const {id, title, body, voteScore, commentCount, timestamp, category} = post;

        return (
            <div className='post'>
                <Link to={`${category}/${id}`}>
                    <h3>{title}</h3>
                </Link>
                <div>{body}</div>
                <div className='footer-post'>
                    <FaAngleUp data-like='like' onClick={this.handleLike} className='like'/>
                    <small className='vote-score'>{voteScore}</small>
                    <FaAngleDown onClick={this.handleDislike} className='dislike'/>
                    <FaCommentDots className='comments'/>
                    <small>{commentCount}</small>
                    <small>category: <span className='tag-category'>{category}</span></small>
                    <small>{new Intl.DateTimeFormat('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(timestamp)}</small>
                </div>
                <div hidden={disableAction}>
                    <FaTrash className='delete-comment' onClick={this.handleDelete}/>
                </div>
                <PostModal id={id}/>
            </div>
        );
    }
}

function mapStateToProps({authedUser, posts}, {id}) {

    const post = posts.find(post => post.id === id);

    let disableAction = post.author !== authedUser;

    return {
        authedUser,
        post,
        disableAction
    };
}

export default connect(mapStateToProps)(Post)
