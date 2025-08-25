import { LOGIN } from "@/constants/routes";
import { redirect } from "next/navigation";

const Home = () => {
  redirect(LOGIN);
};

export default Home;
