import React, {Component} from 'react'
import Modal from 'react-responsive-modal'
import {FaEdit} from "react-icons/fa"
import {handleEditPost} from "../actions/post"
import {connect} from 'react-redux'
import './modal.css'

class PostModal extends Component {


    state = {
        open: false,
        title: '',
        body: ''
    };


    handleInputChange = (e) => {
        let field = e.target.name;
        let value = e.target.value;

        this.setState({
            [field]: value,
        })
    };

    handleSavePost = () => {
        let postEdit = {
            ...this.props.post,
            title: this.state.title,
            body: this.state.body,
            timestamp: Date.now()
        };
        this.props.dispatch(handleEditPost(postEdit))
            .then(this.onCloseModal())
    };

    onOpenModal = () => {
        this.setState({
            open: true,
            title: this.props.post.title,
            body: this.props.post.body
        });
    };

    onCloseModal = () => {
        this.setState({
            open: false,
            title: '',
            body: ''
        });
    };


    render() {
        const {open, title, body} = this.state;
        const {disableAction} = this.props;

        return (
            <div hidden={disableAction}>
                <FaEdit onClick={this.onOpenModal}/>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2>Edit Comment</h2>
                    <div className='modal-post'>
                        <input onChange={this.handleInputChange} name='title' value={title}/>
                        <textarea onChange={this.handleInputChange} name='body' cols={550} rows={10} value={body}>

                        </textarea>
                    </div>
                    <button onClick={this.handleSavePost}>Save</button>
                </Modal>
            </div>
        );
    }
}

function mapToStateProps({posts, authedUser}, {id}) {
    console.log(id);

    let post = posts.find(pos => pos.id === id);

    let disableAction = post.author !== authedUser;

    return {
        post,
        disableAction
    }

}

export default connect(mapToStateProps)(PostModal)
