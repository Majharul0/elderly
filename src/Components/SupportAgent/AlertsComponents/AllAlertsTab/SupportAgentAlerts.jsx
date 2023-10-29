import React, { useState } from 'react'
import LatestAlertsTable from './LatestAlertsTable'
import SearchInput from '../../../../Shared/Search/SearchInput'
import Sort from '../../../../Shared/Sort/Sort'

const SupportAgentAlerts = ({data}) => {
    const [search,setSearch] = useState("")
    const [sort,setSort] = useState()
    const Sortdata=["Sort By Date","Sort By Category"]
  return (
    <div className='pt-[22px]'>
        <div className='flex items-center gap-2 justify-between flex-wrap px-[22px]'>
            <h2 className='text-[23px] font-[500] text-secondary'>Alerts</h2>
            <div className=' flex items-center gap-5'>
                <SearchInput search={search} setSearch={setSearch}/>
                <Sort selected={sort} setSelected={setSort} data={Sortdata}/>
            </div>
        </div>
        <div className='mt-5'>
            <LatestAlertsTable tableData={data}/>
        </div>
    </div>
  )
}

export default SupportAgentAlerts