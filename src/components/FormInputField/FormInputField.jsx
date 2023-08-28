import PropTypes from 'prop-types';

const FormInputField = ({ name, label, type, required, full=true, ...attrs }) => {
    return (
        <div className={`flex flex-col gap-[0.5] my-4 text-[#00071466] flex-grow ${ full ? 'w-full' : 'max-w-full' }`}>
            <label htmlFor={label}>{label}</label>
            <input
                id={`${name}Label`}
                type={type}
                name={name}
                required={required}
                {...attrs}
                placeholder={type === 'text' ? 'Type Here...' : ''}
                className='
                    border border-[#00071432] rounded p-2 outline-none 
                    file:mr-2 file:py-2 file:px-6
                    file:rounded file:border-0
                    file:text-sm file:font-medium
                    file:bg-blue-50 file:text-blue-700
                    hover:file:cursor-pointer hover:file:bg-amber-50
                    hover:file:text-amber-700 text-[#00071466]
                '
            />
        </div>
    );
}

FormInputField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    full: PropTypes.bool,
    attrs: PropTypes.array
};

export default FormInputField;