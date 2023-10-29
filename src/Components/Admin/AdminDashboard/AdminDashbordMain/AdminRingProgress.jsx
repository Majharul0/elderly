import React from 'react'
import { RingProgress } from '@ant-design/plots';

const AdminRingProgress = ({percent,color}) => {
    const config = {
        height: 35,
        width: 35,
        autoFit: false,
        percent: (percent/100),
        color,
        innerRadius: 0.70,
        radius: 0.9,
        statistic: false,
      };
  return (
    <div>
        <RingProgress {...config} />
    </div>
  )
}

export default AdminRingProgress