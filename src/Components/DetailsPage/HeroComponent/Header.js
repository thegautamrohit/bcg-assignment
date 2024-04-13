import React from "react";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import FilePresentOutlinedIcon from "@mui/icons-material/FilePresentOutlined";
import Switch from "@mui/material/Switch";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

function Header() {
  return (
    <div className="text-white flex flex-col gap-2 w-full ">
      <div id="upper_nav" className="flex items-end justify-start gap-40">
        <div className="flex items-center justify-start gap-4">
          <span>
            <WarningAmberIcon
              style={{
                color: "orange",
              }}
            />
          </span>
          <p className="text-white font-bold text-2xl">Sample Stack</p>
        </div>

        <div className="flex items-center justify-start gap-2">
          <p className="text-sm">Stack Id:</p> <p> 12345678909 </p>
          <span>
            <CalendarViewWeekIcon />
          </span>
        </div>

        <div
          id="forecast_div"
          className="flex items-center justify-start gap-4 px-4 py-2 bg-blue-400 rounded-lg"
        >
          <div className="flex flex-col gap-2 items-center">
            <p>FORECAST</p>
            <h6 className="text-bold">89%</h6>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p>FORECAST</p>
            <h6 className="text-bold">80%</h6>
          </div>
          <div></div>
        </div>

        <span>
          <EmojiFlagsIcon />
        </span>
      </div>

      <div id="lower_nav" className="flex items-end justify-start gap-4">
        <span>
          <FilePresentOutlinedIcon />
        </span>

        <p>SPECIAL REQUIREMENTS</p>

        <Switch />
        <p className="text-sm">INCLUDE</p>

        <KeyboardArrowDownOutlinedIcon />
      </div>
    </div>
  );
}

export default Header;
