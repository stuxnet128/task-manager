import { Navbar } from "./navbar";
import { Statistics } from "./statistics";

export const Dashboard = () => {
  return (
    <div className="w-full flex flex-col ">
      <Navbar />
      <Statistics />
    </div>
  );
};
