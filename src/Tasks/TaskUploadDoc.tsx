import {Box, Button, Typography} from "@mui/material";
import Uploader from "./Uploader.tsx";
import { useNavigate } from "react-router-dom";



const TaskUploadDoc = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{p:5}}>
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
                <Button variant="text" sx={{ color: "black" }} onClick={() => navigate("/tasks/form")}>
                    Previous
                </Button>
                <Button variant="contained" sx={{ backgroundColor: "#007a65" }}  onClick={() => navigate("/")}>
                    Next
                </Button>
            </Box>

        </Box>
    );


};

export default TaskUploadDoc;