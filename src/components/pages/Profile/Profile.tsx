import { Box } from "@mui/material";
import { FloatingNavbar } from "@/components/elements/FloatingNavbar";
import TokenContent from "@/components/pages/Profile/components/TokenContent";

const Profile = () => (
  <Box>
    <FloatingNavbar />

    <Box
      sx={{
        marginTop: "100px",
      }}
    >
      <TokenContent />
    </Box>
  </Box>
);

export default Profile;
