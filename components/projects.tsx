"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 max-w-7xl flex flex-col top-56 mb-64 relative h-screen mx-auto justify-center items-center">
      <h2 className="mb-4 uppercase text-3xl tracking-[20px] ">Projects</h2>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
