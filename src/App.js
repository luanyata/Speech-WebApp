import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import {connect} from 'react-redux'
import {handleInitialData} from "./actions/shared";
import Dashboard from "./components/dashboard/dashboard";
import LoadingBar from 'react-redux-loading'
import NewPost from "./components/newPost/NewPost";
import PostDetail from "./components/postDetail/postDetail";
import PostCategory from './components/postCategory/postCategory'
import Nav from "./components/nav/Nav";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <div className="App">
                        <LoadingBar/>
                        <Nav/>
                        {this.props.loading === true
                            ? null
                            : <div>
                                <Route path='/' exact component={Dashboard}/>
                                <Route path='/new-post/' exact component={NewPost}/>
                                <Route path='/edit/:category/:id/' exact component={NewPost}/>
                                <Route path='/:category/:id' exact component={PostDetail}/>
                                <Route path='/:category/' exact component={PostCategory}/>
                            </div>
                        }
                    </div>
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps({authedUser}) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App);
