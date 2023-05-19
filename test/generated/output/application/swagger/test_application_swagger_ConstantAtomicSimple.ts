import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ConstantAtomicSimple } from "../../../../structures/ConstantAtomicSimple";

export const test_application_swagger_ConstantAtomicSimple = _test_application(
    "swagger",
)("ConstantAtomicSimple", {
    schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        type: "boolean",
                        enum: [false, true],
                    },
                    {
                        type: "number",
                        enum: [2],
                    },
                    {
                        type: "string",
                        enum: ["three"],
                    },
                ],
            },
            "x-typia-tuple": {
                type: "array",
                items: [
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "boolean",
                        enum: [false, true],
                    },
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "boolean",
                        enum: [true],
                    },
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                        enum: [2],
                    },
                    {
                        "x-typia-rest": false,
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                        enum: ["three"],
                    },
                ],
            },
        },
    ],
    components: {
        schemas: {},
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
