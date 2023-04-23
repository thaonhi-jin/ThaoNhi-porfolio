import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./About.css";
import ME from "../../assets/img2.jpg";
import Journey from "./Journey";
import Interest from "./Interest";

function About() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section id="about">
      <h2>About me</h2>
      <h5>Get to Know</h5>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About-me" />
          </div>
        </div>
        <div className="about_content">
          <p>
            As a Computer Science Student, I am interested in Web programming
            and User experience design in my university projects.
          </p>
          <p>
            Therefore, I want to be able to apply knowledge and skills in the
            self-study process of HTML, CSS, JavaScript, ReactJS, and UX Design,
            and the soft skills to assist the Front-End development of Web
            Application projects and learn more from real-world projects to
            improve my career skills in Product Development.
          </p>

          {/* Tab */}
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ width: "max-content", margin: "20px auto" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    label="Journey"
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
                    label="Interest"
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
                <Journey />
              </TabPanel>
              <TabPanel value="2">
                <Interest />
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </section>
  );
}

export default About;
