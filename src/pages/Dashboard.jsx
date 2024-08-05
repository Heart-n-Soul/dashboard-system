import CampaigneWrapper from "../components/CampaigneWrapper";
import DashboardHeader from "../components/DashboardHeader";
import InsightSectionWrapper from "../components/InsightSectionWrapper";
import NavBar from "../components/NavBar";

function Dashboard() {
  return (
    <div className=" sm:grid sm:grid-cols-[20rem,_1fr] grid-rows-[100px,_1fr] h-screen">
      <div className="row-span-full hidden sm:block border-r border-r-secondary-2  ">
        <NavBar />
      </div>

      <div className="sm:col-start-2  sm:col-span-3 p-5">
        <DashboardHeader />
      </div>
      <div>
        <div className="sm:col-start-2 sm:col-span-3">
          <InsightSectionWrapper />
        </div>
        <div className="sm:col-start-2 sm:col-span-3">
          <CampaigneWrapper />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
