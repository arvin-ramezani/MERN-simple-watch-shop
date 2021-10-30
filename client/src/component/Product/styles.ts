import { styled } from "@mui/system";

export const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: theme.palette.common.white,
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  maxWidth: "320px",
  margin: "auto",
  cursor: "pointer",
  transition: ".3s",
  "&:hover": {
    opacity: theme.palette.action.hoverOpacity,
  },
}));

export const Image = styled("img")(({ theme }) => ({
  width: "150px",
}));

export const Info = styled("div")(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2),
}));

export const Desc = styled("p")(({ theme }) => ({
  color: theme.palette.text.secondary,
  width: "180px",
  fontSize: ".8rem",
  margin: ".4rem 0",
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
