import React from "react";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import FilePresentOutlinedIcon from "@mui/icons-material/FilePresentOutlined";
import Switch from "@mui/material/Switch";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function Header({ selectedStack }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="text-white flex flex-col gap-2 w-[99vw] ">
      <div
        id="upper_nav"
        className="flex items-end justify-start gap-[5%] bg-[#082f41] py-4 px-5 "
      >
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
          <p className="text-sm">Stack Id:</p>{" "}
          <p> {selectedStack?.stackId.substring(0, 15)} </p>
          <span>
            <CalendarViewWeekIcon
              sx={{
                color: "cyan",
              }}
            />
          </span>
        </div>

        <div
          id="forecast_div"
          className="flex items-center justify-start gap-4 px-4 py-2 bg-[#2284fd3d] rounded-lg"
        >
          <div className="flex flex-col gap-2 items-center">
            <p className="text-slate-300">FORECAST</p>
            <h6 className="font-bold">89%</h6>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-slate-300">FORECAST</p>
            <h6 className="font-bold">80%</h6>
          </div>
          <div></div>
        </div>

        <span>
          <EmojiFlagsIcon />
        </span>
      </div>

      <div
        id="mid_nav"
        className="flex items-end justify-start gap-4 bg-[#082f41] pt-4 px-5"
      >
        <span className="pb-3">
          <FilePresentOutlinedIcon />
        </span>

        <p className="pb-3">SPECIAL REQUIREMENTS</p>

        <div className="flex items-center justify-center pb-1">
          <Switch />
        </div>

        <p className="text-sm pb-3">INCLUDE</p>

        <div className="flex items-center justify-center pb-3">
          <KeyboardArrowDownOutlinedIcon />
        </div>
      </div>

      <div className="lower_nav">
        <div>
          <p>Forecast Horizon</p>
        </div>

        <div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Header;
