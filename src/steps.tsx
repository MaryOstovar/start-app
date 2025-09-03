import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Container,
    Button,
    Stack,
    Box,
    Card,
    CardContent,
    Chip,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Logo from "/logo.png"
import {useNavigate} from "react-router-dom";


type StepStatus = "completed" | "todo" | "rejected" | "in_progress";

interface StepItem {
    id: string;
    title: string;
    description?: string;
    status: StepStatus;
    highlighted?: boolean;
}

const steps: StepItem[] = [
    { id: "upload", title: "Upload documents", description: "Lorem...", status: "completed" },
    { id: "tasks", title: "Tasks", description: "Lorem...", status: "completed", highlighted: true },
    { id: "appointments", title: "Appointments", description: "Lorem...", status: "todo" },
    { id: "results", title: "Results", description: "Lorem...", status: "rejected" },
];

interface StepItem {
    id: string;
    title: string;
    description?: string;
    status: StepStatus;
    highlighted?: boolean;
}


const STATUS_CONFIG: Record<
    StepStatus,
    { label: string; color: "success" | "error" | "warning" | "default"; variant: "filled" | "outlined" }
> = {
    completed: { label: "COMPLETED", color: "success", variant: "filled" },
    todo: { label: "TO BE DONE", color: "default", variant: "outlined" },
    rejected: { label: "REJECTED", color: "error", variant: "filled" },
    in_progress: { label: "IN PROGRESS", color: "warning", variant: "filled" },
};


function StepCard(props: StepItem & { onClick?: (id: string) => void }) {
    const { id, title, description, status, highlighted, onClick } = props;
    const cfg = STATUS_CONFIG[status];

    return (
        <Card
            onClick={onClick ? () => onClick(id) : undefined}
            elevation={highlighted ? 6 : 2}
            sx={{
                borderRadius: 3,
                border: highlighted ? 3 : 1,
                borderColor: highlighted ? "grey.400" : "divider",
                cursor: onClick ? "pointer" : "default",
            }}
        >
            <CardContent>
                <Stack direction="row" alignItems="flex-start" spacing={1}>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" component="h3" gutterBottom>
                            {title}
                        </Typography>
                        {description && (
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                        )}
                    </Box>
                    <Chip
                        label={cfg.label}
                        color={cfg.color}
                        variant={cfg.variant}
                        size="small"
                        sx={{ alignSelf: "center" }}
                    />
                </Stack>
            </CardContent>
        </Card>
    );
}


export default function StepsPage() {
    const navigate = useNavigate()

    const handleCardClick = (id: string) => {
        navigate(`/step/${id}`);
    };

    const allDone = steps.every((s) => s.status === "completed");

    return (
        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: (t) =>
                    t.palette.mode === "light" ? "grey.100" : "background.default",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <AppBar position="static" color="inherit" elevation={0}>

                <Toolbar >
                    <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
                        <IconButton edge="start" aria-label="home" sx={{left: "auto"}}>
                            <HomeRoundedIcon />
                        </IconButton>
                        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
                            <img src={Logo} width="60px"/>
                        </Box>
                        <Box sx={{ width: 48 }} />
                    </Box>
                </Toolbar>
            </AppBar>

            <Container maxWidth="sm" sx={{ flex: 1, pt:1 }}>
                <Stack spacing={1}>
                    <Box>
                        <Typography variant="h4" >
                            lorem ipsum
                        </Typography>
                        <Typography color="text.secondary">
                            Lorem ipsum dolor sit amet sanctus sed amet eirmod stet duo.
                        </Typography>
                    </Box>

                    {steps.map((step) => (
                        <StepCard key={step.id} {...step} onClick={handleCardClick} />
                    ))}

                </Stack>
            </Container>


            <Container maxWidth="sm" sx={{ pb: 1 }}>
                <Button
                    fullWidth
                    size="large"
                    variant="contained"
                    color="success"
                    disabled={!allDone}
                    onClick={() => console.log("Continue")}
                    sx={{ borderRadius: 2 , mt: 1}}
                >
                    CONTINUE
                </Button>
            </Container>
        </Box>
    );
}
