import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $ControlSettings } from "sap/ui/core/Control";

declare module "./WindDirection" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $WindDirectionSettings extends $ControlSettings {

        /**
         * The direction in degrees FROM which the wind blows (this is the internationally common definition). Value 0 means: wind blows from North to South.
         */
        direction?: number | PropertyBindingInfo | `{${string}}`;
    }

    export default interface WindDirection {

        // property: direction

        /**
         * Gets current value of property "direction".
         *
         * The direction in degrees FROM which the wind blows (this is the internationally common definition). Value 0 means: wind blows from North to South.
         *
         * @returns Value of property "direction"
         */
        getDirection(): number;

        /**
         * Sets a new value for property "direction".
         *
         * The direction in degrees FROM which the wind blows (this is the internationally common definition). Value 0 means: wind blows from North to South.
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * @param direction New value for property "direction"
         * @returns Reference to "this" in order to allow method chaining
         */
        setDirection(direction: number): this;
    }
}
