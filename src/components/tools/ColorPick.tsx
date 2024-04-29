import { useMemo, useState } from 'react';
import { ColorPicker, Space } from 'antd';
import type { ColorPickerProps, GetProp } from 'antd';
import Icons from '@/helpers/Icons';

type Color = GetProp<ColorPickerProps, 'value'>;
type Format = GetProp<ColorPickerProps, 'format'>;

type ColorType = {
    colorDefault : string,
    action : (color : string) => void
}

export function ColorTool({colorDefault, action } : ColorType) {
    
  const [colorHex, setColorHex] = useState<Color>(colorDefault);
  const [formatHex, setFormatHex] = useState<Format | undefined>('hex');
  const [isLoading, setIsLoading] = useState(false)
  // const dispacth = useDispatch()

  const hexString = useMemo<string>(
    () => (typeof colorHex === 'string' ? colorHex : colorHex?.toHexString()),
    [colorHex]
  );

  const handleChangeColor = (value : Color) => {
    setIsLoading(true)
    setColorHex(() => value?.toHexString())
    action(value?.toHexString())
    setIsLoading(false)
  }

  return (
    <Space>
      <ColorPicker
        size={"large"}
        format={formatHex}
        value={colorHex}
        onChange={(value) => handleChangeColor(value)}
        onFormatChange={setFormatHex}
      />
      <span>HEX: {hexString}</span>
     {isLoading && <><span style={{marginLeft : '1%'}}>{Icons({name : 'LoadingOutlined'})}</span>
      <span style={{marginLeft : '1%'}} className='text-truncate'>Chargement....</span></>}
    </Space>
  );
}