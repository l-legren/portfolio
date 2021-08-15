import React from "react";
import {
    ListWrapper,
    SingleProject,
    SingleProjectTitle,
    SingleTechnology,
    Technologies,
} from "./styles";

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

export default function ProjectList() {
    return (
        <ListWrapper>
            <ul>
                {projects.map((pr) => (
                    <li>
                        <SingleProject>
                            <SingleProjectTitle href={pr.gitUrl}>
                                {pr.name}
                            </SingleProjectTitle>
                            <Technologies>
                                {pr.technologies.map((tec, idx) => (
                                    <SingleTechnology>{tec}</SingleTechnology>
                                ))}
                            </Technologies>
                        </SingleProject>
                    </li>
                ))}
            </ul>
        </ListWrapper>
    );
}
