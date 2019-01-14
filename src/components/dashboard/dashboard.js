import React, {Component} from 'react'
import {connect} from 'react-redux'
import Categories from '../categories/categories'
import Post from "../post/post"
import './dashboard.css'

class Dashboard extends Component {
    render() {
        return (
            <div>

                <div id='categories'>
                    {this.props.categoryIds.map((id) => (
                        <Categories key={id} id={id}/>
                    ))}
                </div>

                <ul>
                    {this.props.postIds.map((id) => (
                        <li key={id}>
                            <Post id={id}/>
                        </li>
                    ))}

                </ul>
            </div>
        )
    }
}

function mapStateToProps({posts, categories}) {
    return {
        postIds: Object.keys(posts)
            .sort((a, b) => posts[b].timestamp - posts[a].timestamp),
        categoryIds: Object.keys(categories)
    }
}

export default connect(mapStateToProps)(Dashboard)