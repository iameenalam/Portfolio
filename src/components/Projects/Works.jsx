import React, { useEffect, useState } from "react";
import { projectsData } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [toggleStates, setToggleStates] = useState({});
  const [visibleProjects, setVisibleProjects] = useState(4);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
      setVisibleProjects(4);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  const toggleTab = (id) => {
    setToggleStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };

  const handleShowMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 2);
  };

  return (
    <div>
      <div className="work__container container grid">
        {projects.slice(0, visibleProjects).map((item) => (
          <WorkItems
            item={item}
            key={item.id}
            toggleTab={toggleTab}
            toggleState={toggleStates[item.id]}
          />
        ))}
      </div>

      {visibleProjects < projects.length && (
        <div className="show-more-container">
          <button className="show-more-button" onClick={handleShowMore}>
            More Projects
          </button>
        </div>
      )}
    </div>
  );
};

export default Works;
