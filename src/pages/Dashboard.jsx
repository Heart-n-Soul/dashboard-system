import CampaigneWrapper from "../components/CampaigneWrapper";
import DashboardHeader from "../components/DashboardHeader";
import InsightSectionWrapper from "../components/InsightSectionWrapper";
import NavBar from "../components/NavBar";

function Dashboard() {
  return (
    <div className=" gap-4 sm:grid sm:grid-cols-4 grid-rows-[3rem,30%,1fr] h-screen">
      <div className="row-span-full hidden sm:block border-r border-r-secondary-2  ">
        <NavBar />
      </div>

      <div className="sm:col-start-2 sm:col-span-3 p-5">
        <DashboardHeader />
      </div>
      <div className="sm:col-start-2 sm:col-span-3">
        <InsightSectionWrapper />
      </div>
      <div className="sm:col-start-2 sm:col-span-3">
        <CampaigneWrapper />
      </div>
    </div>
  );
}

export default Dashboard;
