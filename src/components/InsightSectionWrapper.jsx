import { CiFilter } from "react-icons/ci";
import InsightCard from "./InsightCard";

const InsightSectionWrapper = () => {
  return (
    <section className="font-poppins">
        <h2></h2>
        <h2></h2>
        <div className=" w-[320px]">
            <InsightCard bgColor='chart-up'/> 
            <InsightCard /> 
            <InsightCard /> 

        
        </div>
      InsightSectionWrapper
      <CiFilter />
      <InsightCard />
    </section>
  );
};

export default InsightSectionWrapper;
