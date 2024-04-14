import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { CityStackData } from "../../../../CityStackData";
import FilterListIcon from "@mui/icons-material/FilterList";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import Checkbox from "@mui/material/Checkbox";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
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

export default function SideBar({ selectedStack, setSelectedStack }) {
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

  const styles = {
    tab: {
      color: "#fff",
    },
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#082f41",
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
            sx={styles.tab}
          />
          <Tab
            label={`Pending (${pendingData?.length})`}
            {...a11yProps(1)}
            sx={styles.tab}
          />
          <Tab
            label={`Final Sign-Off (${finalData?.length})`}
            {...a11yProps(2)}
            sx={styles.tab}
          />
        </Tabs>
      </Box>
      <div className="flex items-center justify-start gap-4 text-cyan-300 p-4 cursor-pointer">
        <p className="font-semibold">Filter</p>
        <FilterListIcon />
      </div>

      <CustomTabPanel value={value} index={0}>
        <List sx={{ width: "100%", maxWidth: 420, padding: 0 }}>
          {backLogData?.length > 0 ? (
            backLogData?.map((item, index) => (
              <MonoList
                key={item.id}
                data={item}
                selectedStack={selectedStack}
                setSelectedStack={setSelectedStack}
              />
            ))
          ) : (
            <p className="text-white text-lg my-5 text-center">
              No Data Available
            </p>
          )}
        </List>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {pendingData?.length > 0 ? (
          pendingData?.map((item, index) => (
            <MonoList key={item.id} data={item} />
          ))
        ) : (
          <p className="text-white text-lg my-5 text-center">
            No Data Available
          </p>
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {finalData?.length > 0 ? (
          finalData?.map((item, index) => (
            <MonoList key={item.id} data={item} />
          ))
        ) : (
          <p className="text-white text-lg my-5 text-center">
            No Data Available
          </p>
        )}
      </CustomTabPanel>
    </Box>
  );
}

function MonoList({ data, selectedStack, setSelectedStack }) {
  return (
    <ListItem
      sx={{ width: "100%", padding: 0 }}
      onClick={() => {
        setSelectedStack(data);
      }}
    >
      <div className="flex flex-col justify-center gap-1 border-b border-white pb-6 pt-2 cursor-pointer">
        <div className="flex items-center justify-center gap-2">
          <Checkbox
            {...label}
            sx={{
              color: "#d7d7d7",
              "&.Mui-checked": {
                color: "#00FFFF",
              },
            }}
            checked={data?.stackId === selectedStack?.stackId}
          />
          <div className="flex items-center justify-center gap-2 p-2">
            <button className="flex items-center justify-center bg-slate-300 rounded-sm text-black font-semibold text-sm p-1">
              <SouthIcon
                sx={{
                  width: "20px",
                  height: "20px",
                }}
              />
              F'CAST STAB.
            </button>
            <button className="flex items-center justify-center bg-slate-300 rounded-sm text-black font-semibold text-sm p-1">
              <NorthIcon
                sx={{
                  width: "20px",
                  height: "20px",
                }}
              />
              F'CAST ACC.
            </button>
          </div>
          <MailOutlineIcon
            sx={{
              color: "#00FFFF",
            }}
          />
        </div>
        <p className="ml-14 text-sm">{data?.displayName}</p>
      </div>
    </ListItem>
  );
}
