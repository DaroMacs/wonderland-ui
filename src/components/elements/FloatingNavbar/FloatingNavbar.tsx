"use client";

import {
  Box,
  Chip,
  FormControl,
  Select,
  MenuItem,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LOGIN } from "@/constants/routes";
import { TokenType, useToken } from "@/context/token";
import { useWeb3 } from "@/context/web3";

export function FloatingNavbar() {
  const { address, disconnect } = useWeb3();
  const { activeToken, setActiveToken } = useToken();
  const router = useRouter();

  const handleLogout = () => {
    disconnect();
    router.push(LOGIN);
  };

  const handleTokenChange = (event: SelectChangeEvent<string>) => {
    setActiveToken(event.target.value as TokenType);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: "2rem",
        left: "1rem",
        right: "1rem",
        zIndex: 1000,
        maxWidth: "1200px",
        margin: "0 auto",
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "30px",
        padding: "0 1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/logo-white.png"
          alt="Logo"
          width={150}
          height={50}
          style={{
            objectFit: "contain",
          }}
        />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: "0.875rem",
            fontWeight: 500,
          }}
        >
          Contract:
        </Typography>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <Select
            value={activeToken}
            onChange={handleTokenChange}
            sx={{
              color: "#06b6d4",
              fontSize: "0.875rem",
              fontWeight: 500,
              height: "32px",
              "& .MuiOutlinedInput-root": {
                height: "32px",
                borderRadius: "16px",
                background: "rgba(6, 182, 212, 0.1)",
                backdropFilter: "blur(10px)",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(6, 182, 212, 0.6)",
                borderRadius: "16px",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#06b6d4",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#06b6d4",
              },
              "& .MuiSelect-icon": {
                color: "#06b6d4",
              },
              "& .MuiSelect-select": {
                padding: "4px 12px",
                display: "flex",
                alignItems: "center",
                height: "24px",
              },
            }}
          >
            <MenuItem value="dai">DAI</MenuItem>
            <MenuItem value="usdc">USDC</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {address && (
        <Chip
          label={`${address.slice(0, 6)}...${address.slice(-4)}`}
          variant="outlined"
          onClick={handleLogout}
          sx={{
            borderColor: "rgba(6, 182, 212, 0.6)",
            color: "#06b6d4",
            fontSize: "0.875rem",
            background: "rgba(6, 182, 212, 0.1)",
            backdropFilter: "blur(10px)",
            cursor: "pointer",
            "& .MuiChip-label": {
              fontFamily: "monospace",
              fontWeight: 500,
            },
            "&:hover": {
              borderColor: "#06b6d4",
              background: "rgba(6, 182, 212, 0.2)",
              transform: "translateY(-1px)",
              boxShadow: "0 4px 12px rgba(6, 182, 212, 0.3)",
            },
            transition: "all 0.2s ease-in-out",
          }}
        />
      )}
    </Box>
  );
}
