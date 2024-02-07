import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
    },
    colors: {
      BtnHireMe: {
        BackGroundHireMe: "#1f2235",
        HoverBorderHireMe: "#ff5823",
      },
      BtnGetCV: {
        BackGroundGetCV: "#ff5823",
        HoverBorderGetCV: "#1f2235",
      },
    },
    textColor: {
      TextHireMe: "white",
      HoverTextHireMe: "aliceblue",
      HeroSection: {
        ProfileParent: {
          Color: "aliceblue",
        },
        HightlightText: {
          Color: "#ff5823",
        },
      },
    },
    backgroundImage: {
      HeroSection: "url('/bg-web.jpg')",
      HeroProfile: "url('/bg-4.jpg')",
    },
    boxShadow: {
      ProfilePicture: "0 1px 0px 0px rgb(255,255,255)",
    },
  },
  plugins: [],
};
export default config;
