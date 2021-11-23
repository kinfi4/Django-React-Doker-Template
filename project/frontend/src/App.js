import './components/Article.css'
import {connect} from "react-redux";
import {fetchArticles} from "./redux/reducers/articles";
import {useState} from "react";
import Article from "./components/Article";


function App(props) {
    useState(() => {
        props.fetchArticles()
    }, [])

    return (
        <>
            <h1>Welcome</h1> <br/>
            <div className={'articles-container'}>
                {
                    props.articles.map((el, index) => <Article title={el.title}
                                                               preview_image={el.preview_image}
                                                               body={el.body}
                                                               key={index}
                    />)
                }
            </div>
        </>
    );
}


const mapStateToProps = (state) => {
    return {
        articles: state.articles.articles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchArticles: () => dispatch(fetchArticles)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
