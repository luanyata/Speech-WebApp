import React, {Component} from 'react'
import {connect} from 'react-redux'
import Categories from '../categories/categories'
import Post from "../post/post"
import './dashboard.css'
import {handleGetPosts, handleGetPostsByCategory} from "../../actions/posts";
import {bindActionCreators} from "redux";

class Dashboard extends Component {


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps, prevState, snapshot);
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.dispatch(handleGetPostsByCategory(this.props.path));
        }
    }

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
                    <Categories/>
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
        postIds: Object.keys(posts).map(key => posts[key].id)
            .sort((a, b) => (b.timestamp - a.timestamp)),
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({handleGetPosts}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
