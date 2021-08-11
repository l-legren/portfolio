import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        dark1: "#495057",
        light1: "#FFF",
        // lightBlack: "#495057",
        primary: "rgba(22, 224, 189, 1)",
        // primary: "#3b28cc",
        secondary: "rgba(120, 195, 251, 1)",
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em",
    },
    breakpoints: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
    },
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
