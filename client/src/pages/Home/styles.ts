import { styled } from "@mui/system";

export const HeroSection = styled("div")(({ theme }) => ({
  marginTop: "100px",
  width: "100%",
  height: "auto",
}));

export const HeroImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  objectFit: "cover",
  display: "none",

  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

export const MobileHeroImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  objectFit: "cover",
  display: "block",

  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
