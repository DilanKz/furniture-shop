import {Input} from "reactstrap";
import {useState} from "react";

export const CountButton = (props:any) => {

    const [value, setValue] = useState(1)

    const changeValue = (operator:any) => {
        if (operator == '-') {
            if (value === 1) {

            } else {
                setValue(value - 1)
            }
        } else {
            setValue(value + 1)
        }
    }

    return (
        <div className={'w-max flex bg-gray-200 md:rounded-md rounded-sm md:text-[20px] sm:text-[10px]'}>
            <div className={'flex items-center md:ps-3 ps-1 cursor-pointer user-select-none'} onClick={() => changeValue('-')}>
                -
            </div>
            <input
                value={value}
                type='text'
                className={'md:w-12 w-8 md:p-2 p-1 bg-gray-200 text-center font-semibold outline-0'}
            />
            <div className={'flex items-center md:pe-3 pe-1 cursor-pointer user-select-none'} onClick={() => changeValue('+')}>
                +
            </div>
        </div>
    );
};