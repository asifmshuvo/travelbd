import React from 'react';
import ReactQuill from 'react-quill';


const React_Quill = (props) => {
    return (
        <ReactQuill
            theme="snow"
            {...props}
            value={props.value || ''}
        />
    );
}

export default React_Quill;