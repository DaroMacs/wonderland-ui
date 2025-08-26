"use client";

import { Info as InfoIcon } from "@mui/icons-material";
import { Box, Card, CardContent, Grow, Paper, Typography } from "@mui/material";
import {
  tokenInfoCardStyles,
  tokenInfoCardContentStyles,
  tokenInfoHeaderStyles,
  tokenInfoIconStyles,
  tokenInfoGridStyles,
  tokenInfoPaperStyles,
  tokenInfoLabelStyles,
  tokenInfoValueStyles,
  tokenInfoValueFullWidthStyles,
} from "./styles";
import { useToken } from "@/context/token";

const TokenInfo = () => {
  const { tokenInfo } = useToken();
  const timeout = 1300;

  return (
    <Grow in timeout={timeout}>
      <Card sx={tokenInfoCardStyles}>
        <CardContent sx={tokenInfoCardContentStyles}>
          <Box display="flex" alignItems="center" mb={2}>
            <InfoIcon sx={tokenInfoIconStyles} />
            <Typography
              variant="h6"
              fontWeight={400}
              sx={tokenInfoHeaderStyles}
            >
              Token Information
            </Typography>
          </Box>

          <Box sx={tokenInfoGridStyles}>
            <Grow in timeout={timeout + 100}>
              <Paper sx={tokenInfoPaperStyles}>
                <Typography variant="caption" sx={tokenInfoLabelStyles}>
                  Name
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  sx={tokenInfoValueStyles}
                >
                  {tokenInfo?.name || "N/A"}
                </Typography>
              </Paper>
            </Grow>
            <Grow in timeout={timeout + 200}>
              <Paper sx={tokenInfoPaperStyles}>
                <Typography variant="caption" sx={tokenInfoLabelStyles}>
                  Symbol
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  sx={tokenInfoValueStyles}
                >
                  {tokenInfo?.symbol || "N/A"}
                </Typography>
              </Paper>
            </Grow>
            <Grow in timeout={timeout + 300}>
              <Paper sx={tokenInfoPaperStyles}>
                <Typography variant="caption" sx={tokenInfoLabelStyles}>
                  Decimals
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  sx={tokenInfoValueStyles}
                >
                  {tokenInfo?.decimals?.toString() || "N/A"}
                </Typography>
              </Paper>
            </Grow>
            <Grow in timeout={timeout + 400}>
              <Paper sx={tokenInfoPaperStyles}>
                <Typography variant="caption" sx={tokenInfoLabelStyles}>
                  Total Supply
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  sx={tokenInfoValueFullWidthStyles}
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
