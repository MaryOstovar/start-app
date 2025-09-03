import {Box, Button, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";

const UploadSis = () => {
            const navigate = useNavigate();

    const handleNextClick = () => {
        navigate('/step/tasks')
    };

    const handlePrevClick = () => {
        navigate('/steps')
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
        <Box padding={2}>
        <Typography
                variant="h5"
                component="div"
                sx={{pb: 0, textAlign: "left", fontWeight: "bold", mb: 2}}>

                upload documents on sis :
            </Typography>
            <Typography
                variant="h5"
                component="div"
                sx={{pb: 0, textAlign: "left", fontSize: 16 }}
            >
                As a first step you need to upload some legal documents on the Saxion SIS website, please follow the link below.
            </Typography>
            <Button
                component="a"
                href="https://sis.saxion.nl/"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{
                    width: "100%",
                    mt: 2,
                    backgroundColor: "#009c82",
                    color: "white",
                    "&:hover": {
                        backgroundColor: "#007a65",
                        color: "white",
                        textDecoration: "none",
                    },
                }}
            >
                Link to SIS
            </Button>
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

export default UploadSis;