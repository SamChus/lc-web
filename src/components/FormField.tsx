import { UseFormRegister, FieldPath } from "react-hook-form";

interface FormFieldProps<T extends Record<string, any>> {
  label: string;
  placeholder: string;
  name: FieldPath<T>;
  register: UseFormRegister<T>;
  error?: string;
  type?: "text" | "email" | "tel" | "textarea";
  options?: string[];
  rows?: number;
}

const FormField = <T extends Record<string, any>>({
  label,
  placeholder,
  name,
  register,
  error,
  type = "text",
  options,
  rows = 3,
}: FormFieldProps<T>) => {
  const baseClasses =
    "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200";

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      {options ? (
        <select {...register(name)} className={baseClasses}>
          {options.map((option, index) => (
            <option key={index} value={index === 0 ? "" : option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          {...register(name)}
          placeholder={placeholder}
          rows={rows}
          className={baseClasses}
        />
      ) : (
        <input
          {...register(name)}
          type={type}
          placeholder={placeholder}
          className={baseClasses}
        />
      )}

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FormField;
