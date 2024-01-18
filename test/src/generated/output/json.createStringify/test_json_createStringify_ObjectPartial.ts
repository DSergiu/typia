import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_json_createStringify_ObjectPartial = _test_json_stringify(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)((input: ObjectPartial): string => {
  const $io1 = (input: any): boolean =>
    "boolean" === typeof input.boolean &&
    "number" === typeof input.number &&
    "string" === typeof input.string &&
    Array.isArray(input.array) &&
    input.array.every((elem: any) => "number" === typeof elem) &&
    (null === input.object ||
      ("object" === typeof input.object &&
        null !== input.object &&
        $io1(input.object)));
  // @ts-ignore;
  declare const require: (lib: string) => any;
  const $number = require("typia/lib/functional/$number").$number;
  const $string = require("typia/lib/functional/$string").$string;
  const $tail = require("typia/lib/functional/$tail").$tail;
  const $so0 = (input: any): any =>
    `{${$tail(
      `${
        undefined === input.boolean
          ? ""
          : `"boolean":${
              undefined !== input.boolean ? input.boolean : undefined
            },`
      }${
        undefined === input.number
          ? ""
          : `"number":${
              undefined !== input.number ? $number(input.number) : undefined
            },`
      }${
        undefined === input.string
          ? ""
          : `"string":${
              undefined !== input.string ? $string(input.string) : undefined
            },`
      }${
        undefined === input.array
          ? ""
          : `"array":${
              undefined !== input.array
                ? `[${input.array.map((elem: any) => $number(elem)).join(",")}]`
                : undefined
            },`
      }${
        undefined === input.object
          ? ""
          : `"object":${
              undefined !== input.object
                ? null !== input.object
                  ? $so1(input.object)
                  : "null"
                : undefined
            }`
      }`,
    )}}`;
  const $so1 = (input: any): any =>
    `{"boolean":${input.boolean},"number":${$number(
      input.number,
    )},"string":${$string(input.string)},"array":${`[${input.array
      .map((elem: any) => $number(elem))
      .join(",")}]`},"object":${
      null !== input.object ? $so1(input.object) : "null"
    }}`;
  return $so0(input);
});
