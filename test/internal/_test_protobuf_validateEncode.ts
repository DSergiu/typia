import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";
import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_protobuf_validateEncode =
    <T>(factory: {
        constructor: { name: string };
        generate(): T;
        SPOILERS?: Spoiler<T>[];
    }) =>
    (functor: {
        decode: (input: Uint8Array) => typia.Primitive<T>;
        encode: (input: T) => typia.IValidation<Uint8Array>;
    }) =>
    () => {
        try {
            const data: T = factory.generate();
            const encoded: typia.IValidation<Uint8Array> = functor.encode(data);
            if (encoded.success === false)
                throw new Error(
                    `Bug on typia.protobuf.validateEncode(): failed to understand ${factory.constructor.name} type.`,
                );
            const decoded: typia.Primitive<T> = functor.decode(encoded.data);
            if (primitive_equal_to(data, decoded as T) === false)
                throw new Error(
                    `Bug on typia.protobuf.validateEncode(): failed to understand ${factory.constructor.name} type.`,
                );
        } catch {
            throw new Error(
                `Bug on typia.protobuf.validateEncode(): failed to encode ${factory.constructor.name} type.`,
            );
        }

        const wrong: ISpoiled[] = [];
        for (const spoil of factory.SPOILERS ?? []) {
            const elem: T = factory.generate();
            const expected: string[] = spoil(elem);
            const valid: typia.IValidation<Uint8Array> = functor.encode(elem);

            if (valid.success === true)
                throw new Error(
                    `Bug on typia.json.validateEncode(): failed to detect error on the ${factory.constructor.name} type.`,
                );

            typia.assert(valid);
            expected.sort();
            valid.errors.sort((x, y) => (x.path < y.path ? -1 : 1));

            if (
                valid.errors.length !== expected.length ||
                valid.errors.every((e, i) => e.path === expected[i]) === false
            )
                wrong.push({
                    expected,
                    actual: valid.errors.map((e) => e.path),
                });
        }
        if (wrong.length !== 0) {
            console.log(wrong);
            throw new Error(
                `Bug on typia.json.validateEncode(): failed to detect error on the ${factory.constructor.name} type.`,
            );
        }
    };

interface ISpoiled {
    expected: string[];
    actual: string[];
}

function predicate<T>(data: any, optimized: string): boolean {
    // SPECIAL CASE, UNDEFINED
    if (
        optimized === undefined &&
        (data === undefined ||
            typeof data === "function" ||
            (data.toJSON && data.toJSON() === undefined))
    )
        return true;

    // DO COMPARE
    const parsed: T = JSON.parse(optimized);
    const expected: T = JSON.parse(JSON.stringify(data));

    return primitive_equal_to(parsed, expected);
}