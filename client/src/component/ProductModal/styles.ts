import { IconButton } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled("div")(({ theme }) => ({
  width: "200px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",

  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    width: "500px",

    "& .MuiIconButton-root:hover": {
      background: "rgba(245, 231, 231, 0.808)",
    },
  },
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
}));

export const Image = styled("img")(({ theme }) => ({
  width: "100px",

  [theme.breakpoints.up("md")]: {
    width: "180px",
  },
}));

export const Info = styled("div")(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2),

  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
  },
}));

export const Price = styled("span")(({ theme }) => ({
  margin: ".4rem 0",
  fontSize: "1.2rem",
  fontWeight: "bold",
}));

export const AddToCart = styled("div")(({ theme }) => ({
  margin: ".8rem auto",
  textAlign: "center",
}));

export const Quantity = styled("div")(({ theme }) => ({
  margin: "1rem auto",
  display: "flex",
  alignItems: "center",
  gap: ".6rem",
}));

export const Categories = styled("div")(({ theme }) => ({
  borderRadius: "3px",
  padding: "0.4rem",
  margin: "2rem .5rem 0",
  border: "1px solid #23a5f0",

  "& span": {
    color: "#043ecd",
    fontSize: ".8rem",
    letterSpacing: "1px",
    cursor: "pointer",
    marginLeft: ".4rem",
  },
}));
