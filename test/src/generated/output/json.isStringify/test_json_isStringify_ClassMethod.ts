import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_json_isStringify_ClassMethod = _test_json_isStringify(
  "ClassMethod",
)<ClassMethod>(ClassMethod)((input) =>
  ((input: ClassMethod): string | null => {
    const is = (input: any): input is ClassMethod => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).name &&
        "number" === typeof (input as any).age &&
        Number.isFinite((input as any).age)
      );
    };
    const stringify = (input: ClassMethod): string => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $string = require("typia/lib/functional/$string").$string;
      const $number = require("typia/lib/functional/$number").$number;
      return `{"name":${$string((input as any).name)},"age":${$number(
        (input as any).age,
      )}}`;
    };
    return is(input) ? stringify(input) : null;
  })(input),
);
