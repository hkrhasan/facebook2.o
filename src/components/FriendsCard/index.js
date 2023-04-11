import React from 'react'
import AddFriendsCard from '../AddFriendsCard';
import { IoSettingsSharp } from 'react-icons/io5';
import FriendSettings from '../FriendSettings';

const FriendCard = () => {
    return (
        <>
            <div class=" grid h-screen grid-cols-[minmax(360px,_1fr)] ">
                {/* <!-- Fixed column --> */}
                <div className='flex'>
                    <div>
                        <FriendSettings />
                        {/* <!-- Content here --> */}
                    </div>
                    {/* <!-- Scrollable column --> */}
                    <div class="overflow-y-scroll h-full w-full bg-[#cbced0] ">
                        {/* <!-- Content here --> */}
                        <div className=' ml-7 mt-10'>
                            <p className=" text-xl font-bold">People You May Know</p>
                        </div>
                        <div className='flex flex-wrap '>
                        <AddFriendsCard />
                        <AddFriendsCard />
                        <AddFriendsCard />
                        <AddFriendsCard />
                        <AddFriendsCard />
                        <AddFriendsCard />
                        <AddFriendsCard />
                        <AddFriendsCard />
                        <AddFriendsCard />
                        <AddFriendsCard />
                        <AddFriendsCard />
                        <AddFriendsCard />
                        <AddFriendsCard />
                        <AddFriendsCard />
                        </div>
                        
                    </div>
                </div>

            </div>

        </>
    )
}

export default FriendCard;