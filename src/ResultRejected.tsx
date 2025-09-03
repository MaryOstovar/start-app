import { Card, CardContent, Typography, Divider, Box } from "@mui/material";

const ResultRejected = () => {
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
    </Box>
  );
};

export default ResultRejected;
