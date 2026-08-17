import { createTheme, MantineColorsTuple } from "@mantine/core";

const tennesseeOrange: MantineColorsTuple = [
  "#fff4e6",
  "#ffe8cc",
  "#ffd8a8",
  "#ffc078",
  "#ffa94d",
  "#FF8200",
  "#e67700",
  "#cc6d00",
  "#b35f00",
  "#994d00",
];

export const theme = createTheme({
  primaryColor: "tennesseeOrange",
  primaryShade: { light: 6, dark: 5 },
  defaultRadius: "md",
  colors: {
    tennesseeOrange,
  },
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  headings: {
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "700",
  },
  cursorType: "pointer",
});
