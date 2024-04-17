import { useId } from "react";

interface TextareaElement {
    label: string,
    initValue: string,
    value: string,
    action: (value: string) => void,
    col: number,
    row: number,
    name: string,
    controlInput: boolean
}

function Textarea({ label, initValue, value, action, col, row, name, controlInput }: TextareaElement) {

    const id = useId();

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        action(e.target.value)
    }

    return <>
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            {controlInput ?
                (<textarea name={name} placeholder={initValue} value={value} className="form-control" id={id} onChange={handleChange} rows={row} cols={col}></textarea>) :
                (<textarea name={name} placeholder={initValue} className="form-control" id={id} rows={row} cols={col}></textarea>)}
        </div>
    </>
}

export default Textarea;