import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
// width: Fixed (320px)px;
// height: Hug (192px)px;
// padding: 24px 0px 0px 0px;
// gap: 8px;
// border-radius: 8px 0px 0px 0px;
// border: 1px 0px 0px 0px;
// opacity: 0px;

const InsightCard = ({ title, bgColor, figure, chart, description }) => {
  
  bgColor === 'chart-up' 
    ? (chart = <FaArrowTrendUp />)
    : (chart = <FaArrowTrendDown />);

  return (
    <div className="pt-6 border rounded-lg border-secondary-3">
      <p>{title}</p>
      <div>
        <p>{figure}</p>
        <div className={` ${'bg-' + bgColor}`}>{chart}</div>
        <p>{description}</p>
      </div>
      {/* <FaArrowTrendDown />
      <FaArrowTrendUp /> */}
    </div>
  );
};

export default InsightCard;
