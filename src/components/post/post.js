import React, {Component} from 'react'
import {connect} from 'react-redux'
import './post.css'
import {FaAngleDown, FaAngleUp, FaCommentDots} from "react-icons/fa";
import {handleDecreaseVote, handleIncreaseVote} from "../../actions/post";
import {Link} from "react-router-dom";


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

        const {id, title, body, voteScore, commentCount, timestamp, category} = this.props.post;

        return (
            <Link to={`${category}/${id}`}>
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
                        <small>{new Intl.DateTimeFormat('en-GB', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(timestamp)}</small>
                    </div>
                </div>

            </Link>
        );
    }
}

function mapStateToProps({authedUser, posts}, {id}) {

    const post = posts.find(post => post.id === id);

    return {
        authedUser,
        post
    };
}

export default connect(mapStateToProps)(Post)