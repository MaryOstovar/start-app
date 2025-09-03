import { Box, Typography, Button, List, ListItem, ListItemText } from "@mui/material";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import React, { useState, useRef } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

type UploaderProps = {
    title: string;
};

const validationSchema = Yup.object({
    files: Yup.array().min(1, "Please upload at least one file").required(),
});

const Uploader: React.FC<UploaderProps> = ({ title }) => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFiles = (files: FileList) => {
        const newFiles = Array.from(files);
        setUploadedFiles((prev) => [...prev, ...newFiles]);
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            handleFiles(event.dataTransfer.files);
            event.dataTransfer.clearData();
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <Formik
            initialValues={{ files: [] as File[] }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                console.log("Submitted files:", uploadedFiles, values);
                setSubmitting(true); // disables submit button
            }}
        >
            {({ handleSubmit, isSubmitting, setFieldValue, errors, touched }) => (
                <Form onSubmit={handleSubmit}>
                    <Box sx={{ mt: 4 }}>
                        <Typography sx={{ textAlign: 'left' }}>{title}</Typography>

                        <input
                            type="file"
                            multiple
                            style={{ display: "none" }}
                            ref={fileInputRef}
                            onChange={(e) => {
                                if (e.target.files) {
                                    handleFiles(e.target.files);
                                    setFieldValue("files", [...uploadedFiles, ...Array.from(e.target.files)]);
                                }
                            }}
                        />

                        {/* Drag and Drop Box */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 2,
                                border: "dashed",
                                borderColor: "lightgray",
                                py: 5,
                                cursor: isSubmitting ? "not-allowed" : "pointer",
                                backgroundColor: isSubmitting ? "#f0f0f0" : "transparent"
                            }}
                            onClick={isSubmitting ? undefined : handleClick}
                            onDrop={isSubmitting ? undefined : handleDrop}
                            onDragOver={handleDragOver}
                        >
                            <UploadFileIcon sx={{ fontSize: 40 }} />
                            <Typography sx={{ textAlign: "center" }}>Link or drag and drop</Typography>
                            <Typography sx={{ textAlign: "center" }}>SVG, PNG, JPG or GIF (max. 3MB)</Typography>
                        </Box>

                        {/* Validation Error */}
                        {touched.files && errors.files && (
                            <Typography color="error" sx={{ mt: 1 }}>
                                {errors.files as string}
                            </Typography>
                        )}

                        {/* Uploaded Files List */}
                        {uploadedFiles.length > 0 && (
                            <List sx={{ mt: 2 }}>
                                {uploadedFiles.map((file, index) => (
                                    <ListItem key={index} dense>
                                        <ListItemText primary={file.name} />
                                    </ListItem>
                                ))}
                            </List>
                        )}

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 2, backgroundColor: "#007a65", width: "100%" }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitted" : "Submit Files"}
                        </Button>
                    </Box>
                </Form>
            )}
        </Formik>
    );
};

export default Uploader;
