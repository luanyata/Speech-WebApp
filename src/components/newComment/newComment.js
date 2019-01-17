import React, {Component} from 'react'
import {connect} from 'react-redux'
import './newComment.css'
import {handleAddComment} from "../../actions/comments";

class NewComment extends Component {

    state = {
        text: ''
    };

    handleChange = (e) => {
        let text = e.target.value;

        this.setState(() => ({
                text
            }
        ))
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {text} = this.state;

        console.log(this.props, 'new Comment');

        const {dispatch, authedUser, idPost} = this.props;

        let comment = {
            id: Math.random().toString(36).substr(-8),
            timestamp: Date.now(),
            body: text,
            author: authedUser,
            parentId: idPost
        };

        dispatch(handleAddComment(comment))
            .then(() => {
                comment = {};
                this.setState(() => ({
                    text: ''
                }))
            });
    };

    render() {

        const {text} = this.state;

        return (
            <div id='new-comment'>
                <form onSubmit={this.handleSubmit}>
                    <textarea rows='20'
                              placeholder='Add Comment'
                              value={text}
                              onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

function mapToStateProps({comments, authedUser}, {idPost}) {
    return {
        idPost,
        comments,
        authedUser
    }
}

export default connect(mapToStateProps)(NewComment)