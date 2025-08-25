import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
  Grow,
  alpha,
  Modal,
  Backdrop,
  Fade,
  IconButton,
} from "@mui/material";
import {
  Search as SearchIcon,
  Close as CloseIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import { Address, isAddress } from "viem";
import useDAIToken from "@/hooks/useDAIToken";
import { useAccount } from "wagmi";
import AnimatedButton from "@/components/ui/AnimatedButton";

interface AllowanceCheckerProps {
  timeout?: number;
}

const AllowanceChecker = ({ timeout = 1800 }: AllowanceCheckerProps) => {
  const { address: userAddress } = useAccount();
  const { checkAllowance, getFormattedAllowance } = useDAIToken();
  const [ownerAddress, setOwnerAddress] = useState("");
  const [spenderAddress, setSpenderAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [lastChecked, setLastChecked] = useState<{
    owner: Address;
    spender: Address;
  } | null>(null);

  const handleCheckAllowance = async () => {
    setError(null);

    // Validation
    if (!ownerAddress || !spenderAddress) {
      setError("Please enter both owner and spender addresses");
      return;
    }

    if (!isAddress(ownerAddress)) {
      setError("Invalid owner address");
      return;
    }

    if (!isAddress(spenderAddress)) {
      setError("Invalid spender address");
      return;
    }

    setIsLoading(true);

    try {
      await checkAllowance(ownerAddress as Address, spenderAddress as Address);
      setLastChecked({
        owner: ownerAddress as Address,
        spender: spenderAddress as Address,
      });
      setModalOpen(true);
    } catch (err) {
      setError("Failed to check allowance");
      console.error("Allowance check error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUseMyAddress = () => {
    if (userAddress) {
      setOwnerAddress(userAddress);
    }
  };

  const formatAddress = (address: string): string => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const component = (
    <Grow in timeout={timeout}>
      <Card
        sx={{
          bgcolor: alpha("#ffffff", 0.02),
          backdropFilter: "blur(20px)",
          border: "1px solid",
          borderColor: alpha("#ffffff", 0.1),
          borderRadius: 3,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          height: "100%",
          "&:hover": {
            borderColor: alpha("#38b2ac", 0.3),
            boxShadow: `0 20px 40px ${alpha("#38b2ac", 0.1)}`,
            transform: "translateY(-2px)",
          },
        }}
      >
        <CardContent sx={{ p: 2 }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
          >
            <Box display="flex" alignItems="center">
              <SearchIcon sx={{ mr: 1, color: "#38b2ac", fontSize: "1rem" }} />
              <Typography variant="h6" fontWeight={400}>
                Check Allowance
              </Typography>
            </Box>
            {userAddress && (
              <Button
                size="small"
                onClick={handleUseMyAddress}
                sx={{
                  textTransform: "none",
                  fontSize: "0.75rem",
                  color: "#38b2ac",
                  minWidth: "auto",
                  px: 1,
                }}
              >
                Use My Address
              </Button>
            )}
          </Box>

          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleCheckAllowance();
            }}
          >
            <TextField
              fullWidth
              label="Owner Address"
              placeholder="0x..."
              value={ownerAddress}
              onChange={(e) => setOwnerAddress(e.target.value)}
              required
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 6,
                },
              }}
              InputProps={{
                style: { fontFamily: "monospace", fontSize: "0.875rem" },
              }}
            />

            <TextField
              fullWidth
              label="Spender Address"
              placeholder="0x..."
              value={spenderAddress}
              onChange={(e) => setSpenderAddress(e.target.value)}
              required
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 6,
                },
              }}
              InputProps={{
                style: { fontFamily: "monospace", fontSize: "0.875rem" },
              }}
            />

            <AnimatedButton
              type="submit"
              fullWidth
              variant="outlined"
              iconComponent={
                isLoading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  <SearchIcon />
                )
              }
              disabled={isLoading}
            >
              {isLoading ? "Checking..." : "Check Allowance"}
            </AnimatedButton>
          </Box>

          {error && (
            <Alert
              severity="error"
              sx={{
                mt: 2,
                borderRadius: 2,
                bgcolor: alpha("#ff5722", 0.1),
                border: `1px solid ${alpha("#ff5722", 0.2)}`,
              }}
            >
              {error}
            </Alert>
          )}
        </CardContent>
      </Card>
    </Grow>
  );

  const modal = (
    <Modal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={modalOpen}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: 400 },
            bgcolor: alpha("#000000", 0.9),
            backdropFilter: "blur(20px)",
            border: `1px solid ${alpha("#38b2ac", 0.3)}`,
            borderRadius: 3,
            boxShadow: `0 20px 40px ${alpha("#38b2ac", 0.2)}`,
            p: 3,
            outline: "none",
          }}
        >
          {/* Header */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={3}
          >
            <Box display="flex" alignItems="center">
              <CheckCircleIcon
                sx={{ mr: 1, color: "#38b2ac", fontSize: "1.2rem" }}
              />
              <Typography variant="h6" fontWeight={500} color="#38b2ac">
                Allowance Result
              </Typography>
            </Box>
            <IconButton
              onClick={() => setModalOpen(false)}
              sx={{
                color: "#fff",
                "&:hover": {
                  bgcolor: alpha("#fff", 0.1),
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Content */}
          {lastChecked && (
            <Box>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                <strong>Owner:</strong> {formatAddress(lastChecked.owner)}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                sx={{ mb: 2 }}
              >
                <strong>Spender:</strong> {formatAddress(lastChecked.spender)}
              </Typography>

              <Box
                sx={{
                  p: 2,
                  bgcolor: alpha("#38b2ac", 0.1),
                  border: `1px solid ${alpha("#38b2ac", 0.3)}`,
                  borderRadius: 2,
                  textAlign: "center",
                }}
              >
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Approved Amount
                </Typography>
                <Typography variant="h4" color="#38b2ac" fontWeight={600}>
                  {getFormattedAllowance(
                    lastChecked.owner,
                    lastChecked.spender,
                  )}
                </Typography>
                <Typography variant="body2" color="#38b2ac" sx={{ mt: 0.5 }}>
                  tokens
                </Typography>
              </Box>

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mt: 2, display: "block", textAlign: "center" }}
              >
                This is the amount the spender is allowed to transfer on behalf
                of the owner.
              </Typography>
            </Box>
          )}
        </Box>
      </Fade>
    </Modal>
  );

  return (
    <>
      {component}
      {modal}
    </>
  );
};

export default AllowanceChecker;
