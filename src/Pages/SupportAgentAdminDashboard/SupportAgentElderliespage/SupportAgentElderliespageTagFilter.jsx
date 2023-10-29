import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { IconButton, Menu } from "@mui/material";
import CustomerTags from "./CustomerTags";
import ElderlySystemTags from "./ElderlySystemTags";

const SupportAgentElderliespageTagFilter = ({ selected, setSelected, data, width }) => {
  // const [open, setOpen] = useState(false);
  const [active, setActive] = useState(1)
  const tabsData = [
    {
      id: 1,
      value: "Customer Tags",
    },
    {
      id: 2,
      value: "System Tags",
    },
  ]

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  // const closeModal = () => {
  //   setOpen(false);
  // };

  // useEffect(() => {
  //   if (open) {
  //     // Add a click event listener to the document
  //     document.addEventListener('click', closeModal);
  //   } else {
  //     // Remove the event listener when the modal is closed
  //     document.removeEventListener('click', closeModal);
  //   }

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener('click', closeModal);
  //   };
  // }, [open]);

  return (
    <div className="relative">
      <div
        onClick={handleClick}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        className={`bg-white md:w-[150px] w-full cursor-pointer px-2 py-[9px] flex items-center border-[1px] border-[#90969D] rounded-[10px] justify-between ${!selected && "text-gray-700"
          }`}
      >
        <div className="flex items-center gap-[1px] text-[13px] font-[500] text-[#5D6670]">
          <Icon icon="mingcute:filter-line" className='text-[16px]' />
          {selected
            ? selected?.length > 25
              ? selected?.substring(0, 25) + "..."
              : selected
            : "Filter By Tag"}
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
            boxShadow: "none"
          },
        }}
      >

        <div className=" z-40 mt-1 md:w-[320px] w-[250px] overflow-hidden p-5 top-[45px] bg-white shadow-md right-0 border-[1px] border-[#90969D] rounded-[10px]">
          <div className="flex items-center justify-between">
            <h2 className="text-[19px] font-[500] text-secondary">Tags</h2>
            <IconButton onClick={handleClose}>
              <Icon icon="mingcute:close-line" className="text-[20px] hover:text-red-500" />
            </IconButton>
          </div>
          <div className="flex items-center mt-5 justify-between gap-5 p-2 bg-[#E6F1FE] rounded-lg">
            {
              tabsData.map((item, i) => (
                <button key={i} onClick={() => setActive(item.id)} className={`py-3 px-3 text-[11px] rounded-lg font-[500] w-full transition-all duration-300 ${item.id === active ? "bg-primary text-white" : " bg-transparent text-secondary"}`}>{item.value}</button>
              ))
            }
          </div>
          <div className="mt-2">
            {
              active === 1 ? (
                <CustomerTags />
              ) : (
                <ElderlySystemTags />
              )
            }
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default SupportAgentElderliespageTagFilter;