"use client";

import { Chip } from "@mui/material";
import { chipStyles } from "./styles";

interface AddressChipProps {
  address: string;
  onClick: () => void;
}

const AddressChip = ({ address, onClick }: AddressChipProps) => {
  return (
    <Chip
      label={`${address.slice(0, 6)}...${address.slice(-4)}`}
      variant="outlined"
      onClick={onClick}
      sx={chipStyles}
    />
  );
};

export default AddressChip;
