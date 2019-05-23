import React from "react";
import {IMG_PATH} from "../../config.js";
import closeButton from "../../images/closeButton.png"

const localStyles = {  

    daddyDiv: {
      position: "absolute",
      zIndex: 3,
      display: "flex",
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgb(0, 0, 0, 0.6)"
    },
  
    movie: {
      width: "100%",
      height: "100%",
      maxWidth: 500,
      marginTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      marginLeft: "auto",
      marginRight: "auto",
      overflow: "hidden"
    },
  
    movieImageColumn: { 
      position: "relative"
    },
  
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
    movieOverview: { fontSize: 12 },

    closeButton: {
      height: 20,
      position: "absolute", 
      right: 15, 
      top: 15
    }
};

const ModalMovie = ({
    modalMovie,
    setModalMovie
  }) => {
    return (
      <div style={localStyles.daddyDiv}>
        <div style={localStyles.movie}>
          <div style={localStyles.movieImageColumn}>
            <img style={localStyles.closeButton} src={closeButton} onClick={() => setModalMovie(null)} alt={""}/>
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
      </div>
    );
  };
  
  export default ModalMovie;