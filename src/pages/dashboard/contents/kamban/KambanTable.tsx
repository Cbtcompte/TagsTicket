import { ColumnDirective, ColumnsDirective, KanbanComponent } from "@syncfusion/ej2-react-kanban";

export function KambanView() {
    return <>
        <KanbanComponent id="kanban" keyField="Status">
            <ColumnsDirective>
                <ColumnDirective headerText="To Do" keyField="Open" />
                <ColumnDirective headerText="In Progress" keyField="InProgress" />
                <ColumnDirective headerText="Testing" keyField="Testing" />
                <ColumnDirective headerText="Done" keyField="Close" />
            </ColumnsDirective>
        </KanbanComponent></>
}