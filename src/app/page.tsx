import { Box, Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2" gutterBottom>
        MUI added
      </Typography>

      <Typography gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </Typography>

      <Button variant="contained">Button</Button>
    </Box>
  );
}
