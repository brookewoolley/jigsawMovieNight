import React from "react";
import { IMG_PATH, COLLAPSIBLE_HEADER } from "../../config.js";
import closeButton from "../../images/closeButton.png";
import useCast from "../../hooks/cast";
import CastSection from "../CastSection";
import useCollapsible from "../../hooks/collapsible";
import Collapsible from "../Collapsible";

const localStyles = {
  daddyDiv: {
    position: "absolute",
    zIndex: 3,
    display: "flex",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgb(0, 0, 0, 0.6)",
    overflowY: "scroll"
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
    overflowY: "scroll",
    backgroundColor: "white",
    paddingBottom: 40
  },

  movieImageColumn: {
    position: "relative"
  },

  movieImage: {
    width: "100%",
    height: 400,
    objectFit: "cover"
  },

  movieDetails: {
    fontFamily: "Helvetica",

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

const ModalMovie = ({ modalMovie, setModalMovie }) => {
  const { castList, loading } = useCast(modalMovie);
  const { isOpen, setIsOpen } = useCollapsible();

  return (
    <div style={localStyles.daddyDiv}>
      <div style={localStyles.movie}>
        <div style={localStyles.movieImageColumn}>
          <img
            style={localStyles.closeButton}
            src={closeButton}
            onClick={() => setModalMovie(null)}
            alt={""}
          />
          <img
            style={localStyles.movieImage}
            src={`${IMG_PATH}${modalMovie.poster_path}`}
            alt={modalMovie.title}
          />
        </div>
        <div style={localStyles.movieDetails}>
          <h2 style={localStyles.movieTitle}>{modalMovie.title}</h2>
          <span style={localStyles.movieOverview}>{modalMovie.overview}</span>
        </div>
        <div style={localStyles.castSection}>
          <Collapsible
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            text={COLLAPSIBLE_HEADER}
          >
            <CastSection castList={castList} loading={loading} />
          </Collapsible>
        </div>
      </div>
    </div>
  );
};

export default ModalMovie;
