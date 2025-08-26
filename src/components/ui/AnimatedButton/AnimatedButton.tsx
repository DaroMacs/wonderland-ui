import { ReactNode } from "react";
import { Box, Button, ButtonProps } from "@mui/material";
import {
  iconContainerStyles,
  buttonStyles,
  contentContainerStyles,
} from "./styles";

interface AnimatedButtonProps extends Omit<ButtonProps, "children"> {
  children?: ReactNode;
  iconComponent?: ReactNode;
  onClick?: () => void;
}

const AnimatedButton = ({
  children = "Click Me",
  iconComponent,
  onClick,
  fullWidth = false,
  variant = "outlined",
  ...props
}: AnimatedButtonProps) => {
  const Icon = iconComponent && (
    <Box sx={iconContainerStyles}>{iconComponent}</Box>
  );

  return (
    <Button
      variant={variant}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{
        ...buttonStyles,
        ...props.sx,
      }}
      {...props}
    >
      <Box sx={contentContainerStyles}>
        {children}
        {Icon}
      </Box>
    </Button>
  );
};

export default AnimatedButton;
