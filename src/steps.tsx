import {
    Typography,
    Container,
    Button,
    Stack,
    Box,
    Card,
    CardContent,
    Chip,
} from "@mui/material";
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
    { id: "upload", title: "Upload documents", description: "Upload the necessary documents", status: "completed" },
    { id: "tasks", title: "Tasks", description: "Complete the necessary tasks", status: "completed"},
    { id: "appointments", title: "Appointments", description: "Interviews with the teachers", status: "todo" },
    { id: "results", title: "Results", description: "Verdict for your enrollment", status: "rejected" },
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
        <Box p="2" sx={{
            minHeight: "100vh",
            minWidth: "100vw",
            bgcolor: (t) =>
                t.palette.mode === "light" ? "grey.100" : "background.default",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>

            <Container maxWidth="sm" sx={{ flex: 1, pt:1, marginBottom: 4  }}>
                <Stack spacing={1}>
                    <Box>
                        <Typography variant="h5" sx={{ color: "black" }}>
                            ICT: Software Engineering
                        </Typography>
                        <Typography color="text.secondary">
                            01-09-2025 | Voltijd | Deventer
                        </Typography>
                    </Box>

                    {steps.map((step) => (
                        <StepCard key={step.id} {...step} onClick={handleCardClick} />
                    ))}

                </Stack>
            </Container>

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
                </Box>
        </Box>
    );
}
