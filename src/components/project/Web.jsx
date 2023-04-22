import React from "react";
import IMG1 from "../../assets/portfolio1.jpg";

function Web() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Automatic Farm",
      source: "https://github.com/Henrywalker2002/automatic_farm.git",
      demo: "https://github.com/Henrywalker2002/automatic_farm.git",
    },
    {
      id: 2,
      image: IMG1,
      title: "Cafe Street",
      source: "https://github.com/Henrywalker2002/cafeStore.git",
      demo: "https://github.com/Henrywalker2002/cafeStore.git",
    },
    {
      id: 3,
      image: IMG1,
      title: "My Porfolio",
      source: "https://github.com/Henrywalker2002/automatic_farm.git",
      demo: "https://github.com/Henrywalker2002/automatic_farm.git",
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
                Github
              </a>
              <a href={demo} className="btn btn-primary" target="_blank">
                Demo
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Web;
