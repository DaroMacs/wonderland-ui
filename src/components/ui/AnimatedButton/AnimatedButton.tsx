import { RocketLaunchOutlined as RocketIcon } from "@mui/icons-material";
import { Box, Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

interface AnimatedButtonProps extends Omit<ButtonProps, "children"> {
  children?: ReactNode;
  showIcon?: boolean;
  iconComponent?: ReactNode;
  onClick?: () => void;
}

const AnimatedButton = ({
  children = "Click Me",
  showIcon = true,
  iconComponent,
  onClick,
  fullWidth = true,
  variant = "outlined",
  ...props
}: AnimatedButtonProps) => {
  const Icon = iconComponent || (
    <RocketIcon
      className="rocket-icon"
      sx={{
        transition: "color 0.2s",
      }}
    />
  );

  return (
    <Button
      variant={variant}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{
        textTransform: "none",
        borderRadius: "20px",
        padding: "10px 24px",
        fontSize: "1rem",
        fontWeight: 300,
        letterSpacing: "0.02em",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        borderColor: "#a855f7",
        color: "#a855f7",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 8px 25px #a855f740",
          borderColor: "#ff6b9d",
          color: "#ff6b9d",
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
        {showIcon && Icon}
      </Box>
    </Button>
  );
};

export default AnimatedButton;
