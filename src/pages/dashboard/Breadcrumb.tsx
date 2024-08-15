import { Breadcrumb } from "antd";

export function BreadcrumbView() {
    return <Breadcrumb
        separator=">"
        items={[
            {
                title: 'Home',
            },
            {
                title: 'Application Center',
                href: '',
            },
            {
                title: 'Application List',
                href: '',
            },
            {
                title: 'An Application',
            },
        ]}
    />
}