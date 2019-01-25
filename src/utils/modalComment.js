import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import {connect} from 'react-redux'
import {FaEdit} from "react-icons/fa";
import {handleEditComment} from "../actions/comments";

class CommentModal extends Component {
    state = {
        open: false,
        textComment: ''
    };


    handleChange = (e) => {
        const textComment = e.target.value;

        this.setState(() => ({
            textComment
        }))
    };

    handleSaveComment = () => {
        let commentEdit = {
            ...this.props.comment,
            body: this.state.textComment,
            timestamp: Date.now()
        };
        this.props.dispatch(handleEditComment(commentEdit))
            .then(this.onCloseModal())
    };

    onOpenModal = () => {
        this.setState({
            open: true,
            textComment: this.props.comment.body
        });
    };

    onCloseModal = () => {
        this.setState({
            open: false,
            textComment: ''
        });
    };

    render() {
        const {open, textComment} = this.state;
        const {disableAction} = this.props;

        return (
            <div hidden={disableAction}>
                <FaEdit onClick={this.onOpenModal}/>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2>Edit Comment</h2>
                    <div>
                        <textarea onChange={this.handleChange} cols={550} rows={10} value={textComment}>

                        </textarea>
                    </div>
                    <button onClick={this.handleSaveComment}>Save</button>
                </Modal>
            </div>
        );
    }
}


function mapToStateProps({comments, authedUser}, {id}) {
    let comment = comments.find(com => com.id === id);

    let disableAction = comment.author !== authedUser;

    return {
        comment,
        disableAction
    }
}

export default connect(mapToStateProps)(CommentModal);
