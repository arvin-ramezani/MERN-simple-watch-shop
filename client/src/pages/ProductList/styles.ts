import { styled } from "@mui/system";
import { Grid } from "@mui/material";

export const FilterBlock = styled("div")(({ theme }) => ({
  marginTop: "100px",
  // height: "200px",
  background: "#23a5f0",
  display: "flex",
  justifyContent: "space-evenly",
  padding: "1rem 0",
}));

export const LinkStyles = {
  textDecoration: "none",
  color: "inherit",
};

export const ProductsWrapper = styled(Grid)(({ theme }) => ({
  background: theme.palette.divider,
}));
