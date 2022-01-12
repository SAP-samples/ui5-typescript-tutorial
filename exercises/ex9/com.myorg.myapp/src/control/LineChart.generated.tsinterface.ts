import { CSSColor } from "sap/ui/core/library";
import ChartRecord from "com/myorg/myapp/control/ChartRecord";
import { $ControlSettings } from "sap/ui/core/Control";

declare module "./LineChart" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $LineChartSettings extends $ControlSettings {
        title?: string;
        color?: CSSColor;
        records?: ChartRecord[] | ChartRecord;
    }

    export default interface LineChart {

        // property: title
        getTitle(): string;
        setTitle(title: string): this;

        // property: color
        getColor(): CSSColor;
        setColor(color: CSSColor): this;

        // aggregation: records
        getRecords(): ChartRecord[];
        addRecord(records: ChartRecord): this;
        insertRecord(records: ChartRecord, index: number): this;
        removeRecord(records: number | string | ChartRecord): this;
        removeAllRecords(): ChartRecord[];
        indexOfRecord(records: ChartRecord): number;
        destroyRecords(): this;
    }
}
