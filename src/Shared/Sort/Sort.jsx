import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Menu } from "@mui/material";

const Sort = ({ selected, setSelected, data, width }) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <div className="relative">
      <div
        onClick={handleClick}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        style={{ width: width }}
        className={`bg-white w-[150px] text-ellipsis cursor-pointer px-2 py-[9px] flex items-center border-[1px] border-[#90969D] rounded-[10px] justify-between ${!selected && "text-gray-700"
          }`}
      >
        <div className="flex items-center gap-[1px] text-[13px] text-[#5D6670]">
          <Icon icon="basil:sort-outline" className='text-[16px]' />
          {selected
            ? selected?.length > 12
              ? selected?.substring(0, 12) + "..."
              : selected
            : data[0]}
        </div>
        <Icon icon="basil:caret-down-solid" className={`${open && "rotate-180"} text-[20px]`} />
      </div>

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        id={"hello"}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            boxShadow: '2px 6px 30px rgba(0, 0, 0, 12%)', // Customize the shadow here
            marginTop: '10px', 
            padding: '0px',
            marginBottom: '-10px',
          },
        }}
      >
        <ul style={{ width: width }} className="min-w-[150px] w-[100%] z-40 w-a text-[13px] p-[6px] font-[500] top-[45px] bg-white left-0 border-[1px] border-[#d2d2d3] rounded-[10px]">
          {
            data.map((item, i) => (
              <li
                onClick={() => {
                  if (item) {
                    setSelected(item);
                    handleClose()
                  }
                }}
                className="py-2 px-3 cursor-pointer hover:bg-light hover:text-primary rounded-[8px]" key={i}>{item}</li>
            ))
          }
        </ul>
      </Menu>

    </div>
  );
};

export default Sort;