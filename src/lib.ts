// @ts-types="npm:@types/culori"
import { interpolate, type Oklch, wcagContrast } from "culori";

const cutNumber = (n: number) => {
    return +n.toFixed(6);
};

function oklchToString(input: Oklch) {
    const { l, c, h } = input;
    return `oklch(${Number.parseFloat((cutNumber(l ?? 0) * 100).toFixed(6))}% ${
        cutNumber(c ?? 0)
    } ${cutNumber(h ?? 0)})`;
}

export function isDark(color: string) {
    if (wcagContrast(color, "black") < wcagContrast(color, "white")) {
        return true;
    }
    return false;
}

export function generateForegroundColorFrom(
    input: string,
    percentage: number,
) {
    const result = interpolate(
        [input, isDark(input) ? "white" : "black"],
        "oklch",
    )(percentage);
    return oklchToString(result);
}

export function generateDarkenColorFrom(
    input: string,
    percentage: number,
) {
    const result = interpolate([input, "black"], "oklch")(percentage);
    return oklchToString(result);
}

export function addGroupSuffix(input: string, suffix: string) {
    // return `${input}`;
    return `{${input.replaceAll(" ", ";")}}${suffix}`;
}
