const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const lightHighContrastColors = require("@primer/primitives/dist/json/colors/light_high_contrast.json");
const lightColorblindColors = require("@primer/primitives/dist/json/colors/light_colorblind.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");
const darkHighContrastColors = require("@primer/primitives/dist/json/colors/dark_high_contrast.json");
const darkColorblindColors = require("@primer/primitives/dist/json/colors/dark_colorblind.json");
const dimmedColors = require("@primer/primitives/dist/json/colors/dark_dimmed.json");

const accL = 55;
const accC = 54;
const accH = 252;
const wppH = 222;

const tealScale = [
	"#f2fbfa",
	"#d2f5f2",
	"#a5eae5",
	"#70d8d3",
	"#42bfbd",
	"#289f9f",
	"#1e8183",
	"#1c6769",
	"#1b5254",
	"#1b4446",
	"#0a2629",
];

function getColors(theme) {
	switch (theme) {
		case "light":
			lightColors.accent.fg = `oklch(${accL}% ${accC}% ${accH}deg)`;
			lightColors.accent.emphasis = `oklch(${accL * 1.1}% ${accC}% ${accH}deg)`;
			lightColors.accent.muted = `oklch(${accL}% ${accC}% ${accH}deg / 40%)`;
			lightColors.accent.subtle = `oklch(${accL * 2}% 5% ${accH}deg)`;

			lightColors.btn.primary.bg = lightColors.accent.fg;
			lightColors.btn.primary.hoverBg = lightColors.accent.emphasis;

			lightColors.fg.default = lightColors.scale.gray[8];
			lightColors.fg.muted = lightColors.scale.gray[5];
			lightColors.fg.subtle = "oklch(74% 5% 251deg)";

			lightColors.canvas.subtle = `oklch(98% 1% ${wppH}deg)`;
			lightColors.canvas.inset = `oklch(95% 1.5% ${wppH}deg)`;

			lightColors.border.default = `oklch(20% 30% ${wppH}deg / 10%)`;
			lightColors.border.muted = `oklch(20% 30% ${wppH}deg / 5%)`;
			lightColors.border.subtle = `oklch(20% 30% ${wppH}deg / 5%)`;
			lightColors.primer.border.active = lightColors.accent.fg;

			lightColors.neutral.emphasisPlus = `oklch(28% 3% ${wppH}deg)`;
			lightColors.neutral.emphasis = `oklch(50% 5% ${wppH}deg)`;
			lightColors.neutral.muted = `oklch(70% 4% ${wppH}deg / 20%)`;
			lightColors.neutral.subtle = `oklch(80% 2% ${wppH}deg / 50%)`;

			lightColors.scale.pink = tealScale;

			return lightColors;

		case "light_high_contrast":
			lightHighContrastColors.scale.pink = tealScale;
			return lightHighContrastColors;
		case "light_colorblind":
			lightColorblindColors.scale.pink = tealScale;
			return lightColorblindColors;
		case "dark":
			// Temp override until Primitives are updated
			darkColors.fg.default = "#e6edf3";
			darkColors.fg.muted = "#7d8590";
			darkColors.accent.fg = "#2f81f7";
			darkColors.severe.subtle = "rgba(219, 109, 40, 0.1)";
			darkColors.danger.subtle = "rgba(248, 81, 73, 0.1)";
			darkColors.done.subtle = "rgba(163, 113, 247, 0.1)";
			darkColors.sponsors.subtle = "rgba(219, 97, 162, 0.1)";

			return darkColors;
		case "dark_high_contrast":
			darkHighContrastColors.scale.pink = tealScale;
			return darkHighContrastColors;
		case "dark_colorblind":
			darkColorblindColors.scale.pink = tealScale;
			return darkColorblindColors;
		case "dark_dimmed":
			dimmedColors.accent.fg = `oklch(${accL}% ${accC}% ${accH}deg)`;
			dimmedColors.accent.emphasis = `oklch(${accL *
				1.1}% ${accC}% ${accH}deg)`;
			dimmedColors.accent.muted = `oklch(${accL}% ${accC}% ${accH}deg / 40%)`;
			dimmedColors.accent.subtle = `oklch(${accL * 2}% 5% ${accH}deg)`;

			dimmedColors.btn.primary.bg = dimmedColors.accent.fg;
			dimmedColors.btn.primary.hoverBg = dimmedColors.accent.emphasis;

			dimmedColors.fg.default = dimmedColors.scale.gray[0];
			dimmedColors.fg.muted = dimmedColors.scale.gray[2];
			dimmedColors.fg.subtle = dimmedColors.scale.gray[4];

			dimmedColors.canvas.default = `oklch(26% 3% ${wppH}deg)`;
			dimmedColors.canvas.subtle = `oklch(31% 5% ${wppH}deg)`;
			dimmedColors.canvas.inset = `oklch(29% 4% ${wppH}deg)`;

			dimmedColors.border.default = `oklch(84% 30% ${wppH}deg / 10%)`;
			dimmedColors.border.muted = `oklch(84% 30% ${wppH}deg / 5%)`;
			dimmedColors.border.subtle = `oklch(84% 30% ${wppH}deg / 5%)`;
			dimmedColors.primer.border.active = dimmedColors.accent.fg;

			// dimmedColors.neutral.emphasisPlus = `oklch(28% 3% ${wppH})`;
			// dimmedColors.neutral.emphasis = `oklch(50% 5% ${wppH})`;
			// dimmedColors.neutral.muted = `oklch(70% 4% ${wppH} / 20%)`;
			// dimmedColors.neutral.subtle = `oklch(80% 2% ${wppH} / 50%)`;

			dimmedColors.scale.pink = tealScale;

			return dimmedColors;
		default:
			throw new Error(`Colors are missing for value: ${theme}`);
	}
}

module.exports = {
	getColors,
};
