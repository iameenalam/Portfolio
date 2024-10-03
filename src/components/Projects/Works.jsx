import React, { useEffect, useState } from "react";
import { projectsData } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [toggleStates, setToggleStates] = useState({});
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [loading, setLoading] = useState(false);
  const initialVisibleProjects = 4;

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
      setVisibleProjects(initialVisibleProjects);
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
    setLoading(true);
    setTimeout(() => {
      setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 2);
      setLoading(false);
    }, 800);
  };

  return (
    <div id="projects">
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

      <div className="show-more-container">
        {visibleProjects < projects.length && (
          <button className="show-more-button" onClick={handleShowMore} disabled={loading}>
            {loading ? "Loading..." : "More Projects"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Works;
