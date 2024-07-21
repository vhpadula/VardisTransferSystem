import React, { forwardRef } from "react";

type TextBoxProps = {
    placeholder?: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputType?: "number" | "text";
};

const TextBox = forwardRef<HTMLInputElement, TextBoxProps>(function TextBox(
    { placeholder, defaultValue, onChange, inputType = "text" },
    ref
) {
    return (
        <div className="relative rounded-lg bg-white box-border w-full flex flex-row items-start justify-start py-3 px-4 text-left text-base text-gray font-small-text border-[1px] border-solid border-gainsboro">
            <input
                ref={ref}
                type={inputType}
                className="w-full relative leading-[150%] text-3xl inline-block shrink-0 border-none rounded-md font-semibold text-gray-700 focus:outline-none"
                placeholder={placeholder}
                defaultValue={defaultValue}
                onChange={onChange}
            />
        </div>
    );
});

export default TextBox;
