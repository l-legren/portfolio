import React from "react";

import { BackgroundContainer } from "./styles";

export default function FullSizeContainer({ children }) {
    return <BackgroundContainer>{children}</BackgroundContainer>;
}
