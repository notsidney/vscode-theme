const fs = require("fs").promises;
const getTheme = require("./theme");

const lightTheme = getTheme({
  theme: "light",
  mode: "light",
  name: "GitHub Light",
});

const darkTheme = getTheme({
  theme: "dark",
  mode: "dark",
  name: "GitHub Dark",
});

const spaceGrayTheme = getTheme({
  theme: "spacegray",
  mode: "dark",
  name: "GitHub SpaceGray",
});

fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([
    fs.writeFile("./themes/light.json", JSON.stringify(lightTheme, null, 2)),
    fs.writeFile("./themes/dark.json", JSON.stringify(darkTheme, null, 2)),
    fs.writeFile("./themes/spacegray.json", JSON.stringify(spaceGrayTheme, null, 2)),
  ]))
  .catch(() => process.exit(1))
