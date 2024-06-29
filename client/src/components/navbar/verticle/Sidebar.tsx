import {MdDashboard} from "react-icons/md";
import {FaBoxes} from "react-icons/fa";
import {FaCartArrowDown} from "react-icons/fa6";
import {useState} from "react";

export const Sidebar = (props:any) => {

    const [itemNo, setItemNo] = useState(1);

    const setNo = (number:number) => {
        setItemNo(number)
        props.setIndex(number)
    }

    return (
        <div className={'w-100 pt-16 min-h-screen shadow-md'}>
            <div className={`flex items-center gap-x-4 w-100 px-2 py-2 my-2 text-[18px] uppd cursor-pointer
            ${itemNo === 1 ? 'bg-green-400 text-white' : ''}`}
                 onClick={()=>setNo(1)}
            >
                <span className={'w-max'}>
                    <MdDashboard />
                </span>
                <span className={'w-max'}>Dashboard</span>
            </div>
            <div className={`flex items-center gap-x-4 w-100 px-2 py-2 my-2 text-[18px] uppd cursor-pointer
            ${itemNo === 2 ? 'bg-green-400 text-white' : ''}`}
                 onClick={()=>setNo(2)}
            >
                <span className={'w-max'}>
                    <FaBoxes />
                </span>
                <span className={'w-max'}>Products</span>
            </div>
            <div className={`flex items-center gap-x-4 w-100 px-2 py-2 my-2 text-[18px] uppd cursor-pointer
            ${itemNo === 3 ? 'bg-green-400 text-white' : ''}`}
                 onClick={()=>setNo(3)}
            >
                <span className={'w-max'}>
                    <FaCartArrowDown />
                </span>
                <span className={'w-max'}>Orders</span>
            </div>
        </div>
    );
};