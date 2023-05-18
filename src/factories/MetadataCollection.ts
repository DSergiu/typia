import type ts from "typescript/lib/tsclibrary";

import { Metadata } from "../metadata/Metadata";
import { MetadataObject } from "../metadata/MetadataObject";

import { IProject } from "../transformers/IProject";

import { MapUtil } from "../utils/MapUtil";
import { TsSymbolUtil } from "../utils/TsSymbolUtil";

import { TypeFactory } from "./TypeFactory";

export class MetadataCollection {
    private readonly dict_: Map<ts.Type, MetadataObject>;
    private readonly names_: Map<string, Map<ts.Type, string>>;
    private readonly unions_: Map<string, MetadataObject[]>;
    private index_: number;

    public constructor(
        private readonly options?: Partial<MetadataCollection.IOptions>,
    ) {
        this.dict_ = new Map();
        this.names_ = new Map();
        this.unions_ = new Map();
        this.index_ = 0;
    }

    public objects(): MetadataObject[] {
        return [...this.dict_.values()];
    }
    public unions(): MetadataObject[][] {
        return [...this.unions_.values()];
    }

    public emplace(
        p: IProject.IModule,
        type: ts.Type,
    ): [MetadataObject, boolean] {
        const oldbie = this.dict_.get(type);
        if (oldbie !== undefined) return [oldbie, false];

        const $id: string = this.get_name(p, type);
        const obj: MetadataObject = MetadataObject.create({
            name: $id,
            properties: [],
            description: type.symbol
                ? TsSymbolUtil.comments(p.tsc)(type.symbol)
                : undefined,
            jsDocTags:
                (type.symbol
                    ? TsSymbolUtil.getCommentTags(p.tsc)(type.symbol)
                    : undefined) ?? [],
            validated: false,
            index: this.index_++,
            recursive: false,
            nullables: [],
        });
        this.dict_.set(type, obj);
        return [obj, true];
    }

    /**
     * @internal
     */
    public getUnionIndex(meta: Metadata): number {
        const key: string = meta.objects.map((obj) => obj.name).join(" | ");
        MapUtil.take(this.unions_)(key, () => meta.objects);
        return [...this.unions_.keys()].indexOf(key);
    }

    private get_name(p: IProject.IModule, type: ts.Type): string {
        const name: string = (() => {
            const str: string = TypeFactory.getFullName(p)(type);
            return this.options?.replace ? this.options.replace(str) : str;
        })();

        const duplicates: Map<ts.Type, string> = MapUtil.take(this.names_)(
            name,
            () => new Map(),
        );
        const oldbie: string | undefined = duplicates.get(type);
        if (oldbie !== undefined) return oldbie;

        const addicted: string = duplicates.size
            ? `${name}.o${duplicates.size}`
            : name;
        duplicates.set(type, addicted);
        return addicted;
    }
}
export namespace MetadataCollection {
    export interface IOptions {
        replace?(str: string): string;
    }

    export const replace = (str: string): string => {
        for (const [before, after] of REPLACERS)
            str = str.split(before).join(after);
        return str;
    };

    export const escape = (str: string): string => {
        for (const [before, after] of REPLACERS)
            if (after !== "") str = str.split(after).join(before);
        return str;
    };
}
const REPLACERS: [string, string][] = [
    ["$", "_dollar_"],
    ["&", "_and_"],
    ["|", "_or_"],
    ["{", "_blt_"],
    ["}", "_bgt_"],
    ["<", "_lt_"],
    [">", "_gt_"],
    ["[", "_alt_"],
    ["]", "_agt_"],
    [",", "_comma_"],
    ["`", "_backquote_"],
    ["'", "_singlequote_"],
    ['"', "_doublequote_"],
    [" ", "_space_"],
];
