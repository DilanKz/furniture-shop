import {Offcanvas, OffcanvasBody, OffcanvasHeader} from "reactstrap";
import React from "react";

export const FilterModel = (props:any) => {
    return (
        <Offcanvas
            direction='start'
            isOpen={props.canvasOpen}
            toggle={props.toggleCanvasScroll}
        >
            <OffcanvasHeader toggle={props.toggleCanvasScroll}>
                Filter
            </OffcanvasHeader>
            <OffcanvasBody className='mx-0 flex flex-col justify-content-between relative'>
            </OffcanvasBody>
        </Offcanvas>
    );
};