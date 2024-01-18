import typia from "typia";

import { _test_assert } from "../../../internal/_test_assert";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_assert_ObjectLiteralProperty = _test_assert(
  "ObjectLiteralProperty",
)<ObjectLiteralProperty>(ObjectLiteralProperty)((input) =>
  ((input: any): ObjectLiteralProperty => {
    const __is = (input: any): input is ObjectLiteralProperty => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" ===
          typeof (input as any)["something-interesting-do-you-want?"] &&
        "string" === typeof (input as any)["or-something-crazy-do-you-want?"]
      );
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
          "typia.assert",
        );
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
    return input;
  })(input),
);
