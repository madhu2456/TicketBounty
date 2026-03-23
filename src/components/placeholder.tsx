import {LucideMessageSquareWarning} from "lucide-react";
import type React from "react";
import {cloneElement} from "react";

type PlaceholderPropsType = {
    label: string;
    icon?: React.ReactElement;
    button?: React.ReactElement;
};

const Placeholder = ({
                         label,
                         icon = <LucideMessageSquareWarning/>,
                         button = <div/>,
                     }: PlaceholderPropsType) => {
    return (
        <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
            {cloneElement(icon, {
                className: "w-16 h-16",
            })}
            <h2 className="text-lg text-center">{label}</h2>
            {cloneElement(button, {
                className: "h-10",
            })}
        </div>
    );
};

export {Placeholder};
