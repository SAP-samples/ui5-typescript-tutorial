import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $ElementSettings } from "sap/ui/core/Element";

declare module "./ChartRecord" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $ChartRecordSettings extends $ElementSettings {
        label?: string | PropertyBindingInfo;
        value?: number | PropertyBindingInfo | `{${string}}`;
    }

    export default interface ChartRecord {

        // property: label

        /**
         * Gets current value of property "label".
         *
         * @returns Value of property "label"
         */
        getLabel(): string;

        /**
         * Sets a new value for property "label".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * @param label New value for property "label"
         * @returns Reference to "this" in order to allow method chaining
         */
        setLabel(label: string): this;

        // property: value

        /**
         * Gets current value of property "value".
         *
         * @returns Value of property "value"
         */
        getValue(): number;

        /**
         * Sets a new value for property "value".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * @param value New value for property "value"
         * @returns Reference to "this" in order to allow method chaining
         */
        setValue(value: number): this;
    }
}
