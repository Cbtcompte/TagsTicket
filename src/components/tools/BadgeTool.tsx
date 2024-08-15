import { Badge } from 'antd';
import { ReactNode } from 'react';

export type ElementBadge = {
    textBadge: string,
    colorBadge: string,
}
interface BadgeElement {
    testColor : ElementBadge
    children: ReactNode
}

function BadgeTool({ testColor, children }: BadgeElement) {
    return <Badge.Ribbon text={testColor.textBadge} color={testColor.colorBadge}>
        {children}
    </Badge.Ribbon>
}

export default BadgeTool;