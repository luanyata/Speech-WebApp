import React, {Component} from 'react'
import {connect} from 'react-redux'
import './post.css'
import {FaAngleDown, FaAngleUp, FaCommentDots} from "react-icons/fa";
import {handleDecreaseVote, handleIncreaseVote} from "../../actions/post";


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

    render() {

        const {title, body, voteScore, commentCount, timestamp, category} = this.props.post;

        return (
            <div className='post'>
                <h3>{title}</h3>
                <div>{body}</div>
                <div className='footer-post'>
                    <FaAngleUp data-like='like' onClick={this.handleLike} className='like'/>
                    <small className='vote-score'>{voteScore}</small>
                    <FaAngleDown onClick={this.handleDislike} className='dislike'/>
                    <FaCommentDots className='comments'/>
                    <small>{commentCount}</small>
                    <small>category: <span className='tag-category'>{category}</span></small>
                    <small>{timestamp}</small>
                </div>
            </div>
        );
    }
}

function mapStateToProps({authedUser, posts}, {id}) {

    let post = posts.find(post => post.id === id);

    post.timestamp = new Date(post.timestamp).toLocaleDateString();

    return {
        authedUser,
        post
    };
}

export default connect(mapStateToProps)(Post)