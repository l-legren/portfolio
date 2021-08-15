import React from "react";
import Grid from "../../Components/Projects/GridComponent/Grid";
import { ProjectsContent, ProjectsWrapper } from "./styles";

export default function Projects() {

    return (
        <ProjectsWrapper>
            <ProjectsContent>
                <Grid />
            </ProjectsContent>
        </ProjectsWrapper>
    );
}
