import { useId } from "react";

interface InputElement {
    controlInput: boolean,
    type: string
    label: string,
    initValue: string,
    value: string,
    action: (value: string) => void,
    name : string,
    error : string
}

function InputText({ controlInput, type, label, initValue, value, action, name, error }: InputElement) {

    const id = useId();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        action(e.target.value)
    }

    return <>
        <div className="form-group mb-3">
            <label htmlFor={id}>{label}</label>
            {controlInput ? <input
                type={type}
                className="form-control"
                name={name}
                value={value}
                id={id}
                placeholder={initValue}
                onChange={handleChange} /> :
                <input
                    type={type}
                    className="form-control"
                    name={name}
                    id={id}
                    placeholder={initValue}
                     />

            }
            <small id="emailHelp" className="form-text text-danger">{error}</small>
        </div>
    </>
}

export default InputText;