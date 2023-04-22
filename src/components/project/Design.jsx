import React from "react";
import "./Project.css";
import IMG1 from "../../assets/design1.png";
import IMG2 from "../../assets/design2.png";
import IMG3 from "../../assets/design3.png";

function Design() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Online Test",
      source:
        "https://www.figma.com/file/YUvLIIWBxsgvuPe9LQflmD/web-test?node-id=0%3A1&t=GiBhzQJtym9jaeF5-1",
    },
    {
      id: 2,
      image: IMG2,
      title: "YoloFarm",
      source:
        "https://www.figma.com/file/WEjrQVojYQe6gPsN2ww3fE/Yolofarm?t=UWFrF8jXA2XOLmKK-1",
    },
    {
      id: 3,
      image: IMG3,
      title: "Cafe Street",
      source:
        "https://www.figma.com/file/ub1CdqR34tfwvgYQBXm09U/Cafe-Street?node-id=1%3A452&t=PkD1VIobKUzYq30N-1",
    },
  ];
  return (
    <div className="container project_container">
      {data.map(({ id, image, title, source, demo }) => {
        return (
          <article key={id} className="project_item">
            <div className="project_item-image">
              <img src={image} alt="project" />
            </div>
            <h3>{title}</h3>
            <div className="project_item-cta">
              <a href={source} className="btn" target="_blank">
                Figma
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Design;
