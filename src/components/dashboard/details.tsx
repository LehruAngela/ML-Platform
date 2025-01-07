import React from 'react';
import CardDataStats from './card';
// import ChartOne from '../../components/Charts/ChartOne';
// import ChartThree from '../../components/Charts/ChartThree';
// import ChartTwo from '../../components/Charts/ChartTwo';
import ChatCard from './chat';
// import MapOne from '../../components/Maps/MapOne';
import TableOne from './table';

const ECommerce = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Upcoming Sessions" total="0" rate="6" levelUp>
        
        </CardDataStats>
        <CardDataStats title="Sessions Completed" total="0" rate="21" levelUp>
         
        </CardDataStats>
        <CardDataStats title="Monthly Checkins" total="2.450" rate="12" levelUp>
         
        </CardDataStats>
        <CardDataStats title="Total Patients" total="3.456" rate="10" levelDown>
          
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne /> */}
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </div>
  );
};

export default ECommerce;
