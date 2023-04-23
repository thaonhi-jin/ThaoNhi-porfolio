import React from "react";
import IMG1 from "../../assets/design2.png";
import IMG2 from "../../assets/design3.png";
import IMG3 from "../../assets/web3_1.png";

function Web() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Automatic Farm",
      source: "https://github.com/Henrywalker2002/automatic_farm.git",
      demo: "http://farm.henrywalker.online/",
    },
    {
      id: 2,
      image: IMG2,
      title: "Cafe Street",
      source: "https://github.com/Henrywalker2002/cafeStore.git",
      demo: "https://github.com/Henrywalker2002/cafeStore.git",
    },
    {
      id: 3,
      image: IMG3,
      title: "My Porfolio",
      source: "https://github.com/thaonhi-jin/my-porfolio.git",
      demo: "https://thaonhi-jin.github.io/ThaoNhi-porfolio/",
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
