import React, {Component} from 'react'
import {connect} from 'react-redux'
import './NewPost.css'
import {handleAddPost, handleEditPost} from "../../actions/post"
import {Redirect} from 'react-router-dom'

class NewPost extends Component {

    state = {
        toHome: false,
        title: '',
        body: '',
        category: ''
    };

    componentDidMount() {
        if (this.props.post) {
            const {id, title, body, category} = this.props.post;

            this.setState({
                id,
                title,
                body,
                category
            })
        }
    }

    handleInputChange = (e) => {
        let field = e.target.name;
        let value = e.target.value;

        this.setState({
            [field]: value,
        })
    };

    onSubmit = (e) => {
        e.preventDefault();

        const {id, title, timestamp, category, body} = this.state;

        if (id) {

            const editPost = {
                id,
                timestamp,
                title,
                category,
                body,
                author: this.props.authedUser
            };
            this.props.dispatch(handleEditPost(editPost))

        } else {
            const newPost = {
                id: Math.random().toString(36).substr(-8),
                timestamp: Date.now(),
                title,
                body,
                author: this.props.authedUser,
                category
            };
            this.props.dispatch(handleAddPost(newPost));
        }

        this.setState(() => ({
            toHome: !id
        }))
    };

    render() {
        const {toHome, title, body, category} = this.state;

        if (toHome) {
            return <Redirect to='/'/>
        }

        return (
            <div id='new-post'>
                <h3>New Post</h3>
                <form onSubmit={this.onSubmit}>
                    <input
                        placeholder='Title' required value={title} name='title'
                        onChange={this.handleInputChange}/>

                    <select value={category} name='category' onChange={this.handleInputChange}>
                        <option value=''>Selecione</option>
                        <option value='react'>React</option>
                        <option value='redux'>Redux</option>
                        <option value='udacity'>Udacity</option>
                    </select>

                    <textarea value={body} name='body'
                              onChange={this.handleInputChange}
                              placeholder='Digite o conteudo'
                              rows='20'>
                    </textarea>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({categories, posts, authedUser}, props) {

    let post = posts.find(post => post.id === props.match.params.id);

    return {
        categories,
        authedUser,
        post
    }
}

export default connect(mapStateToProps)(NewPost)