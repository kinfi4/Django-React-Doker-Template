import React from 'react';


function Article(props) {
    return (
        <div className={'article'}>
            <h2>{props.title}</h2>
            <img src={props.preview_image} alt=""/>
            <p>
                {props.body}
            </p>
        </div>
    );
}

export default Article;