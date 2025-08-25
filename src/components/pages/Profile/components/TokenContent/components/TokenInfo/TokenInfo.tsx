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
import useDAIToken from "@/hooks/useDAIToken";

interface TokenInfoProps {
  timeout?: number;
}

const TokenInfo = ({ timeout = 1300 }: TokenInfoProps) => {
  const { tokenInfo } = useDAIToken();

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
          flex: 1,
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
          sx={{ p: 2, flex: 1, display: "flex", flexDirection: "column" }}
        >
          <Box display="flex" alignItems="center" mb={2}>
            <InfoIcon sx={{ mr: 1, color: "#667eea", fontSize: "1rem" }} />
            <Typography variant="h6" fontWeight={400}>
              Token Information
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
              gap: 2,
              flex: 1,
              minHeight: 120,
            }}
          >
            <Grow in timeout={timeout + 100}>
              <Paper
                sx={{
                  p: 2,
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
                  minHeight: 50,
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-1px)",
                    boxShadow: `0 8px 20px ${alpha("#000000", 0.15)}`,
                  },
                }}
              >
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
                  <Box
                    component="span"
                    sx={{ color: "text.secondary", fontSize: "0.75rem" }}
                  >
                    Name:{" "}
                  </Box>
                  {tokenInfo?.name}
                </Typography>
              </Paper>
            </Grow>
            <Grow in timeout={timeout + 200}>
              <Paper
                sx={{
                  p: 2,
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
                  minHeight: 50,
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-1px)",
                    boxShadow: `0 8px 20px ${alpha("#000000", 0.15)}`,
                  },
                }}
              >
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
                  <Box
                    component="span"
                    sx={{ color: "text.secondary", fontSize: "0.75rem" }}
                  >
                    Symbol:{" "}
                  </Box>
                  {tokenInfo?.symbol}
                </Typography>
              </Paper>
            </Grow>
            <Grow in timeout={timeout + 300}>
              <Paper
                sx={{
                  p: 2,
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
                  minHeight: 50,
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-1px)",
                    boxShadow: `0 8px 20px ${alpha("#000000", 0.15)}`,
                  },
                }}
              >
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
                  <Box
                    component="span"
                    sx={{ color: "text.secondary", fontSize: "0.75rem" }}
                  >
                    Decimals:{" "}
                  </Box>
                  {tokenInfo?.decimals.toString()}
                </Typography>
              </Paper>
            </Grow>
            <Grow in timeout={timeout + 400}>
              <Paper
                sx={{
                  p: 2,
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
                  minHeight: 50,
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-1px)",
                    boxShadow: `0 8px 20px ${alpha("#000000", 0.15)}`,
                  },
                }}
              >
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
                  <Box
                    component="span"
                    sx={{ color: "text.secondary", fontSize: "0.75rem" }}
                  >
                    Total Supply:{" "}
                  </Box>
                  {tokenInfo?.totalSupply}
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
