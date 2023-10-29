import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import CustomToast from '../../../../Shared/Tosat/CustomToast';
import FormDrawer from '../../../../Shared/Drawer/FormDrawer';
import InputBox from '../../../../Shared/input/InputBox';


const SupportAgentProfileEdit = ({ creactDrawer, setCreactDrawer, item }) => {

    
    const [firstName,setFirstname] = useState(item.firstName)
    const [lastName,setlastName] = useState(item.lastName)
    const [email,setemail] = useState(item.email)
    const [businessAdress,setbusinessAdress] = useState(item.businessAdress)
    const [contactPerson,setcontactPerson] = useState(item.contactPerson)
    const [contactNumber,setcontactNumber] = useState(item.contactNumber)

    useEffect(() => {
        setFirstname(item.firstName)
        setlastName(item.lastName)
        setemail(item.email)
        setbusinessAdress(item.businessAdress)
        setcontactPerson(item.contactPerson)
        setcontactNumber(item.contactNumber)
    }, [item])


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            // firstName: first.firstName,
            // lastName: first.lastName,
            // email: first.email,
            // businessAdress: first.businessAdress,
            // contactPerson: first.contactPerson,
            // contactNumber: first.contactNumber,
        }
    });

    console.log(item)
    const navigate = useNavigate();

    const onSubmit = (data) => {
        try {
            // Simulate an API call
            // Replace this with your actual API call
            // await apiCallFunction(data);

            setCreactDrawer(false)
            // Display the success toast
            toast.custom((t) => <CustomToast t={t} text="Changes has been successfully made" />);
        } catch (error) {
            // Handle API call or other errors
            console.error('An error occurred:', error);
            toast.error('An error occurred while creating a new admin.');
        }
    };
    return (
        <div>
            <FormDrawer
                creactDrawer={creactDrawer}
                setCreactDrawer={setCreactDrawer}
                title={"Edit Support Agent Details"}
                button={"Save Changes"}
                handleSubmit={handleSubmit(onSubmit)}
            >
                <div className='flex items-center gap-4'>

                    <div className="flex flex-col items-start w-full mt-5">
                        <label htmlFor="otp" className="mb-1 font-[500] text-[13px] text-[#3D4854]">
                            First Name
                        </label>
                        <input
                            className="py-3 px-2 text-[#3D4854] placeholder:text-[#90969D] rounded-[10px] w-full text-[16px] outline-none border-[#90969D] border-[1px] focus:border-primary"
                            type={"text"}
                            placeholder="Enter First Name"
                            id="otp"
                            value={firstName}
                            onChange={(e)=>setFirstname(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col items-start w-full mt-5">
                        <label htmlFor="otp" className="mb-1 font-[500] text-[13px] text-[#3D4854]">
                        Last Name
                        </label>
                        <input
                            className="py-3 px-2 text-[#3D4854] placeholder:text-[#90969D] rounded-[10px] w-full text-[16px] outline-none border-[#90969D] border-[1px] focus:border-primary"
                            type={"text"}
                            placeholder="Enter Last Name"
                            id="otp"
                            value={lastName}
                            onChange={(e)=>setlastName(e.target.value)}
                        />
                    </div>
                </div>


                <div className="flex flex-col items-start w-full mt-5">
                        <label htmlFor="otp" className="mb-1 font-[500] text-[13px] text-[#3D4854]">
                        E-mail
                        </label>
                        <input
                            className="py-3 px-2 text-[#3D4854] placeholder:text-[#90969D] rounded-[10px] w-full text-[16px] outline-none border-[#90969D] border-[1px] focus:border-primary"
                            type={"email"}
                            placeholder="Enter E-mail"
                            id="otp"
                            value={email}
                            onChange={(e)=>setemail(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col items-start w-full mt-5">
                        <label htmlFor="otp" className="mb-1 font-[500] text-[13px] text-[#3D4854]">
                        Business Address
                        </label>
                        <input
                            className="py-3 px-2 text-[#3D4854] placeholder:text-[#90969D] rounded-[10px] w-full text-[16px] outline-none border-[#90969D] border-[1px] focus:border-primary"
                            type={"text"}
                            placeholder="Business Address"
                            id="otp"
                            value={businessAdress}
                            onChange={(e)=>setbusinessAdress(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col items-start w-full mt-5">
                        <label htmlFor="otp" className="mb-1 font-[500] text-[13px] text-[#3D4854]">
                        Contact Person
                        </label>
                        <input
                            className="py-3 px-2 text-[#3D4854] placeholder:text-[#90969D] rounded-[10px] w-full text-[16px] outline-none border-[#90969D] border-[1px] focus:border-primary"
                            type={"text"}
                            placeholder="Enter Contact Person"
                            id="otp"
                            value={contactPerson}
                            onChange={(e)=>setcontactPerson(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col items-start w-full mt-5">
                        <label htmlFor="otp" className="mb-1 font-[500] text-[13px] text-[#3D4854]">
                        Contact Number
                        </label>
                        <input
                            className="py-3 px-2 text-[#3D4854] placeholder:text-[#90969D] rounded-[10px] w-full text-[16px] outline-none border-[#90969D] border-[1px] focus:border-primary"
                            type={"text"}
                            placeholder="Enter Contact Number"
                            id="otp"
                            value={contactNumber}
                            onChange={(e)=>setcontactNumber(e.target.value)}
                        />
                    </div>

            </FormDrawer>
        </div>
    )
}

export default SupportAgentProfileEdit