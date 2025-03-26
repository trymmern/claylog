import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./frontend/**/*.{js,jsx,ts,tsx}",],
  safelist: [
    "text-5xl", // H1
    "text-4xl", // H2
    "text-3xl", // H3
    "text-base", // Paragraph
    "text-sm", // Small
  ],
  theme: {
    extend: {
    },
    colors: {
      gray: {
        300: "#D1D5DB",
        400: "#9CA3AF",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
      },
      blue: {
        400: "#60A5FA",
      },
      indigo: {
        400: "#818CF8",
      },
      green: {
        400: "#34D399",
      },
      yellow: {
        400: "#FBBF24",
      },
      red: {
        400: "#F87171",
      },
    },
    plugins: [require("@tailwindcss/typography")],
  },
});