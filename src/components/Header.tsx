import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useLocation } from "react-router-dom";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathname = location.pathname;

  let leftButton = null;
  if (pathname === "/steps") {
    leftButton = (
      <IconButton aria-label="home" onClick={() => navigate("/")}>
        <HomeRoundedIcon />
      </IconButton>
    );
  } else if (pathname !== "/") {
    leftButton = (
      <IconButton aria-label="back" onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </IconButton>
    );
  }

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left slot */}
        <Box sx={{ width: 48, display: "flex", justifyContent: "flex-start" }}>
          {leftButton}
        </Box>

        {/* Center logo */}
        <Box
          component="img"
          src="src/assets/logo.png"
          alt="App Logo"
          sx={{ height: 40 }}
        />

        {/* Right menu button */}
        <Box sx={{ width: 48, display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            edge="end"
            sx={{ color: "#009c82" }}
            aria-label="menu"
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
