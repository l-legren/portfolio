import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import {Grid} from './styles'

const projects = [
    {
        name: "Photo Me",
        image: "/images/projects/photome.jpg",
        technologies: [
            "React",
            "Redux",
            "Material-UI",
            "AWS",
            "PSQL",
            "Express",
        ],
        gitURL: "https://github.com/l-legren/spiced-final-project",
    },
    {
        name: "ImageBoard",
        image: "/images/projects/imageboard.jpg",
        technologies: ["Vue", "AWS", "PSQL", "Express"],
        gitURL: "https://github.com/l-legren/imageboard",
    },
    {
        name: "Instaclone",
        image: "/images/projects/insta-clone.jpg",
        technologies: ["React Native", "Redux", "Firebase"],
        gitURL: "https://github.com/l-legren/my-insta",
    },
    {
        name: "CMS",
        image: "/images/projects/cms.jpg",
        technologies: ["React", "GraphQL", "Tailwind"],
        gitURL: "https://github.com/l-legren/CRM-Client",
    },
    {
        name: "Petition",
        image: "/images/projects/petition.jpg",
        technologies: ["Handlebars", "AWS", "PSQL", "Express"],
        gitURL: "https://github.com/l-legren/spiced-petition",
    },
    {
        name: "Social Network",
        image: "/images/projects/mysocial.jpg",
        technologies: [
            "React",
            "Redux",
            "Material-UI",
            "AWS",
            "PSQL",
            "Express",
        ],
        gitURL: "https://github.com/l-legren/spiced-social-network",
    },
];


export default function GridProjects() {
    return (
        <Grid>
            {projects.map((project) => (
                <ProjectCard
                    key={project.name}
                    technologies={project.technologies}
                    projectUrl={project.gitURL}
                    projectName={project.name}
                    projectImage={project.image}
                />
            ))}
        </Grid>
    );
}
