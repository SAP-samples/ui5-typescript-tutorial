import { CSSColor } from "sap/ui/core/library";
import ChartRecord from "com/myorg/myapp/control/ChartRecord";
import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";
import { $ControlSettings } from "sap/ui/core/Control";

declare module "./LineChart" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $LineChartSettings extends $ControlSettings {
        title?: string | PropertyBindingInfo;
        color?: CSSColor | PropertyBindingInfo | `{${string}}`;
        records?: ChartRecord[] | ChartRecord | AggregationBindingInfo | `{${string}}`;
    }

    export default interface LineChart {

        // property: title

        /**
         * Gets current value of property "title".
         *
         * @returns Value of property "title"
         */
        getTitle(): string;

        /**
         * Sets a new value for property "title".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * @param title New value for property "title"
         * @returns Reference to "this" in order to allow method chaining
         */
        setTitle(title: string): this;

        // property: color

        /**
         * Gets current value of property "color".
         *
         * @returns Value of property "color"
         */
        getColor(): CSSColor;

        /**
         * Sets a new value for property "color".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * @param color New value for property "color"
         * @returns Reference to "this" in order to allow method chaining
         */
        setColor(color: CSSColor): this;

        // aggregation: records

        /**
         * Gets content of aggregation "records".
         */
        getRecords(): ChartRecord[];

        /**
         * Adds some record to the aggregation "records".
         *
         * @param record The record to add; if empty, nothing is inserted
         * @returns Reference to "this" in order to allow method chaining
         */
        addRecord(records: ChartRecord): this;

        /**
         * Inserts a record into the aggregation "records".
         *
         * @param record The record to insert; if empty, nothing is inserted
         * @param index The "0"-based index the record should be inserted at; for
         *              a negative value of "iIndex", the record is inserted at position 0; for a value
         *              greater than the current size of the aggregation, the record is inserted at
         *              the last position
         * @returns Reference to "this" in order to allow method chaining
         */
        insertRecord(records: ChartRecord, index: number): this;

        /**
         * Removes a record from the aggregation "records".
         *
         * @param record The record to remove or its index or id
         * @returns The removed record or "null"
         */
        removeRecord(records: number | string | ChartRecord): this;

        /**
         * Removes all the controls from the aggregation "records".
         * Additionally, it unregisters them from the hosting UIArea.
         *
         * @returns  An array of the removed elements (might be empty)
         */
        removeAllRecords(): ChartRecord[];

        /**
         * Checks for the provided "com.myorg.myapp.control.ChartRecord" in the aggregation "records".
         * and returns its index if found or -1 otherwise.
         *
         * @param record The record whose index is looked for
         * @returns The index of the provided control in the aggregation if found, or -1 otherwise
         */
        indexOfRecord(records: ChartRecord): number;

        /**
         * Destroys all the records in the aggregation "records".
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        destroyRecords(): this;
    }
}
