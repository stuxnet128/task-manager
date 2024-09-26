import { FaProjectDiagram } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { FaLayerGroup } from "react-icons/fa";
import { ReactNode } from "react";
interface StatisticsData {
  count: number;
  title: string;
  icon: ReactNode;
}

const statisticsData: StatisticsData[] = [
  {
    count: 15,
    title: "Total Projects",
    icon: <FaProjectDiagram />,
  },
  {
    count: 30,
    title: "Task Completed",
    icon: <FaListCheck />,
  },
  {
    count: 3,
    title: "Categories",
    icon: <FaLayerGroup />,
  },
];
export const Statistics = () => {
  return (
    <div className=" w-full bg-card p-6 mt-10 flex gap-4">
      <div className="bg-background  rounded flex p-8 gap-5 w-full h-fit">
        {statisticsData.map((data, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-[240px] h-fit p-4 bg-mainColor text-white shadow-xl rounded"
          >
            <div className="flex flex-col">
              <h4 className="font-bold text-[1.6rem]">{data.count}</h4>
              <p>{data.title}</p>
            </div>
            <div className="w-[60px] h-[60px] bg-white text-mainColor flex items-center justify-center rounded-full text-[2rem]">
              {data.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-background flex flex-col p-8 w-[300px] items-center gap-2 rounded">
        <h3 className="font-bold">Overall Progress</h3>
        <div className=" w-[8rem] h-[8rem] bg-mainColor flex items-center justify-center rounded-full">
          <p className="text-white font-bold text-[2rem]">80%</p>
        </div>
      </div>
    </div>
  );
};
