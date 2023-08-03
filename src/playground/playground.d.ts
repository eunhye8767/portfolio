// style
export interface StyleInputProps {
  $focus?: boolean;
  $value?: boolean;
  $valid?: { error: boolean; success: boolean };
}

export interface StyleSelectProps {
  $expand: boolean;
  $selected: boolean;
}

// component
export interface ValidProps {
  valid: {
    error: boolean;
    success: boolean;
    msg: string;
  };
}

export interface InputProps {
  label: string;
  placeholder: string;
  initialValue: string;
}

export interface SelectProps {
  initialLabel: string;
  buttonOption: string[];
  checkboxOption: { id: number; checked: boolean; value: string }[];
}
