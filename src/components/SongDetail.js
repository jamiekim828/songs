import React from 'react';
import { connect } from 'react-redux';

/*no need to create a class based component in order to 
work with connect function - gonna create functional component */

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Select a song</div>
    }

    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title}
                <br />
                Duration: {song.duration}
               
            </p>
        </div>
    );
};


//wrapping in connect below:
const mapStateToProps = (state) => {
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);
