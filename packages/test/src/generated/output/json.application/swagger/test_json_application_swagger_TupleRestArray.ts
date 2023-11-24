import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TupleRestArray } from "../../../../structures/TupleRestArray";

export const test_json_application_swagger_TupleRestArray =
  _test_json_application("swagger")("TupleRestArray")({
    schemas: [
      {
        $ref: "#/components/schemas/TupleRestArray",
      },
    ],
    components: {
      schemas: {
        TupleRestArray: {
          type: "array",
          items: {
            oneOf: [
              {
                type: "boolean",
              },
              {
                type: "number",
              },
              {
                type: "array",
                items: {
                  type: "string",
                },
              },
            ],
          },
          minItems: 2,
          "x-typia-tuple": {
            type: "array",
            items: [
              {
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "boolean",
              },
              {
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "number",
              },
              {
                "x-typia-rest": true,
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "array",
                items: {
                  "x-typia-rest": true,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "string",
                },
              },
            ],
            minItems: 2,
          },
        },
      },
    },
    purpose: "swagger",
  });
