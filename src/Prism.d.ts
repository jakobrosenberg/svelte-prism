import { SvelteComponentTyped } from "svelte";

declare const __propDef: {
    props: {
        /**
         * @type {string}
         * @default "javascript"
         */
        language?: string;

        /**
         * @type {string}
         * @default ""
         */
        source: string;

        /**
         * @type {Function}
         */
        transform?: Function;
    };
    events: {};
    slots: {};
};

export declare type PrismProps = typeof __propDef.props;
export declare type PrismEvents = typeof __propDef.events;
export declare type PrismSlots = typeof __propDef.slots;
export default class Prism extends SvelteComponentTyped<PrismProps, PrismEvents, PrismSlots> {
}

export {};
