import React from 'react'

const Note = (props) => {
    
    const {content} = props;
    return (
        <div>
            <p>{content}</p>
        </div>
    )
}

export default Note
