import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between", backgroundColor: "#ffffff" }}>
        <Box
          component="img"
          src="src/assets/logo.png"
          alt="App Logo"
          sx={{ height: 40, mx: "auto" }}
        />
        <Box sx={{ width: 48 }} /> 
        <IconButton
          edge="start"
          sx={{ color: "#009c82" }}
          aria-label="menu"
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
