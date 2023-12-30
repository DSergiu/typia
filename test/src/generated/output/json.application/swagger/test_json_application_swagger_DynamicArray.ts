import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicArray } from "../../../../structures/DynamicArray";

export const test_json_application_swagger_DynamicArray =
  _test_json_application("swagger")("DynamicArray")({
    schemas: [
      {
        $ref: "#/components/schemas/DynamicArray",
      },
    ],
    components: {
      schemas: {
        DynamicArray: {
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {},
              nullable: false,
              "x-typia-jsDocTags": [],
              "x-typia-additionalProperties": {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "array",
                items: {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "string",
                },
              },
              additionalProperties: {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "array",
                items: {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "string",
                },
              },
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
  });