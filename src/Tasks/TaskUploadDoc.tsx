import {Box, Button, Typography} from "@mui/material";
import Uploader from "./Uploader.tsx";
import { useNavigate } from "react-router-dom";



const TaskUploadDoc = () => {
    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate('/step/tasks')
    };

    const handlePrevClick = () => {
        navigate('/step/tasks')
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
            color: "black"
        }}>
            <Typography
                variant="h5"
                component="div"
                sx={{pb: 0, textAlign: "left"}}
            >
                Document Upload Validation
            </Typography>
            <Uploader title={'Upload your CV'}/>
            <Uploader title={'Upload your Portfolio'}/>
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "space-between",
                    pt: 5,
                }}
            >
            </Box>
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


};

export default TaskUploadDoc;