"use client";

import {
  Box,
  FormControl,
  Select,
  MenuItem,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import Image from "next/image";
import {
  navbarContainerStyles,
  logoContainerStyles,
  controlsContainerStyles,
  contractLabelStyles,
  formControlStyles,
  selectStyles,
  addressChipContainerStyles,
} from "./styles";
import AddressChip from "@/components/ui/AddressChip";
import { TokenType, useToken } from "@/context/token";
import { useWeb3 } from "@/context/web3";

const FloatingNavbar = () => {
  const { address, handleLogout } = useWeb3();
  const { activeToken, setActiveToken } = useToken();

  const handleTokenChange = (event: SelectChangeEvent<string>) => {
    setActiveToken(event.target.value as TokenType);
  };

  return (
    <Box sx={navbarContainerStyles}>
      <Box sx={logoContainerStyles}>
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

      <Box sx={controlsContainerStyles}>
        <Typography variant="body2" sx={contractLabelStyles}>
          Contract:
        </Typography>
        <FormControl size="small" sx={formControlStyles}>
          <Select
            value={activeToken}
            onChange={handleTokenChange}
            sx={selectStyles}
          >
            <MenuItem value="dai">DAI</MenuItem>
            <MenuItem value="usdc">USDC</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {address && (
        <Box sx={addressChipContainerStyles}>
          <AddressChip address={address} onClick={handleLogout} />
        </Box>
      )}
    </Box>
  );
};

export default FloatingNavbar;
