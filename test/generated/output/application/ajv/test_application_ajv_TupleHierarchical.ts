import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { TupleHierarchical } from "../../../../structures/TupleHierarchical";

export const test_application_ajv_TupleHierarchical = _test_application("ajv")(
    "TupleHierarchical",
    {
        schemas: [
            {
                type: "array",
                items: [
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "boolean",
                    },
                    {
                        type: "null",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    {
                        type: "array",
                        items: [
                            {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "boolean",
                            },
                            {
                                type: "null",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                            {
                                type: "array",
                                items: [
                                    {
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                        type: "number",
                                    },
                                    {
                                        type: "array",
                                        items: [
                                            {
                                                "x-typia-required": true,
                                                "x-typia-optional": false,
                                                type: "boolean",
                                            },
                                            {
                                                "x-typia-rest": false,
                                                "x-typia-required": true,
                                                "x-typia-optional": false,
                                                type: "string",
                                            },
                                        ],
                                        "x-typia-rest": false,
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                ],
                                "x-typia-rest": false,
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        ],
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    {
                        type: "array",
                        items: [
                            {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "number",
                            },
                            {
                                "x-typia-rest": false,
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "array",
                                items: {
                                    type: "array",
                                    items: [
                                        {
                                            "x-typia-required": true,
                                            "x-typia-optional": false,
                                            type: "string",
                                        },
                                        {
                                            "x-typia-required": true,
                                            "x-typia-optional": false,
                                            type: "boolean",
                                        },
                                        {
                                            "x-typia-rest": false,
                                            "x-typia-required": true,
                                            "x-typia-optional": false,
                                            type: "array",
                                            items: {
                                                type: "array",
                                                items: [
                                                    {
                                                        "x-typia-required":
                                                            true,
                                                        "x-typia-optional":
                                                            false,
                                                        type: "number",
                                                    },
                                                    {
                                                        "x-typia-required":
                                                            true,
                                                        "x-typia-optional":
                                                            false,
                                                        type: "number",
                                                    },
                                                    {
                                                        type: "array",
                                                        items: [
                                                            {
                                                                "x-typia-required":
                                                                    true,
                                                                "x-typia-optional":
                                                                    false,
                                                                type: "boolean",
                                                            },
                                                            {
                                                                "x-typia-rest":
                                                                    false,
                                                                "x-typia-required":
                                                                    true,
                                                                "x-typia-optional":
                                                                    false,
                                                                type: "string",
                                                            },
                                                        ],
                                                        "x-typia-rest": false,
                                                        "x-typia-required":
                                                            true,
                                                        "x-typia-optional":
                                                            false,
                                                    },
                                                ],
                                                "x-typia-rest": false,
                                                "x-typia-required": true,
                                                "x-typia-optional": false,
                                            },
                                        },
                                    ],
                                    "x-typia-rest": false,
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                            },
                        ],
                        "x-typia-rest": false,
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                ],
            },
        ],
        components: {
            schemas: {},
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
