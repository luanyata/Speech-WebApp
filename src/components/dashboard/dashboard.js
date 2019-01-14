import React, {Component} from 'react'
import {connect} from 'react-redux'
import Categories from '../categories/categories'
import Post from "../post/post"
import './dashboard.css'
import {handleGetPosts} from "../../actions/posts";
import {bindActionCreators} from "redux";

class Dashboard extends Component {

    handleOrderBy = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        const {handleGetPosts, category} = this.props;

        handleGetPosts(e.target.value)
    };

    render() {
        return (
            <div>
                <div id='categories'>
                    {this.props.categoryIds.map((id) => (
                        <Categories key={id} id={id}/>
                    ))}
                </div>

                <div id='select-orderby-posts'>
                    <select onChange={this.handleOrderBy}>
                        <option value=''>Filtro</option>
                        <option value='DATE'>Filtrar por Data</option>
                        <option value='VOTES'>Filtrar por Votos</option>
                    </select>
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

const mapDispatchToProps = dispatch => bindActionCreators({handleGetPosts}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)