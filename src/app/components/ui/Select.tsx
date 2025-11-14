/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, {
  useState,
  useRef,
  useEffect,
  ForwardedRef,
  ChangeEvent,
} from "react";
import { ChevronDown, Check, Search, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import Button from "./Button";
import Input from "./Input";

/* --------------------------------------------
   Types
---------------------------------------------*/

export type SelectOption = {
  value: string | number;
  label: React.ReactNode;
  disabled?: boolean;
  description?: string;
};

export interface SelectProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  options?: SelectOption[];
  value?: any;
  defaultValue?: any;
  placeholder?: string;
  multiple?: boolean;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  description?: string;
  error?: string;
  searchable?: boolean;
  clearable?: boolean;
  loading?: boolean;
  id?: string;
  name?: string;
  onChange?: (value: any) => void;
  onOpenChange?: (isOpen: boolean) => void;
}

/* --------------------------------------------
   Component — with forwardRef
---------------------------------------------*/

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      className,
      options = [],
      value,
      placeholder = "Select an option",
      multiple = false,
      disabled = false,
      required = false,
      label,
      description,
      error,
      searchable = false,
      clearable = false,
      loading = false,
      id,
      name,
      onChange,
      onOpenChange,
      ...props
    },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const selectId =
      id || `select-${Math.random().toString(36).substring(2, 11)}`;

    /** Filter options by search */
    const filteredOptions =
      searchable && searchTerm
        ? options.filter(
            (option) =>
              option.label
                ?.toString()
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              option.value
                ?.toString()
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase())
          )
        : options;

    /** Selected label for display */
    const getSelectedDisplay = () => {
      if (!value || value === "") return placeholder;

      if (multiple) {
        const selectedOptions = options.filter((opt) =>
          value.includes(opt.value)
        );
        if (selectedOptions.length === 0) return placeholder;
        if (selectedOptions.length === 1) return selectedOptions[0].label;
        return `${selectedOptions.length} items selected`;
      }

      const selected = options.find((opt) => opt.value === value);
      return selected ? selected.label : placeholder;
    };

    /** Toggle dropdown */
    const handleToggle = () => {
      if (disabled) return;
      const nextState = !isOpen;
      setIsOpen(nextState);
      onOpenChange?.(nextState);

      if (!nextState) setSearchTerm("");
    };

    /** Selecting option */
    const handleOptionSelect = (opt: SelectOption) => {
      if (multiple) {
        const arr = Array.isArray(value) ? [...value] : [];
        const exists = arr.includes(opt.value);

        const newValue = exists
          ? arr.filter((v) => v !== opt.value)
          : [...arr, opt.value];

        onChange?.(newValue);
      } else {
        onChange?.(opt.value);
        setIsOpen(false);
        onOpenChange?.(false);
      }
    };

    /** Clear selection */
    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      onChange?.(multiple ? [] : "");
    };

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    };

    const isSelected = (val: any) =>
      multiple ? value?.includes(val) : value === val;

    const hasValue = multiple
      ? value?.length > 0
      : value !== undefined && value !== "";

    /** Close on outside click */
    useEffect(() => {
      const handleClick = (event: MouseEvent) => {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
          setSearchTerm("");
          onOpenChange?.(false);
        }
      };

      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setIsOpen(false);
          setSearchTerm("");
          onOpenChange?.(false);
        }
      };

      document.addEventListener("mousedown", handleClick);
      document.addEventListener("keydown", handleEsc);

      return () => {
        document.removeEventListener("mousedown", handleClick);
        document.removeEventListener("keydown", handleEsc);
      };
    }, [onOpenChange]);

    /* --------------------------------------------
       JSX
    ---------------------------------------------*/

    return (
      <div ref={wrapperRef} className={cn("relative", className)}>
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-medium mb-2 block text-foreground"
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          {/* Trigger button */}
          <button
            ref={ref}
            id={selectId}
            type="button"
            className={cn(
              "flex h-10 w-full items-center justify-between rounded-md border border-[#E5E7EB] bg-white text-[#64748B] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50",
              error && "border-destructive focus:ring-destructive",
              !hasValue && "text-muted-foreground"
            )}
            onClick={handleToggle}
            disabled={disabled}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            {...props}
          >
            <span className="truncate">{getSelectedDisplay()}</span>

            <div className="flex items-center gap-1">
              {loading && (
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 
                      1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              )}

              {clearable && hasValue && !loading && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-4 w-4"
                  onClick={handleClear}
                >
                  <X className="h-3 w-3" />
                </Button>
              )}

              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  isOpen && "rotate-180"
                )}
              />
            </div>
          </button>

          {/* Hidden native select for forms */}
          <select
            name={name}
            value={value || ""}
            onChange={() => {}}
            className="sr-only"
            tabIndex={-1}
            multiple={multiple}
            required={required}
          >
            <option value="">Select...</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {typeof opt.label === "string"
                  ? opt.label
                  : String(opt.value ?? "")}
              </option>
            ))}
          </select>

          {/* Dropdown menu */}
          {isOpen && (
            <div className="absolute z-50 w-full mt-1 bg-white text-black border border-border rounded-md shadow-md">
              {searchable && (
                <div className="p-2 border-b">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search options..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                  </div>
                </div>
              )}

              <div className="py-1 max-h-60 overflow-auto">
                {filteredOptions.length === 0 ? (
                  <div className="px-3 py-2 text-sm text-muted-foreground">
                    {searchTerm ? "No options found" : "No options available"}
                  </div>
                ) : (
                  filteredOptions.map((opt) => (
                    <div
                      key={opt.value}
                      className={cn(
                        "flex cursor-pointer items-center rounded-sm px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
                        isSelected(opt.value) &&
                          "bg-primary text-primary-foreground",
                        opt.disabled && "pointer-events-none opacity-50"
                      )}
                      onClick={() => !opt.disabled && handleOptionSelect(opt)}
                    >
                      <span className="flex-1">{opt.label}</span>
                      {multiple && isSelected(opt.value) && (
                        <Check className="h-4 w-4" />
                      )}
                      {opt.description && (
                        <span className="text-xs text-muted-foreground ml-2">
                          {opt.description}
                        </span>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {description && !error && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}

        {error && <p className="text-sm text-destructive mt-1">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
