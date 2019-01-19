import React, {Component} from 'react'
import {connect} from 'react-redux'
import './categories.css'
import {NavLink} from "react-router-dom";

class Categories extends Component {

    render() {
        return (
            <div className='category'>
                <div>{this.props.name}</div>
            </div>
        )
    }
}

function matStateToProps({categories}, {id}) {
    return categories[id]

}


export default connect(matStateToProps)(Categories)