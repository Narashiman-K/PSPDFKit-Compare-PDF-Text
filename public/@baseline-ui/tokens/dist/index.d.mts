import * as _vanilla_extract_sprinkles from '@vanilla-extract/sprinkles';
import { StyleRule } from '@vanilla-extract/css';

declare const Layers: {
    readonly RESET: string;
    readonly BASE: string;
    readonly VARIANTS: string;
    readonly COMPOUND_VARIANTS: string;
};
declare const createLayerSprinkles: (layer: string) => ((props: {
    paddingBlockStart?: ("none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | {
        mobile?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        tablet?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        desktop?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null>;
    paddingInlineEnd?: ("none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | {
        mobile?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        tablet?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        desktop?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null>;
    paddingBlockEnd?: ("none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | {
        mobile?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        tablet?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        desktop?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null>;
    paddingInlineStart?: ("none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | {
        mobile?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        tablet?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        desktop?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null>;
    marginBlockStart?: ("none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | {
        mobile?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        tablet?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        desktop?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null>;
    marginInlineEnd?: ("none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | {
        mobile?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        tablet?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        desktop?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null>;
    marginBlockEnd?: ("none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | {
        mobile?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        tablet?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        desktop?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null>;
    marginInlineStart?: ("none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | {
        mobile?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        tablet?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        desktop?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null>;
    gap?: ("none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | {
        mobile?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        tablet?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        desktop?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null>;
    paddingLeft?: ("none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | {
        mobile?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        tablet?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        desktop?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null>;
    paddingRight?: ("none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | {
        mobile?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        tablet?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        desktop?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null>;
    paddingTop?: ("none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | {
        mobile?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        tablet?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        desktop?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null>;
    paddingBottom?: ("none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | {
        mobile?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        tablet?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        desktop?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null>;
    padding?: ("none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | {
        mobile?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        tablet?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        desktop?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null>;
    paddingX?: ("none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | {
        mobile?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        tablet?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        desktop?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null>;
    paddingY?: ("none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | {
        mobile?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        tablet?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        desktop?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null>;
    marginLeft?: ("none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | {
        mobile?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        tablet?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        desktop?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null>;
    marginRight?: ("none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | {
        mobile?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        tablet?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        desktop?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null>;
    marginTop?: ("none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | {
        mobile?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        tablet?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        desktop?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null>;
    marginBottom?: ("none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | {
        mobile?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        tablet?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        desktop?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null>;
    margin?: ("none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | {
        mobile?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        tablet?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        desktop?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null>;
    marginX?: ("none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | {
        mobile?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        tablet?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        desktop?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null>;
    marginY?: ("none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | {
        mobile?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        tablet?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
        desktop?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null>;
} & {
    borderStartStartRadius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
    borderStartEndRadius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
    borderEndStartRadius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
    borderEndEndRadius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
    borderRadius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
    borderTopRadius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
    borderBottomRadius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
    borderLeftRadius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
    borderRightRadius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
} & {
    boxShadow?: "medium" | "low" | undefined;
} & {
    opacity?: "none" | "medium" | "low" | "high" | undefined;
} & {
    typography?: "heading.h6.regular" | "heading.h6.medium" | "heading.h6.semibold" | "heading.h5.regular" | "heading.h5.medium" | "heading.h5.semibold" | "heading.h4.regular" | "heading.h4.medium" | "heading.h4.semibold" | "heading.h3.regular" | "heading.h3.medium" | "heading.h3.semibold" | "heading.h2.regular" | "heading.h2.medium" | "heading.h2.semibold" | "heading.h1.regular" | "heading.h1.medium" | "heading.h1.semibold" | "label.sm.regular" | "label.sm.medium" | "label.sm.semibold" | "label.md.regular" | "label.md.medium" | "label.md.semibold" | "label.lg.regular" | "label.lg.medium" | "label.lg.semibold" | "body.sm.regular" | "body.sm.medium" | "body.sm.semibold" | "body.md.regular" | "body.md.medium" | "body.md.semibold" | "body.lg.regular" | "body.lg.medium" | "body.lg.semibold" | undefined;
} & {
    color?: "text.primary" | "text.secondary" | "text.helper" | "text.placeholder" | "text.disabled" | "text.inverse" | "icon.primary" | "icon.secondary" | "icon.disabled" | "icon.inverse" | "icon.interactive" | "interactive.primary" | "interactive.hovered" | "interactive.active" | "interactive.visited" | "interactive.disabled" | "support.error.subtler" | "support.error.subtle" | "support.error.medium" | "support.error.strong" | "support.success.subtler" | "support.success.subtle" | "support.success.medium" | "support.success.strong" | "support.warning.subtler" | "support.warning.subtle" | "support.warning.medium" | "support.warning.strong" | "support.info.subtler" | "support.info.subtle" | "support.info.medium" | "support.info.strong" | "focused.primary" | "focused.inset" | undefined;
    backgroundColor?: "background.primary.subtle" | "background.primary.medium" | "background.primary.strong" | "background.secondary.subtle" | "background.secondary.medium" | "background.secondary.strong" | "background.inverse.subtle" | "background.inverse.medium" | "background.inverse.strong" | "background.overlay.subtle" | "background.overlay.medium" | "background.positive.subtle" | "background.positive.medium" | "background.positive.strong" | "support.error.subtler" | "support.error.subtle" | "support.error.medium" | "support.error.strong" | "support.success.subtler" | "support.success.subtle" | "support.success.medium" | "support.success.strong" | "support.warning.subtler" | "support.warning.subtle" | "support.warning.medium" | "support.warning.strong" | "support.info.subtler" | "support.info.subtle" | "support.info.medium" | "support.info.strong" | "focused.primary" | "focused.inset" | undefined;
    borderColor?: "transparent" | "support.error.subtler" | "support.error.subtle" | "support.error.medium" | "support.error.strong" | "support.success.subtler" | "support.success.subtle" | "support.success.medium" | "support.success.strong" | "support.warning.subtler" | "support.warning.subtle" | "support.warning.medium" | "support.warning.strong" | "support.info.subtler" | "support.info.subtle" | "support.info.medium" | "support.info.strong" | "focused.primary" | "focused.inset" | "border.subtle" | "border.medium" | "border.strong" | "border.inverse" | "border.interactive" | "border.disabled" | undefined;
    outlineColor?: "transparent" | "support.error.subtler" | "support.error.subtle" | "support.error.medium" | "support.error.strong" | "support.success.subtler" | "support.success.subtle" | "support.success.medium" | "support.success.strong" | "support.warning.subtler" | "support.warning.subtle" | "support.warning.medium" | "support.warning.strong" | "support.info.subtler" | "support.info.subtle" | "support.info.medium" | "support.info.strong" | "focused.primary" | "focused.inset" | "border.subtle" | "border.medium" | "border.strong" | "border.inverse" | "border.interactive" | "border.disabled" | undefined;
} & {
    position?: ("fixed" | "absolute" | "relative" | {
        mobile?: "fixed" | "absolute" | "relative" | undefined;
        tablet?: "fixed" | "absolute" | "relative" | undefined;
        desktop?: "fixed" | "absolute" | "relative" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "fixed" | "absolute" | "relative" | null>;
    display?: ("none" | "flex" | "grid" | "block" | "inline-flex" | {
        mobile?: "none" | "flex" | "grid" | "block" | "inline-flex" | undefined;
        tablet?: "none" | "flex" | "grid" | "block" | "inline-flex" | undefined;
        desktop?: "none" | "flex" | "grid" | "block" | "inline-flex" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "none" | "flex" | "grid" | "block" | "inline-flex" | null>;
    flexDirection?: ("column" | "column-reverse" | "row" | "row-reverse" | {
        mobile?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
        tablet?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
        desktop?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "column" | "column-reverse" | "row" | "row-reverse" | null>;
    alignItems?: ("stretch" | "center" | "flex-end" | "flex-start" | {
        mobile?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        tablet?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        desktop?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "stretch" | "center" | "flex-end" | "flex-start" | null>;
    alignSelf?: ("stretch" | "center" | "flex-end" | "flex-start" | {
        mobile?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        tablet?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        desktop?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "stretch" | "center" | "flex-end" | "flex-start" | null>;
    flex?: (number | {
        mobile?: number | undefined;
        tablet?: number | undefined;
        desktop?: number | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, number | null>;
    justifyContent?: ("space-between" | "stretch" | "center" | "flex-end" | "flex-start" | {
        mobile?: "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        tablet?: "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        desktop?: "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | null>;
    justifySelf?: ("stretch" | "center" | "flex-end" | "flex-start" | {
        mobile?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        tablet?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        desktop?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "stretch" | "center" | "flex-end" | "flex-start" | null>;
    placeItems?: ("stretch" | "center" | "flex-end" | "flex-start" | {
        mobile?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        tablet?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        desktop?: "stretch" | "center" | "flex-end" | "flex-start" | undefined;
    } | undefined) | _vanilla_extract_sprinkles.ResponsiveArray<1 | 2 | 3, "stretch" | "center" | "flex-end" | "flex-start" | null>;
} & {
    transition?: "transition.medium" | undefined;
    transitionProperty?: "opacity" | "transform" | "background-color" | undefined;
} & {
    readonly flexWrap?: "nowrap" | "wrap" | undefined;
    readonly insetBlockStart?: 0 | undefined;
    readonly insetBlockEnd?: 0 | undefined;
    readonly insetInlineStart?: 0 | undefined;
    readonly insetInlineEnd?: 0 | undefined;
    readonly flexShrink?: 0 | undefined;
    readonly flexGrow?: 0 | 1 | undefined;
    readonly width?: "full" | undefined;
    readonly height?: "full" | undefined;
    readonly cursor?: "pointer" | undefined;
    inset?: 0 | undefined;
} & {
    outline?: "none" | undefined;
    outlineStyle?: "solid" | undefined;
    outlineWidth?: number | undefined;
    outlineOffset?: number | undefined;
    border?: "none" | undefined;
    borderStyle?: "dashed" | "solid" | undefined;
    borderWidth?: number | undefined;
}) => string) & {
    properties: Set<"alignItems" | "alignSelf" | "backgroundColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderStartEndRadius" | "borderStartStartRadius" | "boxShadow" | "color" | "cursor" | "display" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "insetBlockEnd" | "insetBlockStart" | "insetInlineEnd" | "insetInlineStart" | "justifyContent" | "justifySelf" | "marginBlockEnd" | "marginBlockStart" | "marginBottom" | "marginInlineEnd" | "marginInlineStart" | "marginLeft" | "marginRight" | "marginTop" | "opacity" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "paddingBlockEnd" | "paddingBlockStart" | "paddingBottom" | "paddingInlineEnd" | "paddingInlineStart" | "paddingLeft" | "paddingRight" | "paddingTop" | "position" | "transitionProperty" | "width" | "border" | "borderColor" | "borderRadius" | "borderStyle" | "borderWidth" | "flex" | "gap" | "inset" | "margin" | "outline" | "padding" | "placeItems" | "transition" | "typography" | "paddingX" | "paddingY" | "marginX" | "marginY" | "borderTopRadius" | "borderBottomRadius" | "borderLeftRadius" | "borderRightRadius">;
};
type BaseSprinkles = ReturnType<typeof createLayerSprinkles>;

var elevation$3 = {
	low: "0 0 4px 0 rgba(0, 0, 0, 0.4)",
	medium: "0 4px 16px 0 rgba(0, 0, 0, 0.15)"
};
var opacity$3 = {
	none: "0",
	low: "0.1",
	medium: "0.5",
	high: "0.9"
};
var rounded$3 = {
	xs: "2px",
	sm: "4px",
	md: "8px",
	lg: "12px",
	xl: "16px",
	"2xl": "24px",
	full: "9999px"
};
var spacing$3 = {
	xs: "2px",
	sm: "4px",
	md: "8px",
	lg: "12px",
	xl: "16px",
	"2xl": "24px",
	"3xl": "32px",
	"4xl": "40px",
	"5xl": "48px",
	"6xl": "64px",
	"7xl": "80px",
	"8xl": "96px",
	"9xl": "160px"
};
var color$3 = {
	support: {
		error: {
			subtler: "#ffebe9",
			subtle: "#ffd4ce",
			medium: "#c83c29",
			strong: "#8a2100"
		},
		success: {
			subtler: "#ecfeda",
			subtle: "#d4fcac",
			medium: "#5d9d1d",
			strong: "#345805"
		},
		warning: {
			subtler: "#ffecd4",
			subtle: "#ffd4a1",
			medium: "#d46703",
			strong: "#9f4c00"
		},
		info: {
			subtler: "#eff4fb",
			subtle: "#d3dcff",
			medium: "#4537de",
			strong: "#2b1cc1"
		}
	},
	focused: {
		primary: "#4537de",
		inset: "#ffffff"
	},
	background: {
		primary: {
			subtle: "#ffffff",
			medium: "#f6f9fd",
			strong: "#f0f3f9"
		},
		inverse: {
			subtle: "#717885",
			medium: "#3d434e",
			strong: "#2b2e36"
		},
		overlay: {
			subtle: "rgb(100% 100% 100% / 0.25)",
			medium: "rgb(5.49% 7.06% 9.41% / 0.5)"
		},
		secondary: {
			subtle: "#f0f3f9",
			medium: "#d7dce4",
			strong: "#a9aeb7"
		},
		positive: {
			subtle: "#ffffff",
			medium: "#f6f9fd",
			strong: "#f0f3f9"
		}
	},
	text: {
		primary: "#2b2e36",
		secondary: "#4d525d",
		helper: "#606671",
		placeholder: "#717885",
		inverse: "#ffffff",
		disabled: "rgb(16.9% 18% 21.2% / 0.5)"
	},
	icon: {
		primary: "#2b2e36",
		secondary: "#606671",
		inverse: "#ffffff",
		interactive: "#4537de",
		disabled: "rgb(16.9% 18% 21.2% / 0.5)"
	},
	border: {
		subtle: "#f0f3f9",
		medium: "#d7dce4",
		strong: "#a9aeb7",
		inverse: "#2b2e36",
		interactive: "#4537de",
		disabled: "#a9aeb7"
	},
	interactive: {
		primary: "#4537de",
		hovered: "#2b1cc1",
		active: "#190d94",
		visited: "#190d94",
		disabled: "#a9aeb7"
	}
};
var typography$3 = {
	heading: {
		h6: {
			regular: {
				font: "400 0.875rem/1.5 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "500 0.875rem/1.5 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "600 0.875rem/1.5 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			}
		},
		h5: {
			regular: {
				font: "400 1rem/1.5 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "500 1rem/1.5 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "600 1rem/1.5 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			}
		},
		h4: {
			regular: {
				font: "400 1.375rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			},
			medium: {
				font: "500 1.375rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			},
			semibold: {
				font: "600 1.375rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			}
		},
		h3: {
			regular: {
				font: "400 1.5rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			},
			medium: {
				font: "500 1.5rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			},
			semibold: {
				font: "600 1.5rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			}
		},
		h2: {
			regular: {
				font: "400 1.75rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			},
			medium: {
				font: "500 1.75rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			},
			semibold: {
				font: "600 1.75rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			}
		},
		h1: {
			regular: {
				font: "400 2rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			},
			medium: {
				font: "500 2rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			},
			semibold: {
				font: "600 2rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			}
		}
	},
	label: {
		sm: {
			regular: {
				font: "400 0.688rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.05px"
			},
			medium: {
				font: "500 0.688rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.05px"
			},
			semibold: {
				font: "600 0.688rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.05px"
			}
		},
		md: {
			regular: {
				font: "400 0.75rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "500 0.75rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "600 0.75rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			}
		},
		lg: {
			regular: {
				font: "400 0.875rem/1.375 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "500 0.875rem/1.375 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "600 0.875rem/1.375 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			}
		}
	},
	body: {
		sm: {
			regular: {
				font: "400 0.75rem/1.375 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.05px"
			},
			medium: {
				font: "500 0.75rem/1.375 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.05px"
			},
			semibold: {
				font: "600 0.75rem/1.375 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.05px"
			}
		},
		md: {
			regular: {
				font: "400 0.875rem/1.375 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "500 0.875rem/1.375 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "600 0.875rem/1.375 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			}
		},
		lg: {
			regular: {
				font: "400 1rem/1.5 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "500 1rem/1.5 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "600 1rem/1.5 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			}
		}
	}
};
var light = {
	elevation: elevation$3,
	opacity: opacity$3,
	rounded: rounded$3,
	spacing: spacing$3,
	color: color$3,
	typography: typography$3
};

var elevation$2 = {
	low: "0 0 4px 0 rgba(0, 0, 0, 0.4)",
	medium: "0 4px 16px 0 rgba(0, 0, 0, 0.15)"
};
var opacity$2 = {
	none: "0",
	low: "0.1",
	medium: "0.5",
	high: "0.9"
};
var rounded$2 = {
	xs: "2px",
	sm: "4px",
	md: "8px",
	lg: "12px",
	xl: "16px",
	"2xl": "24px",
	full: "9999px"
};
var spacing$2 = {
	xs: "2px",
	sm: "4px",
	md: "8px",
	lg: "12px",
	xl: "16px",
	"2xl": "24px",
	"3xl": "32px",
	"4xl": "40px",
	"5xl": "48px",
	"6xl": "64px",
	"7xl": "80px",
	"8xl": "96px",
	"9xl": "160px"
};
var color$2 = {
	support: {
		error: {
			subtler: "#711b00",
			subtle: "#b53007",
			medium: "#e75541",
			strong: "#ffd4ce"
		},
		success: {
			subtler: "#223a03",
			subtle: "#567c06",
			medium: "#8cd444",
			strong: "#ecfeda"
		},
		warning: {
			subtler: "#562800",
			subtle: "#bd5a00",
			medium: "#eb7f00",
			strong: "#ffd4a1"
		},
		info: {
			subtler: "#190d94",
			subtle: "#4537de",
			medium: "#777cf0",
			strong: "#d3dcff"
		}
	},
	focused: {
		primary: "#a8bbf8",
		inset: "#2b2e36"
	},
	background: {
		primary: {
			subtle: "#2b2e36",
			medium: "#21242c",
			strong: "#0e1218"
		},
		inverse: {
			subtle: "#717885",
			medium: "#f0f3f9",
			strong: "#ffffff"
		},
		secondary: {
			subtle: "#3d434e",
			medium: "#4d525d",
			strong: "#606671"
		},
		overlay: {
			subtle: "rgb(100% 100% 100% / 0.25)",
			medium: "rgb(5.49% 7.06% 9.41% / 0.5)"
		},
		positive: {
			subtle: "#f0f3f9",
			medium: "#f6f9fd",
			strong: "#ffffff"
		}
	},
	text: {
		primary: "#ffffff",
		secondary: "#d7dce4",
		helper: "#a9aeb7",
		placeholder: "#717885",
		inverse: "#2b2e36",
		disabled: "rgb(100% 100% 100% / 0.5)"
	},
	icon: {
		primary: "#ffffff",
		secondary: "#a9aeb7",
		inverse: "#2b2e36",
		interactive: "#a8bbf8",
		disabled: "rgb(100% 100% 100% / 0.5)"
	},
	border: {
		subtle: "#3d434e",
		medium: "#4d525d",
		strong: "#606671",
		inverse: "#ffffff",
		interactive: "#a8bbf8",
		disabled: "#606671"
	},
	interactive: {
		primary: "#a8bbf8",
		hovered: "#d3dcff",
		active: "#eff4fb",
		visited: "#eff4fb",
		disabled: "#606671"
	}
};
var typography$2 = {
	heading: {
		h6: {
			regular: {
				font: "400 0.875rem/1.5 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "500 0.875rem/1.5 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "600 0.875rem/1.5 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			}
		},
		h5: {
			regular: {
				font: "400 1rem/1.5 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "500 1rem/1.5 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "600 1rem/1.5 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			}
		},
		h4: {
			regular: {
				font: "400 1.375rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			},
			medium: {
				font: "500 1.375rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			},
			semibold: {
				font: "600 1.375rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			}
		},
		h3: {
			regular: {
				font: "400 1.5rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			},
			medium: {
				font: "500 1.5rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			},
			semibold: {
				font: "600 1.5rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			}
		},
		h2: {
			regular: {
				font: "400 1.75rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			},
			medium: {
				font: "500 1.75rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			},
			semibold: {
				font: "600 1.75rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			}
		},
		h1: {
			regular: {
				font: "400 2rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			},
			medium: {
				font: "500 2rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			},
			semibold: {
				font: "600 2rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0"
			}
		}
	},
	label: {
		sm: {
			regular: {
				font: "400 0.688rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.05px"
			},
			medium: {
				font: "500 0.688rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.05px"
			},
			semibold: {
				font: "600 0.688rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.05px"
			}
		},
		md: {
			regular: {
				font: "400 0.75rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "500 0.75rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "600 0.75rem/1.25 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			}
		},
		lg: {
			regular: {
				font: "400 0.875rem/1.375 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "500 0.875rem/1.375 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "600 0.875rem/1.375 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			}
		}
	},
	body: {
		sm: {
			regular: {
				font: "400 0.75rem/1.375 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.05px"
			},
			medium: {
				font: "500 0.75rem/1.375 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.05px"
			},
			semibold: {
				font: "600 0.75rem/1.375 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.05px"
			}
		},
		md: {
			regular: {
				font: "400 0.875rem/1.375 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "500 0.875rem/1.375 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "600 0.875rem/1.375 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			}
		},
		lg: {
			regular: {
				font: "400 1rem/1.5 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "500 1rem/1.5 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "600 1rem/1.5 -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
				letterSpacing: "0.1px"
			}
		}
	}
};
var dark = {
	elevation: elevation$2,
	opacity: opacity$2,
	rounded: rounded$2,
	spacing: spacing$2,
	color: color$2,
	typography: typography$2
};

var elevation$1 = {
	low: "0 0 4px 0 rgba(0, 0, 0, 0.4)",
	medium: "0 4px 16px 0 rgba(0, 0, 0, 0.15)"
};
var opacity$1 = {
	none: "0",
	low: "0.1",
	medium: "0.5",
	high: "0.9"
};
var rounded$1 = {
	xs: "0",
	sm: "0",
	md: "12px",
	lg: "12px",
	xl: "24px",
	"2xl": "24px",
	full: "9999px"
};
var spacing$1 = {
	xs: "2px",
	sm: "4px",
	md: "8px",
	lg: "12px",
	xl: "16px",
	"2xl": "24px",
	"3xl": "32px",
	"4xl": "40px",
	"5xl": "48px",
	"6xl": "64px",
	"7xl": "80px",
	"8xl": "96px",
	"9xl": "160px"
};
var color$1 = {
	support: {
		error: {
			subtler: "#ffebe9",
			subtle: "#ffd4ce",
			medium: "#c83c29",
			strong: "#8a2100"
		},
		success: {
			subtler: "#ecfeda",
			subtle: "#d4fcac",
			medium: "#5d9d1d",
			strong: "#345805"
		},
		warning: {
			subtler: "#ffecd4",
			subtle: "#ffd4a1",
			medium: "#d46703",
			strong: "#9f4c00"
		},
		info: {
			subtler: "#eff4fb",
			subtle: "#d3dcff",
			medium: "#4537de",
			strong: "#2b1cc1"
		}
	},
	focused: {
		primary: "#777cf0",
		inset: "#ffffff"
	},
	background: {
		primary: {
			subtle: "#ffffff",
			medium: "#f6f9fd",
			strong: "#f0f3f9"
		},
		inverse: {
			subtle: "#717885",
			medium: "#21242c",
			strong: "#000000"
		},
		overlay: {
			subtle: "rgb(100% 100% 100% / 0.25)",
			medium: "rgb(5.49% 7.06% 9.41% / 0.5)"
		},
		secondary: {
			subtle: "#f0f3f9",
			medium: "#d7dce4",
			strong: "#a9aeb7"
		},
		positive: {
			subtle: "#ffffff",
			medium: "#f6f9fd",
			strong: "#f0f3f9"
		}
	},
	text: {
		primary: "#000000",
		secondary: "#2b2e36",
		helper: "#3d434e",
		placeholder: "#606671",
		inverse: "#ffffff",
		disabled: "rgb(0% 0% 0% / 0.5)"
	},
	icon: {
		primary: "#000000",
		secondary: "#3d434e",
		inverse: "#ffffff",
		interactive: "#000000",
		disabled: "rgb(0% 0% 0% / 0.5)"
	},
	border: {
		subtle: "#f0f3f9",
		medium: "#d7dce4",
		strong: "#a9aeb7",
		inverse: "#2b2e36",
		interactive: "#000000",
		disabled: "#a9aeb7"
	},
	interactive: {
		primary: "#000000",
		hovered: "#21242c",
		active: "#000000",
		visited: "#4537de",
		disabled: "#a9aeb7"
	}
};
var typography$1 = {
	heading: {
		h6: {
			regular: {
				font: "400 1em/1.5 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "500 1em/1.5 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "700 1em/1.5 'TWK Everett'",
				letterSpacing: "0.1px"
			}
		},
		h5: {
			regular: {
				font: "400 1.375em/1.5 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "500 1.375em/1.5 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "700 1.375em/1.5 'TWK Everett'",
				letterSpacing: "0.1px"
			}
		},
		h4: {
			regular: {
				font: "400 1.5em/1.25 'TWK Everett'",
				letterSpacing: "0"
			},
			medium: {
				font: "500 1.5em/1.25 'TWK Everett'",
				letterSpacing: "0"
			},
			semibold: {
				font: "700 1.5em/1.25 'TWK Everett'",
				letterSpacing: "0"
			}
		},
		h3: {
			regular: {
				font: "400 1.75em/1.25 'TWK Everett'",
				letterSpacing: "0"
			},
			medium: {
				font: "500 1.75em/1.25 'TWK Everett'",
				letterSpacing: "0"
			},
			semibold: {
				font: "700 1.75em/1.25 'TWK Everett'",
				letterSpacing: "0"
			}
		},
		h2: {
			regular: {
				font: "400 2.25em/1.25 'TWK Everett'",
				letterSpacing: "0"
			},
			medium: {
				font: "500 2.25em/1.25 'TWK Everett'",
				letterSpacing: "0"
			},
			semibold: {
				font: "700 2.25em/1.25 'TWK Everett'",
				letterSpacing: "0"
			}
		},
		h1: {
			regular: {
				font: "400 3em/1 'TWK Everett'",
				letterSpacing: "0"
			},
			medium: {
				font: "500 3em/1.25 'TWK Everett'",
				letterSpacing: "0"
			},
			semibold: {
				font: "700 3em/1.25 'TWK Everett'",
				letterSpacing: "0"
			}
		}
	},
	label: {
		sm: {
			regular: {
				font: "400 0.75em/1.25 'TWK Everett'",
				letterSpacing: "0.05px"
			},
			medium: {
				font: "400 0.75em/1.25 'TWK Everett'",
				letterSpacing: "0.05px"
			},
			semibold: {
				font: "700 0.75em/1.25 'TWK Everett'",
				letterSpacing: "0.05px"
			}
		},
		md: {
			regular: {
				font: "400 0.875em/1.25 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "400 0.875em/1.25 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "700 0.875em/1.25 'TWK Everett'",
				letterSpacing: "0.1px"
			}
		},
		lg: {
			regular: {
				font: "400 1em/1.375 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "400 1em/1.375 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "700 1em/1.375 'TWK Everett'",
				letterSpacing: "0.1px"
			}
		}
	},
	body: {
		sm: {
			regular: {
				font: "400 0.875em/1.375 'TWK Everett'",
				letterSpacing: "0.05px"
			},
			medium: {
				font: "500 0.875em/1.375 'TWK Everett'",
				letterSpacing: "0.05px"
			},
			semibold: {
				font: "700 0.875em/1.375 'TWK Everett'",
				letterSpacing: "0.05px"
			}
		},
		md: {
			regular: {
				font: "400 1em/1.375 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "500 1em/1.375 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "700 1em/1.375 'TWK Everett'",
				letterSpacing: "0.1px"
			}
		},
		lg: {
			regular: {
				font: "400 1.375em/1.5 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "500 1.375em/1.5 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "700 1.375em/1.5 'TWK Everett'",
				letterSpacing: "0.1px"
			}
		}
	}
};
var aveLight = {
	elevation: elevation$1,
	opacity: opacity$1,
	rounded: rounded$1,
	spacing: spacing$1,
	color: color$1,
	typography: typography$1
};

var elevation = {
	low: "0 0 4px 0 rgba(0, 0, 0, 0.4)",
	medium: "0 4px 16px 0 rgba(0, 0, 0, 0.15)"
};
var opacity = {
	none: "0",
	low: "0.1",
	medium: "0.5",
	high: "0.9"
};
var rounded = {
	xs: "0",
	sm: "0",
	md: "12px",
	lg: "12px",
	xl: "24px",
	"2xl": "24px",
	full: "9999px"
};
var spacing = {
	xs: "2px",
	sm: "4px",
	md: "8px",
	lg: "12px",
	xl: "16px",
	"2xl": "24px",
	"3xl": "32px",
	"4xl": "40px",
	"5xl": "48px",
	"6xl": "64px",
	"7xl": "80px",
	"8xl": "96px",
	"9xl": "160px"
};
var color = {
	support: {
		error: {
			subtler: "#711b00",
			subtle: "#b53007",
			medium: "#e75541",
			strong: "#ffd4ce"
		},
		success: {
			subtler: "#223a03",
			subtle: "#567c06",
			medium: "#8cd444",
			strong: "#ecfeda"
		},
		warning: {
			subtler: "#562800",
			subtle: "#bd5a00",
			medium: "#eb7f00",
			strong: "#ffd4a1"
		},
		info: {
			subtler: "#190d94",
			subtle: "#4537de",
			medium: "#777cf0",
			strong: "#d3dcff"
		}
	},
	focused: {
		primary: "#777cf0",
		inset: "#000000"
	},
	background: {
		primary: {
			subtle: "#000000",
			medium: "#0e1218",
			strong: "#21242c"
		},
		inverse: {
			subtle: "#717885",
			medium: "#f0f3f9",
			strong: "#ffffff"
		},
		secondary: {
			subtle: "#606671",
			medium: "#4d525d",
			strong: "#3d434e"
		},
		overlay: {
			subtle: "rgb(100% 100% 100% / 0.25)",
			medium: "rgb(5.49% 7.06% 9.41% / 0.5)"
		},
		positive: {
			subtle: "#ffffff",
			medium: "#f6f9fd",
			strong: "#f0f3f9"
		}
	},
	text: {
		primary: "#ffffff",
		secondary: "#d7dce4",
		helper: "#a9aeb7",
		placeholder: "#717885",
		inverse: "#000000",
		disabled: "rgb(100% 100% 100% / 0.5)"
	},
	icon: {
		primary: "#ffffff",
		secondary: "#a9aeb7",
		inverse: "#000000",
		interactive: "#ffffff",
		disabled: "rgb(100% 100% 100% / 0.5)"
	},
	border: {
		subtle: "#21242c",
		medium: "#2b2e36",
		strong: "#3d434e",
		inverse: "#ffffff",
		interactive: "#ffffff",
		disabled: "#21242c"
	},
	interactive: {
		primary: "#ffffff",
		hovered: "#f0f3f9",
		active: "#ffffff",
		visited: "#a8bbf8",
		disabled: "#606671"
	}
};
var typography = {
	heading: {
		h6: {
			regular: {
				font: "400 1em/1.5 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "500 1em/1.5 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "700 1em/1.5 'TWK Everett'",
				letterSpacing: "0.1px"
			}
		},
		h5: {
			regular: {
				font: "400 1.375em/1.5 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "500 1.375em/1.5 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "700 1.375em/1.5 'TWK Everett'",
				letterSpacing: "0.1px"
			}
		},
		h4: {
			regular: {
				font: "400 1.5em/1.25 'TWK Everett'",
				letterSpacing: "0"
			},
			medium: {
				font: "500 1.5em/1.25 'TWK Everett'",
				letterSpacing: "0"
			},
			semibold: {
				font: "700 1.5em/1.25 'TWK Everett'",
				letterSpacing: "0"
			}
		},
		h3: {
			regular: {
				font: "400 1.75em/1.25 'TWK Everett'",
				letterSpacing: "0"
			},
			medium: {
				font: "500 1.75em/1.25 'TWK Everett'",
				letterSpacing: "0"
			},
			semibold: {
				font: "700 1.75em/1.25 'TWK Everett'",
				letterSpacing: "0"
			}
		},
		h2: {
			regular: {
				font: "400 2.25em/1.25 'TWK Everett'",
				letterSpacing: "0"
			},
			medium: {
				font: "500 2.25em/1.25 'TWK Everett'",
				letterSpacing: "0"
			},
			semibold: {
				font: "700 2.25em/1.25 'TWK Everett'",
				letterSpacing: "0"
			}
		},
		h1: {
			regular: {
				font: "400 3em/1 'TWK Everett'",
				letterSpacing: "0"
			},
			medium: {
				font: "500 3em/1.25 'TWK Everett'",
				letterSpacing: "0"
			},
			semibold: {
				font: "700 3em/1.25 'TWK Everett'",
				letterSpacing: "0"
			}
		}
	},
	label: {
		sm: {
			regular: {
				font: "400 0.75em/1.25 'TWK Everett'",
				letterSpacing: "0.05px"
			},
			medium: {
				font: "400 0.75em/1.25 'TWK Everett'",
				letterSpacing: "0.05px"
			},
			semibold: {
				font: "700 0.75em/1.25 'TWK Everett'",
				letterSpacing: "0.05px"
			}
		},
		md: {
			regular: {
				font: "400 0.875em/1.25 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "400 0.875em/1.25 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "700 0.875em/1.25 'TWK Everett'",
				letterSpacing: "0.1px"
			}
		},
		lg: {
			regular: {
				font: "400 1em/1.375 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "400 1em/1.375 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "700 1em/1.375 'TWK Everett'",
				letterSpacing: "0.1px"
			}
		}
	},
	body: {
		sm: {
			regular: {
				font: "400 0.875em/1.375 'TWK Everett'",
				letterSpacing: "0.05px"
			},
			medium: {
				font: "500 0.875em/1.375 'TWK Everett'",
				letterSpacing: "0.05px"
			},
			semibold: {
				font: "700 0.875em/1.375 'TWK Everett'",
				letterSpacing: "0.05px"
			}
		},
		md: {
			regular: {
				font: "400 1em/1.375 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "500 1em/1.375 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "700 1em/1.375 'TWK Everett'",
				letterSpacing: "0.1px"
			}
		},
		lg: {
			regular: {
				font: "400 1.375em/1.5 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			medium: {
				font: "500 1.375em/1.5 'TWK Everett'",
				letterSpacing: "0.1px"
			},
			semibold: {
				font: "700 1.375em/1.5 'TWK Everett'",
				letterSpacing: "0.1px"
			}
		}
	}
};
var aveDark = {
	elevation: elevation,
	opacity: opacity,
	rounded: rounded,
	spacing: spacing,
	color: color,
	typography: typography
};

declare const themeContract: {
    elevation: {
        low: string;
        medium: string;
    };
    opacity: {
        none: string;
        low: string;
        medium: string;
        high: string;
    };
    rounded: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        full: string;
    };
    spacing: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
        "5xl": string;
        "6xl": string;
        "7xl": string;
        "8xl": string;
        "9xl": string;
    };
    color: {
        support: {
            error: {
                subtler: string;
                subtle: string;
                medium: string;
                strong: string;
            };
            success: {
                subtler: string;
                subtle: string;
                medium: string;
                strong: string;
            };
            warning: {
                subtler: string;
                subtle: string;
                medium: string;
                strong: string;
            };
            info: {
                subtler: string;
                subtle: string;
                medium: string;
                strong: string;
            };
        };
        focused: {
            primary: string;
            inset: string;
        };
        background: {
            primary: {
                subtle: string;
                medium: string;
                strong: string;
            };
            inverse: {
                subtle: string;
                medium: string;
                strong: string;
            };
            secondary: {
                subtle: string;
                medium: string;
                strong: string;
            };
            overlay: {
                subtle: string;
                medium: string;
            };
            positive: {
                subtle: string;
                medium: string;
                strong: string;
            };
        };
        text: {
            primary: string;
            secondary: string;
            helper: string;
            placeholder: string;
            inverse: string;
            disabled: string;
        };
        icon: {
            primary: string;
            secondary: string;
            inverse: string;
            interactive: string;
            disabled: string;
        };
        border: {
            subtle: string;
            medium: string;
            strong: string;
            inverse: string;
            interactive: string;
            disabled: string;
        };
        interactive: {
            primary: string;
            hovered: string;
            active: string;
            visited: string;
            disabled: string;
        };
    };
    typography: {
        heading: {
            h6: {
                regular: {
                    font: string;
                    letterSpacing: string;
                };
                medium: {
                    font: string;
                    letterSpacing: string;
                };
                semibold: {
                    font: string;
                    letterSpacing: string;
                };
            };
            h5: {
                regular: {
                    font: string;
                    letterSpacing: string;
                };
                medium: {
                    font: string;
                    letterSpacing: string;
                };
                semibold: {
                    font: string;
                    letterSpacing: string;
                };
            };
            h4: {
                regular: {
                    font: string;
                    letterSpacing: string;
                };
                medium: {
                    font: string;
                    letterSpacing: string;
                };
                semibold: {
                    font: string;
                    letterSpacing: string;
                };
            };
            h3: {
                regular: {
                    font: string;
                    letterSpacing: string;
                };
                medium: {
                    font: string;
                    letterSpacing: string;
                };
                semibold: {
                    font: string;
                    letterSpacing: string;
                };
            };
            h2: {
                regular: {
                    font: string;
                    letterSpacing: string;
                };
                medium: {
                    font: string;
                    letterSpacing: string;
                };
                semibold: {
                    font: string;
                    letterSpacing: string;
                };
            };
            h1: {
                regular: {
                    font: string;
                    letterSpacing: string;
                };
                medium: {
                    font: string;
                    letterSpacing: string;
                };
                semibold: {
                    font: string;
                    letterSpacing: string;
                };
            };
        };
        label: {
            sm: {
                regular: {
                    font: string;
                    letterSpacing: string;
                };
                medium: {
                    font: string;
                    letterSpacing: string;
                };
                semibold: {
                    font: string;
                    letterSpacing: string;
                };
            };
            md: {
                regular: {
                    font: string;
                    letterSpacing: string;
                };
                medium: {
                    font: string;
                    letterSpacing: string;
                };
                semibold: {
                    font: string;
                    letterSpacing: string;
                };
            };
            lg: {
                regular: {
                    font: string;
                    letterSpacing: string;
                };
                medium: {
                    font: string;
                    letterSpacing: string;
                };
                semibold: {
                    font: string;
                    letterSpacing: string;
                };
            };
        };
        body: {
            sm: {
                regular: {
                    font: string;
                    letterSpacing: string;
                };
                medium: {
                    font: string;
                    letterSpacing: string;
                };
                semibold: {
                    font: string;
                    letterSpacing: string;
                };
            };
            md: {
                regular: {
                    font: string;
                    letterSpacing: string;
                };
                medium: {
                    font: string;
                    letterSpacing: string;
                };
                semibold: {
                    font: string;
                    letterSpacing: string;
                };
            };
            lg: {
                regular: {
                    font: string;
                    letterSpacing: string;
                };
                medium: {
                    font: string;
                    letterSpacing: string;
                };
                semibold: {
                    font: string;
                    letterSpacing: string;
                };
            };
        };
    };
};

declare const themeVars: {
    elevation: {
        low: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        medium: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    opacity: {
        none: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        low: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        medium: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        high: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    rounded: {
        xs: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        sm: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        md: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        lg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        xl: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        "2xl": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        full: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    spacing: {
        xs: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        sm: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        md: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        lg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        xl: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        "2xl": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        "3xl": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        "4xl": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        "5xl": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        "6xl": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        "7xl": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        "8xl": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        "9xl": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    color: {
        support: {
            error: {
                subtler: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                subtle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                medium: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                strong: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            success: {
                subtler: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                subtle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                medium: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                strong: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            warning: {
                subtler: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                subtle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                medium: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                strong: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            info: {
                subtler: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                subtle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                medium: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                strong: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        focused: {
            primary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            inset: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        background: {
            primary: {
                subtle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                medium: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                strong: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            inverse: {
                subtle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                medium: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                strong: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            secondary: {
                subtle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                medium: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                strong: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            overlay: {
                subtle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                medium: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            positive: {
                subtle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                medium: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                strong: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        text: {
            primary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            secondary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            helper: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            placeholder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            inverse: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            disabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        icon: {
            primary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            secondary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            inverse: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            interactive: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            disabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        border: {
            subtle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            medium: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            strong: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            inverse: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            interactive: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            disabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        interactive: {
            primary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            hovered: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            active: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            visited: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            disabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
    typography: {
        heading: {
            h6: {
                regular: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                medium: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                semibold: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
            h5: {
                regular: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                medium: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                semibold: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
            h4: {
                regular: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                medium: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                semibold: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
            h3: {
                regular: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                medium: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                semibold: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
            h2: {
                regular: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                medium: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                semibold: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
            h1: {
                regular: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                medium: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                semibold: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
        };
        label: {
            sm: {
                regular: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                medium: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                semibold: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
            md: {
                regular: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                medium: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                semibold: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
            lg: {
                regular: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                medium: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                semibold: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
        };
        body: {
            sm: {
                regular: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                medium: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                semibold: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
            md: {
                regular: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                medium: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                semibold: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
            lg: {
                regular: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                medium: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                semibold: {
                    font: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    letterSpacing: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
        };
    };
};
declare const layoutSprinkleValues: {
    readonly dialog: {
        readonly row: {
            readonly padding: {
                readonly vertical: {
                    readonly lg: "lg";
                    readonly sm: "sm";
                };
                readonly horizontal: {
                    readonly lg: "lg";
                };
            };
        };
    };
};
declare const layoutValues: {
    readonly dialog: {
        readonly row: {
            readonly height: {
                readonly sm: 40;
            };
        };
    };
};

declare const breakpoints: {
    mobile: number;
    tablet: number;
    desktop: number;
};
type Breakpoint = keyof typeof breakpoints;
type CSSProps = Omit<StyleRule, "@media" | "@supports">;
declare const queries: {
    tablet: string;
    desktop: string;
};
interface ResponsiveStyle {
    mobile?: CSSProps;
    tablet?: CSSProps;
    desktop?: CSSProps;
}
declare const responsiveStyle: ({ mobile, tablet, desktop, }: ResponsiveStyle) => StyleRule;

interface Theme {
  elevation: Elevation;
  opacity: Opacity;
  rounded: Rounded;
  spacing: Spacing;
  color: Color;
  typography: Typography;
}
interface Typography {
  heading: Heading;
  label: Label;
  body: Label;
}
interface Label {
  sm: H6;
  md: H6;
  lg: H6;
}
interface Heading {
  h6: H6;
  h5: H6;
  h4: H6;
  h3: H6;
  h2: H6;
  h1: H6;
}
interface H6 {
  regular: Regular;
  medium: Regular;
  semibold: Regular;
}
interface Regular {
  font: string;
  letterSpacing: string;
}
interface Color {
  support: Support;
  focused: Focused;
  background: Background;
  text: Text;
  icon: Icon;
  border: Border;
  interactive: Interactive;
}
interface Interactive {
  primary: string;
  hovered: string;
  active: string;
  visited: string;
  disabled: string;
}
interface Border {
  subtle: string;
  medium: string;
  strong: string;
  inverse: string;
  interactive: string;
  disabled: string;
}
interface Icon {
  primary: string;
  secondary: string;
  inverse: string;
  interactive: string;
  disabled: string;
}
interface Text {
  primary: string;
  secondary: string;
  helper: string;
  placeholder: string;
  inverse: string;
  disabled: string;
}
interface Background {
  primary: Primary;
  inverse: Primary;
  secondary: Primary;
  overlay: Overlay;
  positive: Primary;
}
interface Overlay {
  subtle: string;
  medium: string;
}
interface Primary {
  subtle: string;
  medium: string;
  strong: string;
}
interface Focused {
  primary: string;
  inset: string;
}
interface Support {
  error: Error;
  success: Error;
  warning: Error;
  info: Error;
}
interface Error {
  subtler: string;
  subtle: string;
  medium: string;
  strong: string;
}
interface Spacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
  '7xl': string;
  '8xl': string;
  '9xl': string;
}
interface Rounded {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  full: string;
}
interface Opacity {
  none: string;
  low: string;
  medium: string;
  high: string;
}
interface Elevation {
  low: string;
  medium: string;
}

interface Sprinkles extends BaseSprinkles {
    base: BaseSprinkles;
    variants: BaseSprinkles;
    compoundVariants: BaseSprinkles;
    overrides: BaseSprinkles;
}
declare const sprinkles: Sprinkles;

export { type Breakpoint, Layers, type Sprinkles, type Theme, aveDark as aveDarkTheme, aveLight as aveLightTheme, breakpoints, dark as darkTheme, layoutSprinkleValues, layoutValues, light as lightTheme, queries, responsiveStyle, sprinkles, themeContract, themeVars };
