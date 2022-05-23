import { React } from "react";

import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

const Popup = (props) => {
  return (
    <div
      className="flex flex-col gap-2 bg-cyan-50	 shadow-2xl	 text-white p-2 fixed "
      style={{
        borderRadius: "20px 20px 0 0",
        padding: "1rem",
        width: "90%",
        height: "40vh",
        zIndex: 5,

        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
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
