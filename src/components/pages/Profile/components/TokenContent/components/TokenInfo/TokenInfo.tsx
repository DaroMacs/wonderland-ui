"use client";

import { Info as InfoIcon } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Grow,
  Paper,
  Typography,
  alpha,
} from "@mui/material";
import { useToken } from "@/context/token";

const TokenInfo = () => {
  const { tokenInfo } = useToken();
  const timeout = 1300;

  return (
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
          display: "flex",
          flexDirection: "column",
          "&:hover": {
            borderColor: alpha("#667eea", 0.3),
            boxShadow: `0 20px 40px ${alpha("#667eea", 0.1)}`,
            transform: "translateY(-2px)",
          },
        }}
      >
        <CardContent
          sx={{
            p: { xs: 1.5, md: 2 },
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box display="flex" alignItems="center" mb={2}>
            <InfoIcon sx={{ mr: 1, color: "#667eea", fontSize: "1rem" }} />
            <Typography
              variant="h6"
              fontWeight={400}
              sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
            >
              Token Information
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
              gap: 1,
              flex: 1,
              minHeight: 80,
            }}
          >
            <Grow in timeout={timeout + 100}>
              <Paper
                sx={{
                  p: 1.5,
                  textAlign: "center",
                  bgcolor: alpha("#ffffff", 0.02),
                  border: "1px solid",
                  borderColor: alpha("#ffffff", 0.05),
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  minHeight: 40,
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-1px)",
                    boxShadow: `0 8px 20px ${alpha("#000000", 0.15)}`,
                  },
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    mb: 0.5,
                  }}
                >
                  Name
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  sx={{
                    wordBreak: "break-word",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    fontSize: "0.875rem",
                  }}
                >
                  {tokenInfo?.name || "N/A"}
                </Typography>
              </Paper>
            </Grow>
            <Grow in timeout={timeout + 200}>
              <Paper
                sx={{
                  p: 1.5,
                  textAlign: "center",
                  bgcolor: alpha("#ffffff", 0.02),
                  border: "1px solid",
                  borderColor: alpha("#ffffff", 0.05),
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  minHeight: 40,
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-1px)",
                    boxShadow: `0 8px 20px ${alpha("#000000", 0.15)}`,
                  },
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    mb: 0.5,
                  }}
                >
                  Symbol
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  sx={{
                    wordBreak: "break-word",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    fontSize: "0.875rem",
                  }}
                >
                  {tokenInfo?.symbol || "N/A"}
                </Typography>
              </Paper>
            </Grow>
            <Grow in timeout={timeout + 300}>
              <Paper
                sx={{
                  p: 1.5,
                  textAlign: "center",
                  bgcolor: alpha("#ffffff", 0.02),
                  border: "1px solid",
                  borderColor: alpha("#ffffff", 0.05),
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  minHeight: 40,
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-1px)",
                    boxShadow: `0 8px 20px ${alpha("#000000", 0.15)}`,
                  },
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    mb: 0.5,
                  }}
                >
                  Decimals
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  sx={{
                    wordBreak: "break-word",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    fontSize: "0.875rem",
                  }}
                >
                  {tokenInfo?.decimals?.toString() || "N/A"}
                </Typography>
              </Paper>
            </Grow>
            <Grow in timeout={timeout + 400}>
              <Paper
                sx={{
                  p: 1.5,
                  textAlign: "center",
                  bgcolor: alpha("#ffffff", 0.02),
                  border: "1px solid",
                  borderColor: alpha("#ffffff", 0.05),
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  minHeight: 40,
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-1px)",
                    boxShadow: `0 8px 20px ${alpha("#000000", 0.15)}`,
                  },
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    mb: 0.5,
                  }}
                >
                  Total Supply
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    width: "100%",
                    fontSize: "0.875rem",
                  }}
                >
                  {tokenInfo?.totalSupply || "N/A"}
                </Typography>
              </Paper>
            </Grow>
          </Box>
        </CardContent>
      </Card>
    </Grow>
  );
};

export default TokenInfo;
