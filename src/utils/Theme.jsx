import { ThemeProvider } from "@emotion/react";

const pallete = {
    'primary': '#f1f1f1',
    'secondary': '#25DD86',
    'dimmed': '#99f1f1f1',
    'bg': '#070B14',
    'card-bg': '#141821',
    'fields': '#05080D',
    'btn-color': '#4155E4',
    'sub-btn' : '#1C304B'
};

export const { Theme } = ({ children }) => (
    <ThemeProvider theme={pallete}>
        { children }
    </ThemeProvider>
);