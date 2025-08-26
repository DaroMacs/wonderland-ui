"use client";

import { Warning as WarningIcon } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
} from "@mui/material";

interface ErrorModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const ErrorModal = ({ open, onClose, title, message }: ErrorModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: "rgba(0, 0, 0, 0.9)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: 3,
        },
      }}
    >
      <DialogTitle sx={{ pb: 1 }}>
        <Box display="flex" alignItems="center">
          <WarningIcon sx={{ mr: 1, color: "#f56565", fontSize: "1.5rem" }} />
          <Typography variant="h6" color="white">
            {title}
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Typography color="rgba(255, 255, 255, 0.8)" sx={{ mb: 2 }}>
          {message}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ p: 2, pt: 0 }}>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            bgcolor: "#38b2ac",
            "&:hover": {
              bgcolor: "#319795",
            },
          }}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorModal;
