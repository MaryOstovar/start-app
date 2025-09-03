import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
    answer: Yup.string().required("* Please provide an answer"),
});

const TaskForm = () => {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    return (
        <Box>
            <Typography
                variant="h5"
                component="div"
                sx={{ pb: 0, textAlign: "left" }}
            >
                Form Validation
            </Typography>

            <Formik
                initialValues={{ answer: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log("User answer:", values.answer);
                    setSubmitted(true);
                }}
            >
                {({ errors, touched}) => (
                    <Form>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                                maxWidth: 400,
                                m: "auto",
                                mt: 5,
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{ textAlign: "left", fontWeight: "bold" }}
                            >
                                Question 1:
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ mb: 1, textAlign: "left" }}
                            >
                                What are some of the achievements during your bachelor's or
                                professional career that you are most proud of? Why are these
                                achievements important to you?
                            </Typography>

                            <Field
                                as={TextField}
                                name="answer"
                                label="Your Answer"
                                multiline
                                rows={4}
                                disabled={submitted}
                                error={touched.answer && Boolean(errors.answer)}
                                helperText={touched.answer && errors.answer}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                disabled={submitted}
                                sx={{
                                    backgroundColor: "#009c82",
                                    "&:hover": { backgroundColor: "#007a65" },
                                }}
                            >
                                {submitted ? 'Submitted' : "Submit"}
                            </Button>
                            {submitted && (
                                <Typography
                                    variant="body2"
                                    color="green"
                                    sx={{ mt: 2, fontWeight: "bold", textAlign: "center" }}
                                >
                                 You have successfully submitted the form!
                                </Typography>
                            )}
                        </Box>
                    </Form>
                )}
            </Formik>

            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "space-between",
                    pt: 5,
                }}
            >
                <Button variant="text" sx={{ color: "black" }}>
                    Previous
                </Button>
                <Button variant="contained" sx={{ backgroundColor: "#007a65" }}  onClick={() => navigate("/tasks/upload-doc")}>
                    Next
                </Button>
            </Box>
        </Box>
    );
};

export default TaskForm;