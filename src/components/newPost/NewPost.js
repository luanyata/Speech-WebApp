import React, {Component} from 'react'
import {connect} from 'react-redux'
import './NewPost.css'
import {handleAddPost} from "../../actions/post"
import {Redirect} from 'react-router-dom'

class NewPost extends Component {

    state = {
        toHome: false
    };


    handleInputChange = (field, value) => {
        this.setState({
            [field]: value,
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {id, title, category, body} = this.state;
        const newPost = {
            id: Math.random().toString(36).substr(-8),
            timestamp: Date.now(),
            title,
            body,
            author: this.props.authedUser,
            category
        };
        this.props.dispatch(handleAddPost(newPost));

        this.setState(() => ({
            toHome: !id
        }))
    };

    render() {

        const {toHome} = this.state;

        if (toHome) {
            return <Redirect to='/'/>
        }

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
                        <option value='udacity'>Udacity</option>
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