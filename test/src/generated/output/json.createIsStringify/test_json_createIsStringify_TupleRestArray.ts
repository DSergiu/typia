import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_json_createIsStringify_TupleRestArray =
  _test_json_isStringify("TupleRestArray")<TupleRestArray>(TupleRestArray)(
    (input: TupleRestArray): string | null => {
      const is = (input: any): input is TupleRestArray => {
        return (
          Array.isArray(input) &&
          "boolean" === typeof input[0] &&
          "number" === typeof input[1] &&
          Number.isFinite(input[1]) &&
          Array.isArray(input.slice(2)) &&
          input
            .slice(2)
            .every(
              (elem: any) =>
                Array.isArray(elem) &&
                elem.every((elem: any) => "string" === typeof elem),
            )
        );
      };
      const stringify = (input: TupleRestArray): string => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $number = require("typia/lib/functional/$number").$number;
        const $string = require("typia/lib/functional/$string").$string;
        const $rest = require("typia/lib/functional/$rest").$rest;
        return `[${input[0]},${$number(input[1])}${$rest(
          `[${input
            .slice(2)
            .map(
              (elem: any) =>
                `[${elem.map((elem: any) => $string(elem)).join(",")}]`,
            )
            .join(",")}]`,
        )}]`;
      };
      return is(input) ? stringify(input) : null;
    },
  );
