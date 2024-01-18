import typia from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_assertGuardEquals_ObjectLiteralProperty =
  _test_assertGuardEquals("ObjectLiteralProperty")<ObjectLiteralProperty>(
    ObjectLiteralProperty,
  )((input) =>
    ((input: any): asserts input is ObjectLiteralProperty => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is ObjectLiteralProperty => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
          "string" === typeof input["something-interesting-do-you-want?"] &&
          "string" === typeof input["or-something-crazy-do-you-want?"] &&
          (2 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (
                [
                  "something-interesting-do-you-want?",
                  "or-something-crazy-do-you-want?",
                ].some((prop: any) => key === prop)
              )
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        return "object" === typeof input && null !== input && $io0(input, true);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ObjectLiteralProperty => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $guard = require("typia/lib/functional/$guard").$guard(
            "typia.assertGuardEquals",
          );
          const $join = require("typia/lib/functional/$join").$join;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input["something-interesting-do-you-want?"] ||
              $guard(_exceptionable, {
                path: _path + '["something-interesting-do-you-want?"]',
                expected: "string",
                value: input["something-interesting-do-you-want?"],
              })) &&
            ("string" === typeof input["or-something-crazy-do-you-want?"] ||
              $guard(_exceptionable, {
                path: _path + '["or-something-crazy-do-you-want?"]',
                expected: "string",
                value: input["or-something-crazy-do-you-want?"],
              })) &&
            (2 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (
                  [
                    "something-interesting-do-you-want?",
                    "or-something-crazy-do-you-want?",
                  ].some((prop: any) => key === prop)
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(_exceptionable, {
                  path: _path + $join(key),
                  expected: "undefined",
                  value: value,
                });
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectLiteralProperty.ISomething",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectLiteralProperty.ISomething",
              value: input,
            })
          );
        })(input, "$input", true);
    })(input),
  );
