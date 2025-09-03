import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar = ({ open, onClose }: SidebarProps) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: "#009c82",
          width: "100vw",
          height: "100vh",
          position: "relative"
        }
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          color: "#fff",
          zIndex: 1
        }}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
      <List sx={{ width: 250, mt: 6 }}>
        <ListItemButton>
          <ListItemIcon sx={{ minWidth: 32}}>
            <img
              src={"src/assets/dutch-flag.png"}
              alt="Dutch Flag"
              style={{ width: 24, height: 24 }}
            />
          </ListItemIcon>
          <ListItemText primary="NL" sx={{ color: "#fff" }} />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Logout" sx={{ color: "#fff" }} />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Help" sx={{ color: "#fff" }} />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Privacy Policy" sx={{ color: "#fff" }} />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Onboarding Saxion" sx={{ color: "#fff" }} />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Foreign qualifications info" sx={{ color: "#fff" }} />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;