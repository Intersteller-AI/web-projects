import React from "react";

const VerticalBarChart = () =>(
  <div className="flex space-x-2">
    <div className="h-full w-8 flex flex-col items-center justify-between space-y-12 text-slate-500">
      <h1>40k</h1>
      <h1>30k</h1>
      <h1>20k</h1>
      <h1>10k</h1>
      <h1>0k</h1>
    </div>
    <div className="lg:max-w-[550px] p-2 overflow-x-scroll hide-scrollbar">
      <div className="h-full flex flex-col justify-between ">
        <div className="w-[800px] h-[300px] flex justify-between items-end">
          <div className="w-[20px] h-[90px] animate-slideup special-grad rounded-t-md mb-16"></div>
          <div className="w-[20px] h-[90px] animate-slideup special-grad rounded-t-md mb-14"></div>
          <div className="w-[20px] h-[90px] animate-slideup special-grad rounded-t-md mb-24"></div>
          <div className="w-[20px] h-[90px] animate-slideup special-grad rounded-t-md mb-14"></div>
          <div className="w-[20px] h-[90px] animate-slideup special-grad rounded-t-md mb-28"></div>
          <div className="w-[20px] h-[90px] animate-slideup special-grad rounded-t-md mb-24"></div>
          <div className="w-[20px] h-[90px] animate-slideup special-grad rounded-t-md mb-32"></div>
          <div className="w-[20px] h-[90px] animate-slideup special-grad rounded-t-md mb-24"></div>
          <div className="w-[20px] h-[90px] animate-slideup special-grad rounded-t-md mb-40"></div>
          <div className="w-[20px] h-[90px] animate-slideup special-grad rounded-t-md mb-32"></div>
          <div className="w-[20px] h-[90px] animate-slideup special-grad rounded-t-md mb-16"></div>
          <div className="w-[20px] h-[90px] animate-slideup special-grad rounded-t-md mb-36"></div>
        </div>
        <div className="w-[800px] h-[1px] md:block hidden bg-slate-400 mt-4"></div>
        <div className="flex justify-between w-[800px]">
          <div className="border-t-[1px] sm:leading-6 leading-9 border-slate-600">
            <h1 className="capitalize font-medium sm:text-[16px] text-[12px]">jan</h1>
          </div>
          <div className="border-t-[1px] sm:leading-6 leading-9 border-slate-600">
            <h1 className="capitalize font-medium sm:text-[16px] text-[12px]">feb</h1>
          </div>
          <div className="border-t-[1px] sm:leading-6 leading-9 border-slate-600">
            <h1 className="capitalize font-medium sm:text-[16px] text-[12px]">mar</h1>
          </div>
          <div className="border-t-[1px] sm:leading-6 leading-9 border-slate-600">
            <h1 className="capitalize font-medium sm:text-[16px] text-[12px]">apr</h1>
          </div>
          <div className="border-t-[1px] sm:leading-6 leading-9 border-slate-600">
            <h1 className="capitalize font-medium sm:text-[16px] text-[12px]">may</h1>
          </div>
          <div className="border-t-[1px] sm:leading-6 leading-9 border-slate-600">
            <h1 className="capitalize font-medium sm:text-[16px] text-[12px]">jun</h1>
          </div>
          <div className="border-t-[1px] sm:leading-6 leading-9 border-slate-600">
            <h1 className="capitalize font-medium sm:text-[16px] text-[12px]">jul</h1>
          </div>
          <div className="border-t-[1px] sm:leading-6 leading-9 border-slate-600">
            <h1 className="capitalize font-medium sm:text-[16px] text-[12px]">aug</h1>
          </div>
          <div className="border-t-[1px] sm:leading-6 leading-9 border-slate-600">
            <h1 className="capitalize font-medium sm:text-[16px] text-[12px]">sep</h1>
          </div>
          <div className="border-t-[1px] sm:leading-6 leading-9 border-slate-600">
            <h1 className="capitalize font-medium sm:text-[16px] text-[12px]">oct</h1>
          </div>
          <div className="border-t-[1px] sm:leading-6 leading-9 border-slate-600">
            <h1 className="capitalize font-medium sm:text-[16px] text-[12px]">nov</h1>
          </div>
          <div className="border-t-[1px] sm:leading-6 leading-9 border-slate-600">
            <h1 className="capitalize font-medium sm:text-[16px] text-[12px]">dec</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const MainChart = () => {
  const data = [
    { value: "Yearly", name: "Yearly" },
    { value: "Monthly", name: "Monthly" },
    { value: "Weekly", name: "Weekly" },
    { value: "Daily", name: "Daily" },
    { value: "Hourly", name: "Hourly" },
  ];

  return (
    <div className="w-full mt-4 drop-shadow-md bg-rageWhite rounded-lg pt-4 px-6">
      {/* overview */}
      <div className="w-full flex justify-between items-center">
        <h1 className="font-semibold">Overview</h1>
        <div className="flex space-x-2">
          <h1 className="font-medium">Sort By :</h1>
          <select
            name="time"
            className="bg-transparent rounded-lg outline-none"
          >
            {data.map((val, index) => {
              return (
                <option className="text-[16px]" key={index} value={val.value}>
                  {val.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      {/* container left and right */}
      <div className="flex w-full mt-8 lg:flex-row flex-col">
        <div className="flex-[0.6] flex md:flex-col justify-between flex-row">
          <div className="w-full">
            <h1 className="text-[12px]">This Month</h1>
            <div className="flex items-start sm:space-x-2 sm:flex-row flex-col sm:space-y-0 space-y-1">
              <h1 className="sm:text-[20px] text-[16px] font-semibold">$24,568</h1>
              <code className="bg-green-100 text-[10px] text-green-500 sm:px-2 sm:py-2 px-3 py-1 rounded-full flex items-center justify-center">
                + 2.65%
              </code>
            </div>
          </div>
          <div className="flex flex-col md:mt-4 mb-8">
            <div className="flex">
              <div className="flex flex-col justify-center items-center text-center w-28 h-16 border-b-[1px] border-slate-400">
                <h2 className="capitalize font-normal sm:text-[14px] text-[8px]">
                  orders
                </h2>
                <h1 className="font-semibold sm:text-[18px] text-[12px]">
                  5,643
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center text-center w-28 h-16 border-l-[1px] border-b-[1px] border-slate-400">
                <h2 className="capitalize font-normal sm:text-[14px] text-[8px]">
                  Sales
                </h2>
                <h1 className="font-semibold sm:text-[18px] text-[12px]">
                  16,273
                </h1>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col justify-center items-center text-center w-28 h-16 border-b-[1px] border-slate-400">
                <h2 className="capitalize font-normal sm:text-[14px] text-[8px]">
                  order value
                </h2>
                <h1 className="font-semibold sm:text-[18px] text-[12px]">
                  12.03%
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center text-center w-28 h-16 border-l-[1px] border-b-[1px] border-slate-400">
                <h2 className="capitalize font-normal sm:text-[14px] text-[8px]">
                  customers
                </h2>
                <h1 className="font-semibold sm:text-[18px] text-[12px]">
                  21,456
                </h1>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col justify-center items-center text-center w-28 h-16">
                <h2 className="capitalize font-normal sm:text-[14px] text-[8px]">
                  income
                </h2>
                <h1 className="font-semibold sm:text-[18px] text-[12px]">
                  $35,652
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center text-center w-28 h-16 border-l-[1px] border-slate-400">
                <h2 className="capitalize font-normal sm:text-[14px] text-[8px]">
                  expenses
                </h2>
                <h1 className="font-semibold sm:text-[18px] text-[12px]">
                  $12,248
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] sm:hidden block bg-slate-300 mt-2 mb-6"></div>
        <div className="flex-1">
            <VerticalBarChart/>
        </div>
      </div>
    </div>
  );
};

export default MainChart;
