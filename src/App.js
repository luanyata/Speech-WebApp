import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import {handleInitialData} from "./actions/shared";
import Dashboard from "./components/dashboard/dashboard";
import LoadingBar from 'react-redux-loading'
import NewPost from "./components/newPost/NewPost";
import PostDetail from "./components/postDetail/postDetail";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <div className="App">
                <LoadingBar/>
                {this.props.loading === true
                    ? null
                    : <PostDetail match={{params: {id: '8xf0y6ziyjabvozdd253nd'}}}/>}

            </div>
        );
    }
}

function mapStateToProps({authedUser}) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App);
