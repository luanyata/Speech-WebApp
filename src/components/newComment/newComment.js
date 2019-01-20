import React, {Component} from 'react'
import {connect} from 'react-redux'
import './newComment.css'
import {handleAddComment, handleEditComment} from "../../actions/comments";

class NewComment extends Component {

    state = {
        id: '',
        body: '',
        author: '',
        timestamp: '',
        parentId: '',
    };


    componentDidMount() {
        console.log(this.props.comment, ' comment props');

        if (this.props.comment) {
            const {id, body, author, timestamp, parentId} = this.props.comment;

            this.setState({
                id,
                body,
                author,
                timestamp,
                parentId
            })
        }
    }

    handleChange = (e) => {
        this.setState({
                body: e.target.value
            }
        )
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {id, body} = this.state;

        if (id) {
            const editComment = {
                ...this.state,
                timestamp: Date.now()
            };

            this.props.dispatch(handleEditComment(editComment))
        } else {
            let comment = {
                id: Math.random().toString(36).substr(-8),
                timestamp: Date.now(),
                body,
                author: this.props.authedUser,
                parentId: this.props.idPost
            };

            this.props.dispatch(handleAddComment(comment))
                .then(() => {
                    comment = {};
                    this.setState(() => ({
                        text: ''
                    }))
                });
        }

        this.setState({
            id: '',
            body: '',
            author: '',
            timestamp: '',
            parentId: '',
        })
    };

    render() {
        return (
            <div id='new-comment'>
                <form onSubmit={this.handleSubmit}>
                    <textarea rows='20'
                              placeholder='Add Comment'
                              value={this.state.body}
                              onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

function mapToStateProps({authedUser, comment}, {idPost}) {
    return {
        idPost,
        authedUser,
    }
}

export default connect(mapToStateProps)(NewComment)