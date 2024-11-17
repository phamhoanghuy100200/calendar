import React, { useContext } from 'react'
import { FaPlus } from "react-icons/fa";
import GlobalContext from '../context/GlobalContext';
export default function CreateEventButton() {
    const { setShowEventModal } = useContext(GlobalContext)

    return (
        <button onClick={() => setShowEventModal(true)}
            className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl '>
            <FaPlus className='pl-2' size={25} />
            <span className='pl-3 pr-5'>Create</span>
        </button>
    )
}
