import { useState, useEffect } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    Typography,
    Box,
    Grid,
    CardActionArea,
    Dialog,
    DialogTitle,
    DialogContent,
} from "@mui/material";

type Course = {
    title: string;
    date: string;
    type: string;
    location: string;
    academy: string;
    form: string;
    status: string;
    statusColor?: string;
    backgroundColor?: string;
};

const courses: Course[] = [
    {
        title: "ICT: Software Engineering",
        date: "01-09-2025",
        type: "Fulltime",
        location: "Deventer",
        academy: "Creative Technology Academy",
        form: "Master",
        status: "In-progress",
        backgroundColor: "#f5f5f5",
    },
    {
        title: "Creative Media and Game Technologies",
        date: "01-09-2025",
        type: "Fulltime",
        location: "Enschede",
        academy: "Creative Technology Academy",
        form: "Bachelor",
        status: "Accepted",
        backgroundColor: "#a5d6d9",
    },
];

export default function Courses() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    const handleCardClick = (course: Course) => {
        alert(`TODO: implement the naviagtion to the steps page for course: ${course.title}`);
    };

    return (
        <Box p={2}>
            <Dialog open={open} onClose={handleClose}
            sx={{
                "& .MuiDialog-paper": {
                    borderRadius: 4,
                    backgroundColor: "#009C82",
                    color: "#ffffff"
                },
            }}>
                <DialogTitle>Welcome</DialogTitle>
                <DialogContent>
                    <Typography align="left" gutterBottom>You are logged in to the Saxion intake application "Start".</Typography>
                    <Typography align="left" gutterBottom>You have shown interest and/or applied for a programme at Saxion. To prepare you for your (possible) start, an intake activity follows.</Typography>
                    <Typography align="left" gutterBottom>In this app you arrange everything related to this, so check regularly for status updates. You will receive information and notifications by e-mail.</Typography>
                    <Box display="flex" justifyContent="flex-end" mt={2}>
                        <Typography onClick={handleClose} sx={{cursor: 'pointer', display: 'inline-block', }}>
                            ok
                        </Typography>
                    </Box>
                </DialogContent>
            </Dialog>

            <Typography gutterBottom>courses applied:</Typography>
            <Grid container spacing={2} direction="column">
                {courses.map((course, idx) => (
                    <Grid key={idx}>
                        <Card sx={{borderRadius: 4, backgroundColor: course.backgroundColor,}}>
                            <CardActionArea onClick={() => handleCardClick(course)}>
                                <CardHeader
                                    title={course.title}
                                    slotProps={{
                                        title: {
                                        variant: "subtitle1",
                                        sx: { fontWeight: 700, textAlign: "left" },
                                        },
                                    }}
                                    sx={{ pb: 0 }}
                                />
                                <CardContent>
                                    <Typography align="left">Date: {course.date}</Typography>
                                    <Typography align="left">Type: {course.type}</Typography>
                                    <Typography align="left">Location: {course.location}</Typography>
                                    <Typography align="left">Academy: {course.academy}</Typography>
                                    <Typography align="left">Form: {course.form}</Typography>
                                    <Typography align="left" sx={{ mt: 1, fontStyle: "italic" }}>Status: {course.status}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
