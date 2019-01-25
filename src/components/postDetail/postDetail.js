import React, {Component} from 'react'
import {connect} from 'react-redux'
import Post from "../post/post";
import CommentArea from "../commentArea/comment-area";


class PostDetail extends Component {

    render() {
        return (
            <div>
                <Post id={this.props.postId}/>
                <CommentArea id={this.props.postId}/>

            </div>
        )
    }
}

function mapToStateProps({authedUser, posts}, props) {
    const postId = props.match.params.id;

    return {
        postId,
    }
}

export default connect(mapToStateProps)(PostDetail)
