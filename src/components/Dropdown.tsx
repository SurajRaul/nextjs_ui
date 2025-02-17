"use client";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type DropdownProps = {
  options: string[];
  placeholder: string;
  onChange: (value: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onChange(option);
    setSearchTerm("");
    setIsOpen(false);
  };
  return (
    <div className="relative w-64">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border p-2 rounded-md cursor-pointer bg-white flex justify-between"
      >
        <span className="text-sm text-gray-400">
          {selectedOption || placeholder}
        </span>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
      {isOpen && (
        <div >
            <input type="text" placeholder="Search..." className="w-full" value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
            <ul>{ filteredOptions.length>0 ? (filteredOptions.map((option) => (
                <li key={option} onClick={() => handleSelect(option)}>{option}</li>
            ))):(<li>No data found</li>)}</ul>
        </div>
      )}
    </div>
  );
};


export default Dropdown;
