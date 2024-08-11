"use client";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type = "text", id, placeholder, value, onChange, ...restProps }, ref) => {
  const [hasValue, setHasValue] = useState(false);

  const localRef = useRef();
  const inputRef = ref || localRef;

  useEffect(() => {
    if (value) {
      setHasValue(true);
    } else {
      setHasValue(false);
    }
  }, [value]);

  const handleInputChange = (e) => {
    setHasValue(e.target.value !== "");
    if (onChange) {
      onChange(e); 
    }
  };

  const handleContainerClick = () => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="relative" onClick={handleContainerClick}>
      <input
        type={type}
        className={cn(
          "border-b bg-transparent py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-colors peer",
          className
        )}
        id={id}
        ref={inputRef}
        value={value}
        onChange={handleInputChange}
        autoComplete="off"
        {...restProps}
      />
      <label
        htmlFor={id}
        className={cn(
          "absolute left-0 top-1 text-gray-400 text-sm cursor-text transition-all",
          {
            "peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-600": true,
            "text-xs -top-4 text-blue-600": hasValue,
          }
        )}
      >
        {placeholder}
      </label>
    </div>
  );
});

Input.displayName = "Input";

export { Input };
