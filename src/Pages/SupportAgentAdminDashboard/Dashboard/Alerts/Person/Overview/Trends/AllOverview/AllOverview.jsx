import OverViewChart from '../OverViewChart/OverViewChart';
import OverviewTrends from '../../../../../../../../Components/OverviewTrends';
const AllOverview = ({overviewData,chartData}) => {

    return (
        <div className='xl:flex'>
            <OverviewTrends  overviewData={overviewData}></OverviewTrends>
            <div className='xl:w-2/3 w-full xl:mt-[-54px] md:mt-7 sm:mt-7'><OverViewChart data={chartData}></OverViewChart></div>
        </div>
    );
};

export default AllOverview;
