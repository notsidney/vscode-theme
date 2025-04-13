const fs = require("fs").promises;
const getTheme = require("./theme");

const lightDefaultTheme = getTheme({
	theme: "light",
	name: "notsidney theme Light Default",
});

const darkDimmedTheme = getTheme({
	theme: "dark_dimmed",
	name: "notsidney theme Dark Dimmed",
});

// Write themes

fs.mkdir("./themes", { recursive: true })
	.then(() =>
		Promise.all([
			fs.writeFile(
				"./themes/light-default.json",
				JSON.stringify(lightDefaultTheme, null, 2)
			),
			fs.writeFile(
				"./themes/dark-dimmed.json",
				JSON.stringify(darkDimmedTheme, null, 2)
			),
		])
	)
	.catch(() => process.exit(1));
