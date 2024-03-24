import {
  Toolbar,
  AppBar,
  Avatar,
  Link,
  Typography,
  IconButton,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

const Appbar = ({ drawerWidth, showDrawer }) => {
  return (
    <AppBar
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        height:"70px",
        ml: { xs: 0, sm: `${drawerWidth}px` },
      }}
      position="static"
    >
      <Toolbar>
        <IconButton
          onClick={() => {
            showDrawer();
          }}
          sx={{ mr: "9px", display: { sm: "none" } }}
        >
          <Menu />
        </IconButton>
        <Link
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            "&:hover": { fontSize: "16.5px" },
          }}
          color="inherit"
          href="/"
        >
          Prisma App
        </Link>

        <Typography mr={2} variant="body1" color="inherit">
          Houari Belsaadi
        </Typography>

        <Avatar alt="Remy Sharp" src="./img.JPG" />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
