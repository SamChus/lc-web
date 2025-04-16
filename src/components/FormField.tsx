import { ChangeEvent } from "react";


interface FormFieldProps {
  label: string;
  placeholder: string;
  type?: "text" | "email" | "textarea";
  rows?: number;
  options?: string[];
  name: string;
  register: any;
  error?: string;
  onChange?: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  placeholder,
  type = "text",
  rows,
  options,
  name,
  register,
  error,
  onChange,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {options ? (
        <select
          {...register(name)}
          className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          onChange={onChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          {...register(name)}
          placeholder={placeholder}
          className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          rows={rows}
          onChange={onChange}
        />
      ) : (
        <input
          {...register(name)}
          type={type}
          placeholder={placeholder}
          className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          onChange={onChange}
        />
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};


export default FormField;