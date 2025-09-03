import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
    <Box sx={{ p: 4 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/result")}
      >
        Go to Result Page
      </Button>
    </Box>
    </>
  );
};

export default Home;