import React from 'react'
import { Column } from '@ant-design/plots';
import { categorizeAges } from '../../HelperFunction/HelperFunction';


const UserProfileAgeChart = () => {
    const data = [
        { name: 'akash', gender: 'male', age: 25 },
        { name: 'bristy', gender: 'female', age: 10 },
        { name: 'prokash', gender: 'male', age: 17 },
        { name: 'rahsed', gender: 'female', age: 19 },
        { name: 'robi', gender: 'male', age: 69 },
        { name: 'khokan', gender: 'male', age: 9 },
        { name: 'rabeya', gender: 'female', age: 72 },
    ];

    const config = {
        data,
        isGroup: true,
        xField: 'name',
        yField: 'age',
        seriesField: 'gender',
        dodgePadding: 2,
        intervalPadding: 5,
        columnWidthRatio: 0.9,
        legend: false,
        label:false,
        xAxis: {
            label: false,
          },
        color: ({ gender }) => {
            return gender === 'male' ? '#0070F0' : '#5BA2F2';
          },
      };

    const ageCategories = categorizeAges(data);


  return (
    <div>
        <div>
            <h2 className=' text-[#3D4854] font-medium text-2xl'>Alerts</h2>
        </div>
        <div className='w-full h-[200px] mt-4'>
            <Column {...config} />
        </div>
        <div className='flex justify-around text-xs font-medium text-[#0D1A29] mt-5'>
            <p>Child: {ageCategories.child}</p>
            <p>Adolescent: {ageCategories.adolescent}</p>
            <p>Adult: {ageCategories.adult}</p>
            <p>Elderly: {ageCategories.elderly}</p>
        </div>
    </div>
  )
}

export default UserProfileAgeChart