'use client';

import React from 'react';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
    const { ref } = useSectionInView('Projects', 0.5);

    return (
        <section
            ref={ref}
            id="projects"
            className="scroll-mt-28 max-w-7xl flex flex-col mb-64  mx-auto justify-center items-center cursor-pointer"
        >
            <h2 className="mb-4 uppercase text-3xl tracking-[14px] ">
                Expeditions
            </h2>
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
