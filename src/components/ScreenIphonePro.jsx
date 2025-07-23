import React from "react";

export const ScreenIphonePro = ({
    className,
    screenIphonePro = "https://c.animaapp.com/8dbKVwgr/img/screen-iphone-12-pro-1.svg",
}) => {
    return (
        <img
            className={`absolute w-[620px] h-[1338px] top-0 left-0 ${className}`}
            alt="Screen iphone pro"
            src={screenIphonePro}
        />
    );
};
