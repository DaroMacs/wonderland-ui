import { Box, Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        fontSize: "1rem",
        "& > *": {
          fontSize: "inherit !important",
        },
      }}
    >
      {iconComponent}
    </Box>
  );

  return (
    <Button
      variant={variant}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{
        textTransform: "none",
        borderRadius: "20px",
        padding: "4px 16px",
        fontSize: "0.875rem",
        fontWeight: 300,
        letterSpacing: "0.02em",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        borderColor: "#a855f7",
        color: "#fff",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 8px 25px #a855f740",
          borderColor: "#ff6b9d",
          backgroundColor: "#ff6b9d10",
        },
        ...props.sx,
      }}
      {...props}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        {children}
        {Icon}
      </Box>
    </Button>
  );
};

export default AnimatedButton;
