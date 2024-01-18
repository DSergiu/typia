import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_random_ConstantConstEnumeration = _test_random(
  "ConstantConstEnumeration",
)<ConstantConstEnumeration>(ConstantConstEnumeration)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<ConstantConstEnumeration> => {
      const $generator = require("typia/lib/functional/$generator").$generator;
      return (generator?.array ?? $generator.array)(() =>
        (generator?.pick ?? $generator.pick)([
          () => 0,
          () => 1,
          () => 2,
          () => "Three",
          () => "Four",
        ])(),
      );
    })((ConstantConstEnumeration as any).RANDOM),
  assert: (input: any): ConstantConstEnumeration => {
    const __is = (input: any): input is ConstantConstEnumeration => {
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
      ): input is ConstantConstEnumeration => {
        const $guard = require("typia/lib/functional/$guard").$guard(
          "typia.createAssert",
        );
        return (
          ((Array.isArray(input) ||
            $guard(true, {
              path: _path + "",
              expected: "ConstantConstEnumeration",
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
            expected: "ConstantConstEnumeration",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
});
