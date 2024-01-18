import typia from "typia";

import { _test_assert } from "../../../internal/_test_assert";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_createAssert_DynamicEnumeration = _test_assert(
  "DynamicEnumeration",
)<DynamicEnumeration>(DynamicEnumeration)((input: any): DynamicEnumeration => {
  const __is = (input: any): input is DynamicEnumeration => {
    const $io0 = (input: any): boolean =>
      "object" === typeof input.value &&
      null !== input.value &&
      false === Array.isArray(input.value) &&
      $io1(input.value);
    const $io1 = (input: any): boolean =>
      (undefined === input.ar || "string" === typeof input.ar) &&
      (undefined === input["zh-Hans"] ||
        "string" === typeof input["zh-Hans"]) &&
      (undefined === input["zh-Hant"] ||
        "string" === typeof input["zh-Hant"]) &&
      (undefined === input.en || "string" === typeof input.en) &&
      (undefined === input.fr || "string" === typeof input.fr) &&
      (undefined === input.de || "string" === typeof input.de) &&
      (undefined === input.ja || "string" === typeof input.ja) &&
      (undefined === input.ko || "string" === typeof input.ko) &&
      (undefined === input.pt || "string" === typeof input.pt) &&
      (undefined === input.ru || "string" === typeof input.ru);
    return "object" === typeof input && null !== input && $io0(input);
  };
  if (false === __is(input))
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is DynamicEnumeration => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $guard = require("typia/lib/functional/$guard").$guard(
        "typia.createAssert",
      );
      const $ao0 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        ((("object" === typeof input.value &&
          null !== input.value &&
          false === Array.isArray(input.value)) ||
          $guard(_exceptionable, {
            path: _path + ".value",
            expected: "__type",
            value: input.value,
          })) &&
          $ao1(input.value, _path + ".value", true && _exceptionable)) ||
        $guard(_exceptionable, {
          path: _path + ".value",
          expected: "__type",
          value: input.value,
        });
      const $ao1 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        (undefined === input.ar ||
          "string" === typeof input.ar ||
          $guard(_exceptionable, {
            path: _path + ".ar",
            expected: "(string | undefined)",
            value: input.ar,
          })) &&
        (undefined === input["zh-Hans"] ||
          "string" === typeof input["zh-Hans"] ||
          $guard(_exceptionable, {
            path: _path + '["zh-Hans"]',
            expected: "(string | undefined)",
            value: input["zh-Hans"],
          })) &&
        (undefined === input["zh-Hant"] ||
          "string" === typeof input["zh-Hant"] ||
          $guard(_exceptionable, {
            path: _path + '["zh-Hant"]',
            expected: "(string | undefined)",
            value: input["zh-Hant"],
          })) &&
        (undefined === input.en ||
          "string" === typeof input.en ||
          $guard(_exceptionable, {
            path: _path + ".en",
            expected: "(string | undefined)",
            value: input.en,
          })) &&
        (undefined === input.fr ||
          "string" === typeof input.fr ||
          $guard(_exceptionable, {
            path: _path + ".fr",
            expected: "(string | undefined)",
            value: input.fr,
          })) &&
        (undefined === input.de ||
          "string" === typeof input.de ||
          $guard(_exceptionable, {
            path: _path + ".de",
            expected: "(string | undefined)",
            value: input.de,
          })) &&
        (undefined === input.ja ||
          "string" === typeof input.ja ||
          $guard(_exceptionable, {
            path: _path + ".ja",
            expected: "(string | undefined)",
            value: input.ja,
          })) &&
        (undefined === input.ko ||
          "string" === typeof input.ko ||
          $guard(_exceptionable, {
            path: _path + ".ko",
            expected: "(string | undefined)",
            value: input.ko,
          })) &&
        (undefined === input.pt ||
          "string" === typeof input.pt ||
          $guard(_exceptionable, {
            path: _path + ".pt",
            expected: "(string | undefined)",
            value: input.pt,
          })) &&
        (undefined === input.ru ||
          "string" === typeof input.ru ||
          $guard(_exceptionable, {
            path: _path + ".ru",
            expected: "(string | undefined)",
            value: input.ru,
          }));
      return (
        ((("object" === typeof input && null !== input) ||
          $guard(true, {
            path: _path + "",
            expected: "DynamicEnumeration",
            value: input,
          })) &&
          $ao0(input, _path + "", true)) ||
        $guard(true, {
          path: _path + "",
          expected: "DynamicEnumeration",
          value: input,
        })
      );
    })(input, "$input", true);
  return input;
});
