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
import {
  dialogPaperStyles,
  dialogTitleStyles,
  warningIconStyles,
  messageStyles,
  dialogActionsStyles,
  okButtonStyles,
} from "./styles";

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
        sx: dialogPaperStyles,
      }}
    >
      <DialogTitle sx={dialogTitleStyles}>
        <Box display="flex" alignItems="center">
          <WarningIcon sx={warningIconStyles} />
          <Typography variant="h6" color="white">
            {title}
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Typography color="rgba(255, 255, 255, 0.8)" sx={messageStyles}>
          {message}
        </Typography>
      </DialogContent>
      <DialogActions sx={dialogActionsStyles}>
        <Button onClick={onClose} variant="contained" sx={okButtonStyles}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorModal;
