import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ToJsonDouble } from "../../../../structures/ToJsonDouble";

export const test_application_ajv_ToJsonDouble = _test_application("ajv")(
    "ToJsonDouble",
    {
        schemas: [
            {
                $ref: "#/components/schemas/ToJsonDouble.Child",
            },
        ],
        components: {
            schemas: {
                "ToJsonDouble.Child": {
                    $id: "#/components/schemas/ToJsonDouble.Child",
                    type: "object",
                    properties: {
                        id: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        flag: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "boolean",
                        },
                    },
                    required: ["id", "flag"],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
