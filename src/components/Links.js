import React from "react";

function Links(props) {
    // console.log(props)
    return (
        <div>
            <h3>Links</h3>
            <a href={props.github} >{props.github}</a>
            <br/>
            <a href={props.linkedin}>{props.linkedin}</a>
        </div>
    )
}

export default Links

