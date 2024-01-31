import * as React from "react";


function IconNext(props) {
  return (
    <svg 
      viewBox="0 0 15 15" 
      fill="none" 
      height="1em" 
      width="1em" 
      id={props.id} 
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 7.5a7.5 7.5 0 1111.697 6.216L4.907 4.21A.5.5 0 004 4.5V12h1V6.06l5.83 8.162A7.5 7.5 0 010 7.5zM10 10V4h1v6h-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};


export default IconNext;