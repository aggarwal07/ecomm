import React from "react";
interface InputBoxProps {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}
const InputBox: React.FC<InputBoxProps> = ({
  label,
  onChange,
  value
}) => {
  return (
    <div className="relative my-4">
      <label
        className="absolute -top-[14.4px] left-2 bg-gray-100 p-1 text-[13px] text-gray-400"
        htmlFor="name"
      >
        {label}
      </label>
      <input
        className="bg-gray-100 w-full h-[2.2em]  px-3 outline-none text-lg border-gray-300 border rounded-md focus:border-black"
        type="text"
        onBlur={onChange}
        value={value}
      />
    </div>
  );
};

export default InputBox;
