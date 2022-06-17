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
        getLabel(): string;
        setLabel(label: string): this;

        // property: value
        getValue(): number;
        setValue(value: number): this;
    }
}
