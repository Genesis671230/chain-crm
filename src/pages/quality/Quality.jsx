import React from "react";

import {
  ArrowDownward,
  CalendarMonthOutlined,
  Edit,
  Search,
} from "@mui/icons-material";
import cn from "classnames";
import styles from "./Quality.module.scss";

const Quality = () => {
  return (
    <div className="px-10 pr-[10rem] py-6 text-black min-h-[90vh] ">
      <div className="text-black my-4 flex items-end justify-between  w-full">
        <div></div>
        <div>
          {" "}
          <span className="p-4 px-8 bg-red-700 text-white font-medium rounded-l-full">
            Quality
          </span>
          <span className="p-4 px-8 bg-white rounded-r-full font-medium text-[#606060]">Performance</span>{" "}
        </div>
        <div className=" p-2    bg-black rounded-full text-white">
          <span >
            <Edit className="w-[20px] h-[20px] rounded-full" />{" "}
          </span>
        </div>
      </div>
      <div className="flex justify-end my-10">
        <div className="flex gap-5 items-center">
          <div className="bg-black p-2 rounded-md">
            <CalendarMonthOutlined className="text-white text-xl" />
          </div>
          <div className={cn(styles.inputSearch, "relative")}>
            <input className={cn(styles.inputSearch, "p-2")} type="text" />
            <Search className="text-black absolute top-2 right-2" />
          </div>
        </div>
      </div>

      <div>
        <div className={cn(styles.companyTitle, "my-4 font-mono font-semibold" )}>Company Insights</div>
        <div className="flex flex-wrap gap-5 justify-between" >
          <div>
            <div className={cn(styles.itemsBox, "w-fit")}>
              <div className=" flex items-center justify-center">
                <img
                  src="https://source.unsplash.com/random/?money"
                  className="w-[80px] h-[80px] rounded-full"
                  alt=""
                />
              </div>
              <div
                className={cn(styles.orderAcceptance, "text-[#606060] my-4")}
              >
                Order Acceptance
              </div>
              <div className="flex gap-10 my-4 items-end">
                <span className="text-[20px]">85%</span>
                <span className="text-red-600 text-[12px]">
                  <ArrowDownward className="text-[7px] text-red-600" /> 8%
                </span>{" "}
              </div>
              <div className={cn(styles.phaseButton)}>Phase 1 Goal</div>
            </div>
          </div>
          <div>
            <div className={cn(styles.itemsBox, "w-fit")}>
              <div className=" flex items-center justify-center">
                <img
                  src="https://source.unsplash.com/random/?juice"
                  className="w-[80px] h-[80px] rounded-full"
                  alt=""
                />
              </div>
              <div
                className={cn(styles.orderAcceptance, "text-[#606060] my-4")}
              >
                Order Acceptance
              </div>
              <div className="flex gap-10 my-4 items-end">
                <span className="text-[20px]">85%</span>
                <span className="text-red-600 text-[12px]">
                  <ArrowDownward className="text-[7px] text-red-600" /> 8%
                </span>{" "}
              </div>
              <div className={cn(styles.phaseButton)}>Phase 1 Goal</div>
            </div>
          </div>
          <div>
            <div className={cn(styles.itemsBox, "w-fit")}>
              <div className=" flex items-center justify-center">
                <img
                  src="https://source.unsplash.com/random/?food"
                  className="w-[80px] h-[80px] rounded-full"
                  alt=""
                />
              </div>
              <div
                className={cn(styles.orderAcceptance, "text-[#606060] my-4")}
              >
                Order Acceptance
              </div>
              <div className="flex gap-10 my-4 items-end">
                <span className="text-[20px]">85%</span>
                <span className="text-red-600 text-[12px]">
                  <ArrowDownward className="text-[7px] text-red-600" /> 8%
                </span>{" "}
              </div>
              <div className={cn(styles.phaseButton)}>Phase 1 Goal</div>
            </div>
          </div>
          <div>
            <div className={cn(styles.itemsBox, "w-fit")}>
              <div className=" flex items-center justify-center">
                <img
                  src="https://source.unsplash.com/random/?court"
                  className="w-[80px] h-[80px] rounded-full"
                  alt=""
                />
              </div>
              <div
                className={cn(styles.orderAcceptance, "text-[#606060] my-4")}
              >
                Order Acceptance
              </div>
              <div className="flex gap-10 my-4 items-end">
                <span className="text-[20px]">85%</span>
                <span className="text-red-600 text-[12px]">
                  <ArrowDownward className="text-[7px] text-red-600" /> 8%
                </span>{" "}
              </div>
              <div className={cn(styles.phaseButton)}>Phase 1 Goal</div>
            </div>
          </div>
          <div>
            <div className={cn(styles.itemsBox, "w-fit")}>
              <div className=" flex items-center justify-center">
                <img
                  src="https://source.unsplash.com/random/?quality"
                  className="w-[80px] h-[80px] rounded-full"
                  alt=""
                />
              </div>
              <div
                className={cn(styles.orderAcceptance, "text-[#606060] my-4")}
              >
                Order Acceptance
              </div>
              <div className="flex gap-10 my-4 items-end">
                <span className="text-[20px]">85%</span>
                <span className="text-red-600 text-[12px]">
                  <ArrowDownward className="text-[7px] text-red-600" /> 8%
                </span>{" "}
              </div>
              <div className={cn(styles.phaseButton)}>Phase 1 Goal</div>
            </div>
          </div>
          <div>
            <div className={cn(styles.itemsBox, "w-fit")}>
              <div className=" flex items-center justify-center">
                <img
                  src="https://source.unsplash.com/random/?security"
                  className="w-[80px] h-[80px] rounded-full"
                  alt=""
                />
              </div>
              <div
                className={cn(styles.orderAcceptance, "text-[#606060] my-4")}
              >
                Order Acceptance
              </div>
              <div className="flex gap-10 my-4 items-end">
                <span className="text-[20px]">85%</span>
                <span className="text-red-600 text-[12px]">
                  <ArrowDownward className="text-[7px] text-red-600" /> 8%
                </span>{" "}
              </div>
              <div className={cn(styles.phaseButton)}>Phase 1 Goal</div>
            </div>
          </div>
          <div>
            <div className={cn(styles.itemsBox, "w-fit")}>
              <div className=" flex items-center justify-center">
                <img
                  src="https://source.unsplash.com/random/?security"
                  className="w-[80px] h-[80px] rounded-full"
                  alt=""
                />
              </div>
              <div
                className={cn(styles.orderAcceptance, "text-[#606060] my-4")}
              >
                Order Acceptance
              </div>
              <div className="flex gap-10 my-4 items-end">
                <span className="text-[20px]">85%</span>
                <span className="text-red-600 text-[12px]">
                  <ArrowDownward className="text-[7px] text-red-600" /> 8%
                </span>{" "}
              </div>
              <div className={cn(styles.phaseButton)}>Phase 1 Goal</div>
            </div>
          </div>
          <div>
            <div className={cn(styles.itemsBox, "w-fit")}>
              <div className=" flex items-center justify-center">
                <img
                  src="https://source.unsplash.com/random/?security"
                  className="w-[80px] h-[80px] rounded-full"
                  alt=""
                />
              </div>
              <div
                className={cn(styles.orderAcceptance, "text-[#606060] my-4")}
              >
                Order Acceptance
              </div>
              <div className="flex gap-10 my-4 items-end">
                <span className="text-[20px]">85%</span>
                <span className="text-red-600 text-[12px]">
                  <ArrowDownward className="text-[7px] text-red-600" /> 8%
                </span>{" "}
              </div>
              <div className={cn(styles.phaseButton)}>Phase 1 Goal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
