import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_createRandom_ObjectGenericAlias = _test_random(
  "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (ObjectGenericAlias as any)
      .RANDOM,
  ): typia.Resolved<ObjectGenericAlias> => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $generator = require("typia/lib/functional/$generator").$generator;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
      value:
        (generator?.customs ?? $generator.customs)?.string?.([]) ??
        (generator?.string ?? $generator.string)(),
    });
    return $ro0();
  },
  assert: (input: any): ObjectGenericAlias => {
    const __is = (input: any): input is ObjectGenericAlias => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).value
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectGenericAlias => {
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
          "string" === typeof input.value ||
          $guard(_exceptionable, {
            path: _path + ".value",
            expected: "string",
            value: input.value,
          });
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectGenericAlias.Alias",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectGenericAlias.Alias",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
});
