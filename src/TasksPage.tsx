// TasksPage.tsx — MUI + arrow functions, chip no longer overlays text
import * as React from "react";
import {
    Box,
    Button,
    Chip,
    Divider,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";


const Card = styled(Paper)(({ theme }) => ({
    position: "relative",
    borderRadius: 16,
    padding: theme.spacing(2),
    margin: theme.spacing(2.5),
    minWidth: "80%",
    boxShadow:
        "0px 2px 2px rgba(0,0,0,0.02), 0px 8px 20px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "transform 120ms ease, box-shadow 120ms ease",
    "&:hover": {
        transform: "translateY(-1px)",
        boxShadow:
            "0px 3px 3px rgba(0,0,0,0.04), 0px 12px 28px rgba(0,0,0,0.12)",
    },
    outline: "none",
}));

const CardGrid = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr auto",
    columnGap: theme.spacing(2),
    alignItems: "center",
}));

const ContentCol = styled(Box)(() => ({
    minWidth: 0,
}));

const SideCol = styled("div")(({ theme }) => ({
    display: "grid",
    alignSelf: "stretch",
    alignItems: "center",
    paddingRight: theme.spacing(0.5),
}));

const CardTitleRow = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
}));

const StatusChip = styled(Chip)(({ theme }) => ({
    fontWeight: 700,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.success.main,
    "& .MuiChip-label": { paddingInline: theme.spacing(1.25) },
    boxShadow: "0 6px 14px rgba(76, 175, 80, 0.35)",
    textTransform: "uppercase",
}));

;

/* ---------------------------------- copy ---------------------------------- */
const strings = {
    header: { title: "Tasks" },
    assessment: {
        title: "Assessment",
        status: "Submitted",
        description:
            "Click the titlebar to open the voluntary questionnaire. The questions are intended to prepare for the intake interview.",
    },
    homeAssignments: {
        title: "Home assignments",
        status: "Finished",
        descriptionTop: "Click the titlebar to upload the following:",
        bullets: [
            "Your CV;",
            "Examples of your own work (e.g. bachelor’s thesis, products from projects, link to Github repositories).",
        ],
        important:
            "Please wait untill your upload is finished and you see the files added to the list before you click “Finish step”.",
    },
};

/* --------------------------------- page ----------------------------------- */
const TasksPage: React.FC = () => {
    const navigate = useNavigate();

        const handleNextClick = () => {
        navigate('/step/upload')
    };

    const handlePrevClick = () => {
        navigate('/step/appointments')
    };

    const router = React.useMemo(
        () => ({ navigate: (to: string | number) => navigate(to as any) }),
        [navigate]
    );

    const openAssessment = () => router.navigate("/step/tasks/assignments");
    const openHomeAssignments = () => router.navigate("/step/tasks/attachments");

    return (
        <Box p="2" sx={{
            minHeight: "100vh",
            minWidth: "100vw",
            bgcolor: (t) =>
                t.palette.mode === "light" ? "grey.100" : "background.default",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <Stack spacing={1} sx={{ mt: 2, mb: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, color: 'black'  }}>
                    {strings.header.title}
                </Typography>
            </Stack>

            {/* Assessment */}
            <Card
                role="button"
                tabIndex={0}
                onClick={openAssessment}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openAssessment()}
            >
                <CardGrid>
                    <ContentCol>
                        <CardTitleRow>
                            <Typography variant="h6" sx={{ fontWeight: 700}}>
                                {strings.assessment.title}
                            </Typography>
                        </CardTitleRow>

                        <Box>
                            <Typography variant="body2" color="text.secondary">
                                {strings.assessment.description}
                            </Typography>
                        </Box>
                    </ContentCol>

                    <SideCol>
                        <StatusChip label={strings.assessment.status} />
                    </SideCol>
                </CardGrid>
            </Card>

            {/* Home assignments */}
            <Card
                role="button"
                tabIndex={0}
                onClick={openHomeAssignments}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openHomeAssignments()}
            >
                <CardGrid>
                    <ContentCol>
                        <CardTitleRow>
                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                {strings.homeAssignments.title}
                            </Typography>
                        </CardTitleRow>

                        <Box>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                {strings.homeAssignments.descriptionTop}
                            </Typography>

                            <ul style={{ margin: 0, paddingInlineStart: 18 }}>
                                {strings.homeAssignments.bullets.map((b, i) => (
                                    <li key={i}>
                                        <Typography variant="body2" color="text.secondary">
                                            {b}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>

                            <Divider sx={{ my: 1.5 }} />

                            <Typography variant="body2" color="text.secondary">
                                <strong>Important:</strong> {strings.homeAssignments.important}
                            </Typography>
                        </Box>
                    </ContentCol>

                    <SideCol>
                        <StatusChip label={strings.homeAssignments.status} />
                    </SideCol>
                </CardGrid>
            </Card>
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

export default TasksPage;
