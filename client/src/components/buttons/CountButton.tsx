import {Input} from "reactstrap";
import {useState} from "react";

export const CountButton = (props:any) => {

    const changeValue = (operator:any) => {
        if (operator == '-') {
            if (props.value === 1) {

            } else {
                props.setValue(props.value - 1)
            }
        } else {
            if (props.limit >= props.value + 1) {
                props.setValue(props.value + 1)
            } else {
                console.log(props.limit)
            }
        }
    }

    return (
        <div className={'w-max flex bg-gray-200 md:rounded-md rounded-sm md:text-[20px] sm:text-[10px]'}>
            <div className={'flex items-center md:ps-3 ps-1 cursor-pointer user-select-none'} onClick={() => changeValue('-')}>
                -
            </div>
            <input
                value={props.value}
                type='text'
                onChange={()=>{}}
                className={'md:w-12 w-8 md:p-2 p-1 bg-gray-200 text-center font-semibold outline-0'}
            />
            <div className={'flex items-center md:pe-3 pe-1 cursor-pointer user-select-none'} onClick={() => changeValue('+')}>
                +
            </div>
        </div>
    );
};