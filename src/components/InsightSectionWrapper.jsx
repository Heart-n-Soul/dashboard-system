import { CiFilter } from "react-icons/ci";
import InsightCard from "./InsightCard";

const InsightSectionWrapper = () => {
  return (
    <section className="font-poppins p-5  h-fit">
      <div>
        <h2 className="text-3xl font-bold mb-2">Your total revenue</h2>
        <div className="sm:flex  justify-between mb-3">
          <h2 className="bg-linear-grad bg-clip-text text-transparent font-bold text-3xl mb-3 sm:mb-0 w-fit">
            GH₵6,609,234.00
          </h2>
          <div className="flex gap-2 text-sm mb-3 sm:mb-0 ">
            <div className="flex gap-2 border rounded-lg border-secondary-2 items-center px-2 py-1">
              <CiFilter />
              <span>select dates</span>
            </div>
            <div className="flex gap-2 border rounded-lg border-secondary-2 items-center px-2 py-1">
              <CiFilter />
              <span>Filter</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-scroll sm:overflow-x-hidden">
        <InsightCard
          bgColor="chart-up"
          title="New Subscriptions"
          figure="875"
        />
        <InsightCard
          bgColor="chart-down"
          title="New Orders"
          figure="500"
          percentage="17%"
        />
        <InsightCard
          bgColor="chart-up"
          title="Average Revenue"
          figure="GH₵8,673"
        />
      </div>
    </section>
  );
};

export default InsightSectionWrapper;
