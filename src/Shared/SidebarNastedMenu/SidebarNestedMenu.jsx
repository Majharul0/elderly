import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SidebarNestedMenu({ menu }) {


    return (
        <Accordion style={{ boxShadow: 'none', borderRadius: '12px' }} className='rounded-[10px] hover:bg-primary  hover:text-white duration-150 text-[#90969D] shadow-none drop-shadow-none' >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className=' hover:text-white'


            >
                <div className='flex item-center  text-[#90969D] gap-2 font-bold '>
                    <span>
                        {menu.icon}
                    </span>
                    <Typography>{menu.label}</Typography>
                </div>


            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}
