import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";


const InsightCard = ({
  title,
  bgColor,
  backGround,
  percentage = "24%",
  figure,
  chart,
}) => {
  if (bgColor === "chart-up") {
    chart = <FaArrowTrendUp className="text-green-600" />;
    backGround = "bg-[#82FF804D]";
  } else if (bgColor === "chart-down") {
    chart = <FaArrowTrendDown className="text-red-600" />;
    backGround = "bg-[#FF8080]";
  }

  return (
    <div className=" flex flex-col gap-6 px-6 py-4 border rounded-lg border-secondary-3 flex-1 justify-between">
      <p className="text-sm">{title}</p>
      <div className="flex flex-col gap-y-1">
        <div className="flex gap-1 ">
          <p className="font-bold text-xl">{figure}</p>
          <div
            className={`${backGround} flex gap-1 items-center py-1 px-1 text-xs rounded-[4px]`}
          >
            <span>{chart}</span>
            <span>{percentage}</span>
          </div>
        </div>
        <p className="text-[12px] w-36">Compared to last week</p>
      </div>
    </div>
  );
};

export default InsightCard;
