import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Title = styled(Typography)(({ theme }) => ({
  textShadow: "-2px -2px 4px #5c5a5abf",

  "& > a": {
    fontSize: ".7rem",
    marginLeft: ".6rem",
    fontWeight: "600",
    letterSpacing: "2px",
    color: "#000fff",
    textShadow: "none",
  },
}));

export const ImageWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "115px",
  overflow: "hidden",
  cursor: "pointer",
  transition: "opacity .3s",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #002876",

  [theme.breakpoints.up("md")]: {
    "&:hover": {
      opacity: theme.palette.action.hoverOpacity,
    },
    height: "300px",
    margin: "auto",

    "&:hover > button": {
      opacity: 1,
    },
  },
}));

export const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "rgba(0,0,0,.8)",
  color: theme.palette.common.white,
  fontSize: "1.2rem",
  letterSpacing: "3px",
  fontWeight: 400,
  opacity: 0,
  transition: "opacity .5s",

  [theme.breakpoints.down("md")]: {
    opacity: 1,
    fontSize: ".6rem",
    top: "10%",
    left: "5%",
    transform: "translate(0)",
  },
}));
