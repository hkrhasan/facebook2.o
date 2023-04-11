import React from 'react'

const AddFriendsCard = () => {
    return (
        <div>    
            <div className='-ml-4'>
                <div className="block max-w-[250px] rounded-lg bg-white shadow-lg mt-5 ml-10 ">
                    <a href="#!">
                        <img
                            className="rounded-t-lg h-full"
                            src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt=""
                        />
                    </a>
                    <p className=" px-4 text-xl font-medium ">
                        Rehnuma Bano
                    </p>
                    <div className="p-3">
                        <div className='mt-5 flex flex-col justify-center'>
                            <button class="w-[220px] bg-blue-200 hover:bg-blue-100 font-medium py-2 px-3 rounded text-blue-600">
                                Add Friend
                            </button>
                            <button class="w-[220px] bg-gray-200 hover:bg-gray-300 text-black font-medium py-2 px-3 rounded  mt-2" >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default AddFriendsCard
