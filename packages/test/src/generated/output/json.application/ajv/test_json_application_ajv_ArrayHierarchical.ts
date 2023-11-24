import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayHierarchical } from "../../../../structures/ArrayHierarchical";

export const test_json_application_ajv_ArrayHierarchical =
  _test_json_application("ajv")("ArrayHierarchical")({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayHierarchical",
      },
    ],
    components: {
      schemas: {
        ArrayHierarchical: {
          $id: "#/components/schemas/ArrayHierarchical",
          type: "array",
          items: {
            $ref: "#/components/schemas/ArrayHierarchical.ICompany",
          },
        },
        "ArrayHierarchical.ICompany": {
          $id: "#/components/schemas/ArrayHierarchical.ICompany",
          type: "object",
          properties: {
            id: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            serial: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            name: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            established_at: {
              $ref: "#/components/schemas/ArrayHierarchical.ITimestamp",
            },
            departments: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayHierarchical.IDepartment",
              },
            },
          },
          required: ["id", "serial", "name", "established_at", "departments"],
          "x-typia-jsDocTags": [],
        },
        "ArrayHierarchical.ITimestamp": {
          $id: "#/components/schemas/ArrayHierarchical.ITimestamp",
          type: "object",
          properties: {
            time: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            zone: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
          },
          required: ["time", "zone"],
          "x-typia-jsDocTags": [],
        },
        "ArrayHierarchical.IDepartment": {
          $id: "#/components/schemas/ArrayHierarchical.IDepartment",
          type: "object",
          properties: {
            id: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            code: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            sales: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            created_at: {
              $ref: "#/components/schemas/ArrayHierarchical.ITimestamp",
            },
            employees: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayHierarchical.IEmployee",
              },
            },
          },
          required: ["id", "code", "sales", "created_at", "employees"],
          "x-typia-jsDocTags": [],
        },
        "ArrayHierarchical.IEmployee": {
          $id: "#/components/schemas/ArrayHierarchical.IEmployee",
          type: "object",
          properties: {
            id: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            name: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            age: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            grade: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            employeed_at: {
              $ref: "#/components/schemas/ArrayHierarchical.ITimestamp",
            },
          },
          required: ["id", "name", "age", "grade", "employeed_at"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
  });
