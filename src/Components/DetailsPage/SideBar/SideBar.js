import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { CityStackData } from "../../../../CityStackData";
import FilterListIcon from "@mui/icons-material/FilterList";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SideBar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let backLogData = CityStackData?.filter(
    (item) => item?.stackType === "backlog"
  );
  let pendingData = CityStackData?.filter(
    (item) => item?.stackType === "pending"
  );
  let finalData = CityStackData?.filter((item) => item?.stackType === "final");

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#082f41",
        height: "100%",
        color: "#fff",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab
            label={`Backlog (${backLogData?.length})`}
            {...a11yProps(0)}
            sx={{
              color: "#fff",
            }}
          />
          <Tab
            label={`Pending (${pendingData?.length})`}
            {...a11yProps(1)}
            sx={{
              color: "#fff",
            }}
          />
          <Tab
            label={`Final Sign-Off (${finalData?.length})`}
            {...a11yProps(2)}
            sx={{
              color: "#fff",
            }}
          />
        </Tabs>
      </Box>
      <div className="flex items-center justify-start gap-4 text-cyan-300 p-4 cursor-pointer">
        <p className="font-semibold">Filter</p>
        <FilterListIcon />
      </div>

      <CustomTabPanel value={value} index={0}>
        <List sx={{ width: "100%", maxWidth: 360 }}>
          {backLogData?.length > 0 ? (
            backLogData?.map((item, index) => <MonoList key={item.id} />)
          ) : (
            <p className="text-white text-lg my-5 text-center">
              No Data Available
            </p>
          )}
        </List>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {pendingData?.length > 0 ? (
          pendingData?.map((item, index) => <MonoList key={item.id} />)
        ) : (
          <p className="text-white text-lg my-5 text-center">
            No Data Available
          </p>
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {finalData?.length > 0 ? (
          finalData?.map((item, index) => <MonoList key={item.id} />)
        ) : (
          <p className="text-white text-lg my-5 text-center">
            No Data Available
          </p>
        )}
      </CustomTabPanel>
    </Box>
  );
}

function MonoList() {
  return (
    <ListItem sx={{ width: "100%" }}>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
      </Stack>
    </ListItem>
  );
}
