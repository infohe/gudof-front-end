import { React } from "react";
import Filters from "../Mosaic/Filters";
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

        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <div className="flex justify-between	">
        <svg className="w-6 h-6 fill-blue-500	 	" viewBox="0 0 16 16">
          <path d="M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z" />
        </svg>
        <ClearRoundedIcon
          color="primary"
          onClick={props.CancelPopUp}
        ></ClearRoundedIcon>
      </div>

      <div>
        <Filters></Filters>
      </div>
    </div>
  );
};

export default Popup;
