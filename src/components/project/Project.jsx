import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./Project.css";
import Web from "./Web";
import Design from "./Design";

function Project() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section id="project">
      <h2>Project</h2>
      <h5>My Recent Work</h5>

      {/* Tab */}
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ width: "max-content", margin: "20px auto" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                label="Design"
                value="1"
                sx={{
                  color: "var(--color-light)",
                  "&:hover": {
                    color: "var(--color-primary)",
                    opacity: 1,
                  },
                  "&.Mui-selected": {
                    color: "var(--color-primary)",
                  },
                }}
              />
              <Tab
                label="Web"
                value="2"
                sx={{
                  color: "var(--color-light)",
                  "&:hover": {
                    color: "var(--color-primary)",
                    opacity: 1,
                  },
                  "&.Mui-selected": {
                    color: "var(--color-primary)",
                  },
                }}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Design />
          </TabPanel>
          <TabPanel value="2">
            <Web />
          </TabPanel>
        </TabContext>
      </Box>
    </section>
  );
}

export default Project;
