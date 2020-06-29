import React from 'react';

const styles = {

    body : {
        backgroundImage : `url(https://www.itl.cat/pngfile/big/73-736984_simple-dark-blue-wallpapers-hd-1080p-11-hd.jpg)`,
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding : "50px"
    }

}

export default function Wrapper(props) {

    return (
        <div style = {styles.body}>
            {props.children}
        </div>
    )
}