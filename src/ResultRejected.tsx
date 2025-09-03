import { Card, CardContent, Typography, Divider, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ResultRejected = () => {
        const navigate = useNavigate();

      const handlePrevClick = () => {
          navigate("/step/appointments");
      };

            const handleContinueClick = () => {
          navigate("/");
      };
  return (
<Box p="2" sx={{
            minHeight: "100vh",
            minWidth: "100vw",
            bgcolor: (t) =>
                t.palette.mode === "light" ? "grey.100" : "background.default",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
      <Card
        sx={{
          maxWidth: '80vw',
          borderRadius: 4,
          boxShadow: 3,
          marginTop: 4
        }}
      >
        <CardContent sx={{ backgroundColor: "#F4510B" }}>
          <Typography
            variant="h5"
            component="div"
            align="left"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Rejected
          </Typography>
        </CardContent>
        <Divider />
        <CardContent sx={{ backgroundColor: "#f4510b3f" }}>
          <Typography variant="body1" gutterBottom>
            <strong>Attendees:</strong> John Doe, John Doe
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body1" gutterBottom>
            <strong>Date & time:</strong> 01-01-2000 10:00
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body1" gutterBottom marginBottom={4}>
            <strong>Reason for approval:</strong>
            <br />
            <br />
            Unfortunately, your application does not meet the criteria for this program.
          </Typography>
        </CardContent>
      </Card>
                        <Box
                position="fixed"
                bottom={16}
                left={0}
                right={0}
                px={2}
                display="flex"
                justifyContent="space-between"
                >
                    <Button
                    size="large"
                    variant="text"
                    onClick={handlePrevClick}
                    sx={{
                        borderRadius: 2,
                        color: "black",
                        backgroundColor: "transparent",
                        "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.05)",
                        },
                    }}
                    >
                    Prev
                    </Button>


                <Button
                    size="large"
                    variant="contained"
                    sx={{ borderRadius: 2, backgroundColor: "#009C82" }}
                    onClick={handleContinueClick}
                >
                    Continue
                </Button>
                </Box>
    </Box>
  );
};

export default ResultRejected;
