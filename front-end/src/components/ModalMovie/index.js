import React from "react";
import { IMG_PATH, COLLAPSIBLE_HEADER } from "../../config.js";
import closeButton from "../../images/closeButton.png";
import useMovie from "../../hooks/movie";
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
    objectPosition: "100% 20%",
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

const ModalMovie = props => {
  const { movie, loading, onUpdate } = useMovie(
    props.match.params.id,
    props.getFavourite
  );

  const { isOpen, setIsOpen } = useCollapsible();

  return movie ? (
    <div style={localStyles.daddyDiv}>
      <div style={localStyles.movie}>
        <div style={localStyles.movieImageColumn}>
          <img
            style={localStyles.closeButton}
            src={closeButton}
            onClick={props.history.goBack}
            alt={""}
          />
          <img
            style={localStyles.movieImage}
            src={`${IMG_PATH}${movie.poster_path}`}
            alt={movie.title}
          />
          <div style={localStyles.fade} />
        </div>
        <div style={localStyles.movieDetails}>
          <h2 style={localStyles.movieTitle}>{movie.title}</h2>
          <span style={localStyles.movieOverview}>{movie.overview}</span>
        </div>
        <Collapsible
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          text={COLLAPSIBLE_HEADER}
        >
          <CastSection castList={movie.cast} loading={loading} />
        </Collapsible>
        {!!props.getFavourite(props.match.params.id) && (
          <WatchedSection
            movie={movie}
            setWatched={() => {
              onUpdate();
              props.setWatched(movie);
            }}
            createReview={props.createReview}
            review={props.review}
            deleteReview={props.deleteReview}
          />
        )}
      </div>
    </div>
  ) : null;
};

export default ModalMovie;
