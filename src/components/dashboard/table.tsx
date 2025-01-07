// import { BRAND } from '../../types/brand';
// import BrandOne from '../../images/brand/brand-01.svg';
// import BrandTwo from '../../images/brand/brand-02.svg';
// import BrandThree from '../../images/brand/brand-03.svg';
// import BrandFour from '../../images/brand/brand-04.svg';
// import BrandFive from '../../images/brand/brand-05.svg';

const brandData = [
  {
    // logo: BrandOne,
    name: '24th Tuesday',
    visitors: 3.5,
    revenues: '7/1/2025',
    sales: 'Virtual',
    conversion: '1 hr',
  },
  {
    // logo: BrandTwo,
    name: 'Twitter',
    visitors: 2.2,
    revenues: '7/1/2025',
    sales: 'Virtual',
    conversion: '1 hr',
  },
  {
    // logo: BrandThree,
    name: 'Github',
    visitors: 2.1,
    revenues: '10/1/2025',
    sales: 'Virtual',
    conversion: '1 hr',
  },
  {
    // logo: BrandFour,
    name: 'Vimeo',
    visitors: 1.5,
    revenues: '12/1/2025',
    sales: 'Virtual',
    conversion: '1 hr',
  },
  {
    // logo: BrandFive,
    name: 'Facebook',
    visitors: 3.5,
    revenues: '13/1/2025',
    sales: 'Virtual',
    conversion: '1 hr',
  },

  {
    // logo: BrandFive,
    name: 'Facebook',
    visitors: 3.5,
    revenues: '13/1/2025',
    sales: 'Virtual',
    conversion: '1 hr',
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black">
        Sessions
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          {/* <div className="p-2 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Day
            </h5>
          </div> */}
          <div className="p-2 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Day
            </h5>
          </div>
          <div className="hidden p-2 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Location
            </h5>
          </div>
          <div className="hidden p-2 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Duration
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === brandData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            {/* <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <img src={brand.logo} alt="Brand" />
              </div>
              <p className="text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div> */}

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{brand.revenues}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{brand.sales}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.conversion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
