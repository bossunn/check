import React from 'react'
import PropTypes from 'prop-types'
import Album from '../Album'
import './style.scss'

function AlbumList(props) {
    const { albumList } = props;
    return (
        <ul className='album_list'>
            {albumList.map((album, id) => (
                <li key={id}>
                    <Album album={album}></Album>
                </li>
            ))}
        </ul>
    )
}

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired
}

export default AlbumList

