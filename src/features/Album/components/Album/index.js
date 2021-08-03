import React from 'react'
// import PropTypes from 'prop-types'
import './styles.scss';

function Album(props) {
    const { album } = props;
    return (
        <div className='album_card'>
            <img src={album.src} alt={album.name}></img>
            <h3>{album.name}</h3>
        </div>
    )
}

// Album.propTypes = {

// }

export default Album

