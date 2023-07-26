// style
export interface StyleInputProps {
  $focus?: boolean;
  $value?: boolean;
  $valid?: { error: boolean; success: boolean };
}

// component
export interface ValidProps {
  valid: { error: boolean; success: boolean };
}

export interface InputProps {
  label: string;
  placeholder: string;
  initialValue: string;
  typeNumber: number;
  maxLength: number;
}
