import typia from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_json_assertStringify_ConstantEnumeration =
  _test_json_assertStringify("ConstantEnumeration")<ConstantEnumeration>(
    ConstantEnumeration,
  )((input) =>
    ((input: any): string => {
      const assert = (input: any): ConstantEnumeration => {
        const __is = (input: any): input is ConstantEnumeration => {
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any) =>
                0 === elem ||
                1 === elem ||
                2 === elem ||
                "Three" === elem ||
                "Four" === elem,
            )
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ConstantEnumeration => {
            const $guard = require("typia/lib/functional/$guard").$guard(
              "typia.json.assertStringify",
            );
            return (
              ((Array.isArray(input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ConstantEnumeration",
                  value: input,
                })) &&
                input.every(
                  (elem: any, _index1: number) =>
                    0 === elem ||
                    1 === elem ||
                    2 === elem ||
                    "Three" === elem ||
                    "Four" === elem ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "]",
                      expected: '("Four" | "Three" | 0 | 1 | 2)',
                      value: elem,
                    }),
                )) ||
              $guard(true, {
                path: _path + "",
                expected: "ConstantEnumeration",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: ConstantEnumeration): string => {
        const $string = require("typia/lib/functional/$string").$string;
        const $number = require("typia/lib/functional/$number").$number;
        const $throws = require("typia/lib/functional/$throws").$throws(
          "typia.json.assertStringify",
        );
        return `[${input
          .map((elem: any) =>
            (() => {
              if ("string" === typeof elem) return $string(elem);
              if ("number" === typeof elem) return $number(elem);
              if ("string" === typeof elem) return '"' + elem + '"';
              $throws({
                expected: '("Four" | "Three" | 0 | 1 | 2)',
                value: elem,
              });
            })(),
          )
          .join(",")}]`;
      };
      return stringify(assert(input));
    })(input),
  );
