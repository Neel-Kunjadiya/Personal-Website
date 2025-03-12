import React, { useEffect, useState } from 'react'
import { projectsData } from './Data'
import WorksItems from './WorksItems'

const Works = () => {
    const [item , setItem] = useState({name: "all"});
    const [projects , setProjects] = useState([]);
    const [active , setActive] = useState(0);

            // setProjects(projectsData);
    return (
            <div className="work__container container grid">
                {projectsData.map((item) => {
                    return <WorksItems item={item} key={item.id} />
                })}
            </div>
    )
}

export default Works