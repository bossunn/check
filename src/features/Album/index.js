import React from 'react'
// import PropTypes from 'prop-types'
import AlbumList from './components/AlbumList'


function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhac Hoa thinh hanh',
            src: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/0/1/9/6019ee20f313ae3e11fe7c78a47b4551.jpg'
        },
        {
            id: 2,
            name: 'Rap Viet',
            src: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/c/3/9/4c3928270f73b06fc682c0c6d2e58a53.jpg'
        }
    ]

    return (
        <div>
            <h2>Nhạc rap</h2>
            <AlbumList albumList={albumList}></AlbumList>
        </div>
    )
}

// AlbumFeature.propTypes = {

// }

export default AlbumFeature

