import React, {Component} from 'react'
import {connect} from 'react-redux'
import './categories.css'
import {Link} from "react-router-dom";
import {handleGetPosts} from "../../actions/posts";


class Categories extends Component {


    componentDidUpdate(prevProps, prevState, snapshot) {
       this.props.dispatch(handleGetPosts(null, this.props.path));

    }

    render() {
        const {name, path} = this.props;

        return (
            <Link to={`${path}`} className='category'>
                <div>{name}</div>
            </Link>
        )
    }
}

function matStateToProps({categories}, {id}) {
    return categories[id]

}


export default connect(matStateToProps)(Categories)