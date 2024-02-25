import { useState } from "react";

const UpButton = () => {
  const [up, setUp] = useState(false);

  const changeup = () => {
    if (window.scrollY >= 300) {
      setUp(true);
    } else {
      setUp(false);
    }
  };

  window.addEventListener("scroll", changeup); 

  const top = () => {
    window.scrollTo(0, 0);
  };

  return (
    <a onClick={top} className={`up ${up ? "active" : ""}`}>
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-6 w-6" aria-hidden="true" color="white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm231-113.9L103.5 277.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L256 226.9l101.6 101.6c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L273 142.1c-9.4-9.4-24.6-9.4-34 0z"></path></svg>
    </a>
  );
};

export default UpButton;
