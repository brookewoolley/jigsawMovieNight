import { useState } from "react";

const useNavigation = (initialVariant = "popular") => {
  const [variant, setVariant] = useState(initialVariant);

  return {
    variant,
    setVariant
  };
};

export default useNavigation;
