import React from "react";
import CastMember from "../CastMember";
import { DEFAULT_PROFILE } from "../../config";

const CastSection = ({ castList, loading }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      width: 500,
      overflowX: "scroll"
    }}
  >
    {castList.map(castMember => {
      return (
        <CastMember
          characterName={castMember.character}
          actorName={castMember.name}
          image={castMember.profile_path}
        />
      );
    })}
  </div>
);

export default CastSection;
