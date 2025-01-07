import React from 'react';

const CardDataStats = ({
  title,
  total,
  rate,
  children,
}: any) => {
  return (
    <div className="rounded-sm border border-stroke bg-white pb-5 px-7 shadow-default dark:border-strokedark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2">
        {children}
      </div>

      <div className="mt-3">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {total}
          </h4>
          <span className="text-sm font-medium">{title}</span>
        </div>

        <span
          className={`text-center text-sm font-medium`}
        >
          {rate}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
