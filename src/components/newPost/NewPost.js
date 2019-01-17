import React, {Component} from 'react'
import {connect} from 'react-redux'
import './NewPost.css'
import {handleAddPost} from "../../actions/post";

class NewPost extends Component {
    handleInputChange = (field, value) => {
        this.setState({
            [field]: value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {title, category, body} = this.state;
        const newPost = {
            id: Math.random().toString(36).substr(-8),
            timestamp: Date.now(),
            title,
            body,
            author: this.props.authedUser,
            category
        };
        this.props.dispatch(handleAddPost(newPost));
    };

    render() {
        return (
            <div id='new-post'>
                <h3>New Post</h3>
                <form onSubmit={this.onSubmit}>
                    <input
                        placeholder='Title' required onChange={e => this.handleInputChange('title', e.target.value)}/>
                    <select onChange={e => this.handleInputChange('category', e.target.value)}>
                        <option value=''>Selecione</option>
                        <option value='react'>React</option>
                        <option value='redux'>Redux</option>
                    </select>
                    <textarea
                        onChange={e => this.handleInputChange('body', e.target.value)}
                        placeholder='Digite o conteudo'
                        rows='20'>
                    </textarea>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({categories, authedUser}) {
    return {
        categories,
        authedUser
    }
}

export default connect(mapStateToProps)(NewPost)