import PropTypes from "prop-types";

const FormInputField = ({
  name,
  label,
  type,
  full = true,
  register,
  errors,
  ...attrs
}) => {
  return (
    <div
      className={`flex flex-col gap-[0.5] mb-[13px] text-[#00071466] flex-grow ${
        full ? "w-full" : "max-w-full"
      }`}
    >
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        {...attrs}
        {...register(name)}
        placeholder={label}
        className="
                    border border-[#00071432] rounded p-2 outline-none 
                    file:mr-2 file:py-2 file:px-6 text-[12px]
                    file:rounded file:border-0
                    file:text-sm file:font-medium
                    file:bg-blue-50 file:text-blue-700
                    hover:file:cursor-pointer hover:file:bg-amber-50
                    hover:file:text-amber-700 text-[#00071466]
                "
      />
      {errors[name] && (
        <span className="text-red-500 pt-2">{errors[name].message}</span>
      )}
    </div>
  );
};

FormInputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  full: PropTypes.bool,
  attrs: PropTypes.array,
  register: PropTypes.func,
  errors: PropTypes.object,
};

export default FormInputField;
