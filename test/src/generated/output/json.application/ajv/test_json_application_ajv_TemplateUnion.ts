import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TemplateUnion } from "../../../../structures/TemplateUnion";

export const test_json_application_ajv_TemplateUnion = _test_json_application(
  "ajv",
)("TemplateUnion")({
  schemas: [
    {
      $ref: "#/components/schemas/TemplateUnion",
    },
  ],
  components: {
    schemas: {
      TemplateUnion: {
        $id: "#/components/schemas/TemplateUnion",
        type: "object",
        properties: {
          value: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "array",
            items: {
              $ref: "#/components/schemas/TemplateUnion.Type",
            },
          },
        },
        required: ["value"],
        "x-typia-jsDocTags": [],
      },
      "TemplateUnion.Type": {
        $id: "#/components/schemas/TemplateUnion.Type",
        type: "object",
        properties: {
          prefix: {
            type: "string",
            "x-typia-required": true,
            "x-typia-optional": false,
            pattern:
              "^((prefix_(.*))|(prefix_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?))$",
          },
          postfix: {
            type: "string",
            "x-typia-required": true,
            "x-typia-optional": false,
            pattern:
              "(((.*)_postfix)|([+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?_postfix))$",
          },
          middle: {
            type: "string",
            "x-typia-required": true,
            "x-typia-optional": false,
            pattern:
              "^(the_false_value|the_true_value|(the_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?_value))$",
          },
          mixed: {
            oneOf: [
              {
                type: "string",
                "x-typia-required": true,
                "x-typia-optional": false,
                pattern:
                  "^(the_A_value|the_B_value|[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?|true|false|(the_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?_value))$",
              },
              {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "number",
              },
              {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "boolean",
              },
              {
                type: "object",
                properties: {
                  name: {
                    "x-typia-required": true,
                    "x-typia-optional": false,
                    type: "string",
                  },
                },
                required: ["name"],
                "x-typia-jsDocTags": [],
              },
            ],
            "x-typia-required": true,
            "x-typia-optional": false,
          },
        },
        required: ["prefix", "postfix", "middle", "mixed"],
        "x-typia-jsDocTags": [],
      },
    },
  },
  purpose: "ajv",
});