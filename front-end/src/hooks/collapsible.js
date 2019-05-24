import {useState} from "react";

const useCollapsible = () => {
  var [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    setIsOpen
  };
};

export default useCollapsible;