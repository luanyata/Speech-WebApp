import React, {Component} from 'react'
import {connect} from 'react-redux'
import Post from "../post/post";
import CommentArea from "../commentArea/comment-area";


class PostDetail extends Component {

    render() {
        return (
            <div>
                <Post id={this.props.id}/>
                <CommentArea id={this.props.id}/>

            </div>
        )
    }

}


function mapToStateProps({authedUser}, props) {

    const {id} = props.match.params;

    return {
        id,
    }

}

export default connect(mapToStateProps)(PostDetail)