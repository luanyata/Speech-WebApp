import React, {Component} from 'react'
import {connect} from 'react-redux'
import Categories from "../categories/categories";
import './postCategory.css'
import '../categories/categories.css'
import Post from "../post/post";
import {handleGetPostsByCategory} from "../../actions/posts";


class PostCategory extends Component {

    state = {
        category: ''
    };


    handleOrderBy = (e) => {
        e.preventDefault();
        console.log(e.target.value);

        this.props.dispatch(handleGetPostsByCategory(this.state.category, e.target.value))
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            const category = this.props.match.params.category;
            this.setState({category});
            this.props.dispatch(handleGetPostsByCategory(category))
        }
    }

    componentDidMount() {
        const category = this.props.match.params.category;
        this.setState({category});
        this.props.dispatch(handleGetPostsByCategory(category))
    }


    render() {
        return (
            <div>
                <div className='categories'>
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
                    {this.props.postIds.length > 0 ? this.props.postIds.map((id) => (
                        <li key={id}>
                            <Post id={id}/>
                        </li>
                    )) : <div>:'(  Não há post nessa Categoria</div>}

                </ul>
            </div>
        );
    }
}


function mapToStateProps({posts}) {
    return {
        postIds: Object.keys(posts).map(key => posts[key].id)
            .sort((a, b) => (b.timestamp - a.timestamp)),
    }
}

export default connect(mapToStateProps)(PostCategory)
