import { StepProps, Steps } from 'antd';

export type Item = {
   value : StepProps[]
}
function Step({value} : Item) {
    return <>
        <Steps items={value} />
    </>
}

export default Step;