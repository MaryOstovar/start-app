import { Card, CardContent, Typography, Divider, Box } from "@mui/material";

const ResultApproved = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        p: 2,
      }}
    >
      <Card
        sx={{
          width: 400,
          borderRadius: 4,
          boxShadow: 3,
        }}
      >
        <CardContent sx={{ backgroundColor: "#009C82" }}>
          <Typography
            variant="h5"
            component="div"
            align="left"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Approved
          </Typography>
        </CardContent>
        <Divider />
        <CardContent sx={{ backgroundColor: "#009c8243" }}>
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
            Your experience and motivation align well with this program.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ResultApproved;
