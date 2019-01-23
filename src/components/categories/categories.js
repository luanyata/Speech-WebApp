import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import './categories.css'
import {Link} from "react-router-dom";
import {handleGetCategories} from "../../actions/categories";


class Categories extends Component {

    componentDidMount() {
        this.props.dispatch(handleGetCategories());
    }

    render() {
        return (
            <Fragment>
                {this.props.categories.map(category =>
                    <Link to={category.path} key={category.name} className='category'>
                        <div>{category.name}</div>
                    </Link>
                )}
            </Fragment>
        )
    }
}

function matStateToProps({categories}) {
    return {
        categories
    }

}


export default connect(matStateToProps)(Categories)
