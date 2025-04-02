import { ValueColor } from "sap/m/library";
import { IconColor } from "sap/ui/core/library";

export const enum Threshold {
	Warm = 4,
	Hot = 5
}

export default {
	formatIconColor(temperature: Threshold): IconColor|string {
		if (temperature < Threshold.Warm) {
			return "#0984e3";
		} else if (temperature >= Threshold.Warm && temperature < Threshold.Hot) {
			return IconColor.Critical;
		} else {
			return IconColor.Negative;
		}
	},

	formatValueColor(temperature: Threshold): ValueColor {
		if (temperature < Threshold.Warm) {
			return ValueColor.Neutral;
		} else if (temperature >= Threshold.Warm && temperature < Threshold.Hot) {
			return ValueColor.Critical;
		} else {
			return ValueColor.Error;
		}
	}
};
