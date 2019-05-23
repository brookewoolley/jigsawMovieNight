import React from "react";
import {IMG_PATH} from "../../config.js";

const localStyles = {  
    movie: {
      position: "absolute",
      zIndex: 1,
      height: "100%",
      width: "100%"
    },
  
    movieImageColumn: { height: "75%" },
  
    movieImage: {
      width: "100%"
    },
  
    movieDetails: {
      fontFamily: "Helvetica",
      bottom: 0,
  
      backgroundColor: "black",
      color: "white",
      padding: 10,
      paddingTop: 20,
      display: "flex",
      flexDirection: "column"
    },
    movieTitle: { 
        margin: 5,
        color: "#00fd97"
    },
    movieOverview: { fontSize: 12 }
};

const ModalMovie = ({
    modalMovie
  }) => {
    return (
      <div style={localStyles.movie}>
        <div style={localStyles.movieImageColumn}>
          <img style={localStyles.movieImage} src={`${IMG_PATH}${modalMovie.poster_path}`} alt={modalMovie.title} />
        </div>
        <div style={localStyles.movieDetails}>
          <h2 style={localStyles.movieTitle}>{modalMovie.title}</h2>
          <span style={localStyles.movieOverview}>{modalMovie.overview}</span>
        </div>
        <div style={localStyles.castSection}>
            <div style={localStyles.castDropdown}>
                <button>arrow-icon</button>
                We need another modal here for CastSection />
            </div>
        </div>
        <div style={localStyles.watchedSection}>
            <div style={localStyles.watchedButton}>
                <button>I've Watched This!</button>
            </div>
        </div>
      </div>
    );
  };
  
  export default ModalMovie;