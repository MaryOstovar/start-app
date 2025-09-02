import {Box, Button, TextField, Typography} from "@mui/material";
import React, {useState} from "react";

const TaskForm = () => {
    const [answer, setAnswer] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("User answer:", answer);
        setAnswer("");
    };
    return (
        <Box>
            <Typography variant="h5" gutterBottom component="div" sx={{pb: 0, textAlign: "left"}}>
                Form Validation
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    maxWidth: 400,
                    m: "auto",
                    mt: 5,
                }}
            >
                <Typography variant="h6" sx={{textAlign: "left", fontWeight: 'bold'}}>Question 1:</Typography>
                <Typography variant="body1" sx={{mb: 1, textAlign: "left"}}>
                    What are some of the achievements during your bachelor's or professional career that you are most
                    proud of? Why are these achievements important to you?
                </Typography>

                <TextField
                    label="Your Answer"
                    multiline
                    rows={4}
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />

                <Button
                    type="submit"
                    variant="contained"
                    sx={{ backgroundColor: "#009c82", "&:hover": { backgroundColor: "#007a65" } }}
                >
                    Submit
                </Button>
            </Box>
            <Box sx={{display: "flex", gap: 2, justifyContent: "space-between", pt: 5, }}>
                <Button variant="text" sx={{color: "black"}}>Previous</Button>
                <Button variant="contained" sx={{backgroundColor: "#007a65"}}>Next</Button>
            </Box>
        </Box>
    )
        ;
};

export default TaskForm;