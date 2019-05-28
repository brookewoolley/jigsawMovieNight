import React from "react";
import { IMG_PATH, COLLAPSIBLE_HEADER } from "../../config.js";
import closeButton from "../../images/closeButton.png";
import useCast from "../../hooks/cast";
import CastSection from "../CastSection";
import useCollapsible from "../../hooks/collapsible";
import Collapsible from "../Collapsible";
import WatchedSection from "../WatchedSection";

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
    height: 200,
    objectFit: "cover"
  },

  closeButton: {
    height: 20,
    position: "absolute",
    right: 15,
    top: 15
  },

  fade: {
    backgroundImage:
      "linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0)",
    position: "absolute",
    bottom: 3.5,
    left: 0,
    right: 0,
    height: 150
  },

  movieDetails: {
    fontFamily: "Helvetica",
    backgroundColor: "white",
    color: "black",
    padding: 20,
    paddingTop: 0,
    paddingBottom: 15,
    display: "flex",
    flexDirection: "column"
  },
  movieTitle: {
    color: "black",
    fontSize: 18,
    marginTop: 0
  },

  movieOverview: { fontSize: 14 }
};

const ModalMovie = ({ modalMovie, setModalMovie, setWatched, setReview }) => {
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
          <div style={localStyles.fade} />
        </div>
        <div style={localStyles.movieDetails}>
          <h2 style={localStyles.movieTitle}>{modalMovie.title}</h2>
          <span style={localStyles.movieOverview}>{modalMovie.overview}</span>
        </div>
        <Collapsible
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          text={COLLAPSIBLE_HEADER}
        >
          <CastSection castList={castList} loading={loading} />
        </Collapsible>
        <WatchedSection
          movie={modalMovie}
          setWatched={setWatched}
          setReview={setReview}
        />
      </div>
    </div>
  );
};

export default ModalMovie;
