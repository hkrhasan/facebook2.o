import React from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { RiVideoAddLine } from 'react-icons/ri';
import { VscAdd } from 'react-icons/vsc';

import ThreeDotsIcon from '../ThreeDotsIcon';
import Avatar from '../Avatar';



const contactlist = [
    {
        id: "1",
        name: "Udit Goel"
    },
    // {
    //     id: "2",
    //     name: "Rupak Kumar Singh"
    // },
    {
        id: "3",
        name: "Kapil Khan"
    },
    {
        id: "4",
        name: "Raushan Raj"
    },
    {
        id: "5",
        name: "Dineh Jangid"
    },
    {
        id: "6",
        name: "Anmol Batra"
    },
    {
        id: "7",
        name: "Ashish Bharti"
    },
    {
        id: "8",
        name: "Devesh Tejan"
    },
    {
        id: "9",
        name: "Nishant Bharti"
    },
    {
        id: "10",
        name: "Harsh Verma"
    },
    {
        id: "11",
        name: "Udit Goel"
    },
    {
        id: "12",
        name: "Rupak Kumar Singh"
    },
    {
        id: "13",
        name: "Kapil Khan"
    },
    {
        id: "14",
        name: "Raushan Raj"
    },
    {
        id: "15",
        name: "Dineh Jangid"
    },
    {
        id: "16",
        name: "Anmol Batra"
    },
    {
        id: "17",
        name: "Ashish Bharti"
    },
    {
        id: "18",
        name: "Devesh Tejan"
    },
    {
        id: "19",
        name: "Nishant Bharti"
    },
    {
        id: "20",
        name: "Harsh Verma"
    }
]


const Contact = () => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <div >
                    <h1 className='text-2xl font-medium'>Contact</h1>
                </div>
                <div className='flex items-center' gap-x-2>
                    <div className="rounded-full p-3 hover:bg-gray-300 cursor-pointer">
                        <RiVideoAddLine size={24} />
                    </div>
                    <div className="rounded-full p-3 hover:bg-gray-300 cursor-pointer">
                        <HiMagnifyingGlass size={24} />
                    </div>
                    <div>
                        <ThreeDotsIcon />
                    </div>
                </div>

            </div>
            <div className='flex  flex-col  items-start'>
                {
                    contactlist.map((list) => {
                        return (
                            <div className='flex p-1 hover:bg-zinc-200 w-full rounded-md items-center gap-x-3'>
                                <div>
                                    <Avatar />
                                </div>
                                <div>
                                    <p>{list.name}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div>
                <h1 className='text-lg font-medium'>Group conversations</h1>
                
                <div className='flex gap-x-3 mb-9 p-2 items-center hover:bg-zinc-300 rounded-md'>
                    <div className='rounded-full p-2 bg-zinc-200 '>
                        <VscAdd />
                    </div>
                    <div className='font-medium'>
                        create new grup
                    </div>
                </div>
            </div>
        </>
    )
}




export default Contact