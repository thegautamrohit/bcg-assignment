import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("./Map/Map"), { ssr: false });
import CityWidget from "./Map/CityWidget";
import Header from "./Header";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function LandingPage() {
  const [position, setPosition] = useState("bottom");

  const handleChange = (event) => {
    setPosition(event.target.value);
  };

  return (
    <div className="relative">
      <Header />
      <Map />
      <div className="flex items-center justify-start gap-2 text-white absolute left-10 top-32 z-[1000] text-3xl font-bold">
        <h4>Hello User,</h4>

        <Box
          sx={{
            minWidth: 120,
            backgroundColor: "#72cfff",
            borderRadius: 2,
            fontWeight: "bold",
          }}
        >
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ color: "#fff", padding: 0 }}
            >
              Align
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={position}
              label="Position"
              onChange={handleChange}
              sx={{
                color: "#fff",
                padding: 0,
                borderRadius: 2,
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: "#fff",
                    "& .MuiMenuItem-root": {
                      padding: 2,
                    },
                    fontSize: 12,
                  },
                },
              }}
            >
              <MenuItem selected value={"top"}>
                Top
              </MenuItem>
              <MenuItem value={"bottom"}>Bottom</MenuItem>
              <MenuItem value={"left"}>Left</MenuItem>
              <MenuItem value={"right"}>Right</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <CityWidget position={position} />
    </div>
  );
}

export default LandingPage;
