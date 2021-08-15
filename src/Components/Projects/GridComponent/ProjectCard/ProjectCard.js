import React from "react";
import {
    SingleCard,
    CardHeader,
    ImageContainer,
    Image,
    Overlay,
    ProjectName,
    ProjectTechnology,
    UpOverlay,
} from "./styles";

export default function ProjectCard({
    projectName,
    projectImage,
    projectUrl,
    technologies,
}) {
    return (
        <SingleCard>
            <CardHeader>{projectName}</CardHeader>
            <ImageContainer href={projectUrl}>
                <UpOverlay />
                <Image src={projectImage} alt={projectName} />
                <Overlay>
                    <ProjectName>{projectName}</ProjectName>
                    {technologies.map((tech) => (
                        <ProjectTechnology key={tech}>{tech}</ProjectTechnology>
                    ))}
                </Overlay>
            </ImageContainer>
        </SingleCard>
    );
}
