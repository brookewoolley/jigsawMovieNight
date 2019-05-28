import { useState } from "react";

const useModal = () => {
  const [modalMovie, setModalMovie] = useState(null);

  return {
    setModalMovie,
    modalMovie
  };
};

export default useModal;
