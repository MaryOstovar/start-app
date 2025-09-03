import {
    Card,
    CardContent,
    Button,
    Typography,
    Box,
    Grid,
} from "@mui/material";

type Appointment = {
    title: string;
    date: string;
};

const appointments: Appointment[] = [
    {
        title: "Intake meeting 1",
        date: "09-09-2000 9:00",
    },
    {
        title: "Intake meeting 2",
        date: "10-10-2000 10:45",
    },
];

export default function Appointments() {
    const handleApproveClick = () => {
        alert(
            `TODO: connection to office API to approve the meeting`
        );
    };

    const handleRejectionClick = () => {
        alert(
            `TODO: connection to office API to reject the meeting`
        );
    };

    const handleJoinClick = () => {
        alert(
            `TODO: connection to office API to join the meeting`
        );
    };

    const handleNextClick = () => {
        alert(
            `TODO: handle the next click`
        );
    };

    const handlePrevClick = () => {
        alert(
            `TODO: handle the prev click`
        );
    };

  return (
        <Box sx={{
            minHeight: "100vh",
            minWidth: "100vw",
            bgcolor: (t) =>
                t.palette.mode === "light" ? "grey.100" : "background.default",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
        <Typography paddingBottom="1vh" fontSize="large" fontWeight="bold" color="black">Appointments</Typography>

        <Grid justifyContent={"center"} container spacing={2} direction="column">
            {appointments.map((appointment, idx) => (
            <Grid key={idx}>
                <Card
                    sx={{
                        borderRadius: 4,
                        boxShadow: 2,
                        backgroundColor: "#fff",
                        overflow: "hidden",
                    }}>
                        <Box
                            sx={{
                                backgroundColor: "#E0E0E0",
                                px: 3,
                                py: 3,
                                borderTopLeftRadius: 16,
                                borderTopRightRadius: 16,
                                heigth: "20%",
                            }}>
                            <Typography variant="subtitle1" fontWeight={700} textAlign="left">{appointment.title}</Typography>
                        </Box>

                        <CardContent
                        sx={{
                            backgroundColor: "#EFEFEF",
                            borderBottomLeftRadius: 16,
                            borderBottomRightRadius: 16,
                        }}
                        >
                        <Typography align="left">Teams meeting at: {appointment.date}</Typography>

                        <Box display="flex" gap={2} mt={5} width="100%">
                            <Button
                                size="large"
                                variant="contained"
                                onClick={handleRejectionClick}
                                sx={{
                                borderRadius: 2,
                                backgroundColor: "#C89B09",
                                flex: 1,
                                }}
                            >
                                Reject
                            </Button>

                            <Button
                                size="large"
                                variant="contained"
                                onClick={handleApproveClick}
                                sx={{
                                borderRadius: 2,
                                backgroundColor: "#009C82",
                                flex: 1,
                                }}
                            >
                                Approve
                            </Button>

                            <Button
                                size="large"
                                variant="contained"
                                onClick={handleJoinClick}
                                sx={{
                                borderRadius: 2,
                                backgroundColor: "#0B61F4",
                                flex: 1,
                                }}
                            >
                                Join
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
            ))}
        </Grid>
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
                    onClick={handleNextClick}
                >
                    Next
                </Button>
                </Box>
        </Box>
    );
}
