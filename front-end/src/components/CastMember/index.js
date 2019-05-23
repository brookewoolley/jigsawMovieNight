import React from "react";
import { IMG_PATH, DEFAULT_PROFILE } from "../../config";

const localStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },

  image: {
    height: 180,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  }
};

const CastMember = ({ characterName, actorName, image }) => {
  return (
    <div style={localStyles.container}>
      <img
        style={{
          ...localStyles.image,
          objectFit: !image ? "cover" : undefined,
          width: !image ? 130 : undefined
        }}
        src={!image ? DEFAULT_PROFILE : `${IMG_PATH}${image}`}
        alt={""}
      />
      <div style={localStyles.charName}>{characterName}</div>
      <div style={localStyles.actorName}>{actorName}</div>
    </div>
  );
};

export default CastMember;
