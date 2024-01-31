import * as React from "react";


function IconCSS(props) {
  return (
    <svg
      viewBox="3 3 18 18"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      height="1em"
      width="1em"
      id={props.id}
      {...props}
    >
      <path fill="#081b29" stroke="none" d="M0 0h24v24H0z" />
      <path fill="#081b29" stroke="#ededed" d="M20 4l-2 14.5-6 2-6-2L4 4z" />
      <path fill="#081b29" stroke="#ededed" d="M8.5 8h7L11 12h4l-.5 3.5-2.5.75-2.5-.75-.1-.5" />
    </svg>
  );
};


export default IconCSS;
