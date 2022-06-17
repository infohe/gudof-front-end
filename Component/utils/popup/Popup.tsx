import React from "react";

import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

const Popup = (props) => {
  return (
    <div className="flex flex-col  gap-2 bg-cyan-50	rounded-t-3xl	p-4 h-2/5 left-2/4	-translate-x-1/2			inset-x-auto		z-40	bottom-0		 w-11/12		 shadow-2xl	 text-white p-2 fixed ">
      <div className="flex justify-end	">
        <ClearRoundedIcon
          color="primary"
          onClick={props.CancelPopUp}
        ></ClearRoundedIcon>
      </div>
      {props.children}
    </div>
  );
};

export default Popup;
