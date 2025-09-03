import {Box, Button, Typography} from "@mui/material";

const UploadSis = () => {
    return (
        <Box sx={{px: 4}}>
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
                Lorem ipsum dolor sit amet sanctus sed amet eirmod stet duo. Clita sit takimata stet diam eirmod justo
                aliquyam dolore aliquyam dolore sit vel tempor voluptua. Labore sit diam sed ut erat gubergren rebum
                sit. Ipsum no elitr diam erat diam dolor magna lorem clita dolor kasd et vero amet et nibh.
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
    );
};

export default UploadSis;