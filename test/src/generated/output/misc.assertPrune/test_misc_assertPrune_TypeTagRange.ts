import typia from "typia";

import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_misc_assertPrune_TypeTagRange = _test_misc_assertPrune(
  "TypeTagRange",
)<TypeTagRange>(TypeTagRange)((input) =>
  ((input: any): TypeTagRange => {
    const assert = (input: any): TypeTagRange => {
      const __is = (input: any): input is TypeTagRange => {
        const $io0 = (input: any): boolean =>
          Array.isArray(input.value) &&
          input.value.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io1(elem),
          );
        const $io1 = (input: any): boolean =>
          "number" === typeof input.greater &&
          Math.floor(input.greater) === input.greater &&
          -2147483648 <= input.greater &&
          input.greater <= 2147483647 &&
          3 < input.greater &&
          "number" === typeof input.greater_equal &&
          Math.floor(input.greater_equal) === input.greater_equal &&
          -2147483648 <= input.greater_equal &&
          input.greater_equal <= 2147483647 &&
          3 <= input.greater_equal &&
          "number" === typeof input.less &&
          Math.floor(input.less) === input.less &&
          -2147483648 <= input.less &&
          input.less <= 2147483647 &&
          input.less < 7 &&
          "number" === typeof input.less_equal &&
          Math.floor(input.less_equal) === input.less_equal &&
          -2147483648 <= input.less_equal &&
          input.less_equal <= 2147483647 &&
          input.less_equal <= 7 &&
          "number" === typeof input.greater_less &&
          Math.floor(input.greater_less) === input.greater_less &&
          -2147483648 <= input.greater_less &&
          input.greater_less <= 2147483647 &&
          3 < input.greater_less &&
          input.greater_less < 7 &&
          "number" === typeof input.greater_equal_less &&
          Math.floor(input.greater_equal_less) === input.greater_equal_less &&
          -2147483648 <= input.greater_equal_less &&
          input.greater_equal_less <= 2147483647 &&
          3 <= input.greater_equal_less &&
          input.greater_equal_less < 7 &&
          "number" === typeof input.greater_less_equal &&
          Math.floor(input.greater_less_equal) === input.greater_less_equal &&
          -2147483648 <= input.greater_less_equal &&
          input.greater_less_equal <= 2147483647 &&
          3 < input.greater_less_equal &&
          input.greater_less_equal <= 7 &&
          "number" === typeof input.greater_equal_less_equal &&
          Math.floor(input.greater_equal_less_equal) ===
            input.greater_equal_less_equal &&
          -2147483648 <= input.greater_equal_less_equal &&
          input.greater_equal_less_equal <= 2147483647 &&
          3 <= input.greater_equal_less_equal &&
          input.greater_equal_less_equal <= 7 &&
          "number" === typeof input.equal &&
          Math.floor(input.equal) === input.equal &&
          -2147483648 <= input.equal &&
          input.equal <= 2147483647 &&
          10 <= input.equal &&
          input.equal <= 10;
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is TypeTagRange => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $guard = require("typia/lib/functional/$guard").$guard(
            "typia.misc.assertPrune",
          );
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ((Array.isArray(input.value) ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "Array<TypeTagRange.Type>",
                value: input.value,
              })) &&
              input.value.every(
                (elem: any, _index1: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(_exceptionable, {
                      path: _path + ".value[" + _index1 + "]",
                      expected: "TypeTagRange.Type",
                      value: elem,
                    })) &&
                    $ao1(
                      elem,
                      _path + ".value[" + _index1 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(_exceptionable, {
                    path: _path + ".value[" + _index1 + "]",
                    expected: "TypeTagRange.Type",
                    value: elem,
                  }),
              )) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "Array<TypeTagRange.Type>",
              value: input.value,
            });
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.greater &&
              ((Math.floor(input.greater) === input.greater &&
                -2147483648 <= input.greater &&
                input.greater <= 2147483647) ||
                $guard(_exceptionable, {
                  path: _path + ".greater",
                  expected: 'number & Type<"int32">',
                  value: input.greater,
                })) &&
              (3 < input.greater ||
                $guard(_exceptionable, {
                  path: _path + ".greater",
                  expected: "number & ExclusiveMinimum<3>",
                  value: input.greater,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".greater",
                expected: '(number & Type<"int32"> & ExclusiveMinimum<3>)',
                value: input.greater,
              })) &&
            (("number" === typeof input.greater_equal &&
              ((Math.floor(input.greater_equal) === input.greater_equal &&
                -2147483648 <= input.greater_equal &&
                input.greater_equal <= 2147483647) ||
                $guard(_exceptionable, {
                  path: _path + ".greater_equal",
                  expected: 'number & Type<"int32">',
                  value: input.greater_equal,
                })) &&
              (3 <= input.greater_equal ||
                $guard(_exceptionable, {
                  path: _path + ".greater_equal",
                  expected: "number & Minimum<3>",
                  value: input.greater_equal,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".greater_equal",
                expected: '(number & Type<"int32"> & Minimum<3>)',
                value: input.greater_equal,
              })) &&
            (("number" === typeof input.less &&
              ((Math.floor(input.less) === input.less &&
                -2147483648 <= input.less &&
                input.less <= 2147483647) ||
                $guard(_exceptionable, {
                  path: _path + ".less",
                  expected: 'number & Type<"int32">',
                  value: input.less,
                })) &&
              (input.less < 7 ||
                $guard(_exceptionable, {
                  path: _path + ".less",
                  expected: "number & ExclusiveMaximum<7>",
                  value: input.less,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".less",
                expected: '(number & Type<"int32"> & ExclusiveMaximum<7>)',
                value: input.less,
              })) &&
            (("number" === typeof input.less_equal &&
              ((Math.floor(input.less_equal) === input.less_equal &&
                -2147483648 <= input.less_equal &&
                input.less_equal <= 2147483647) ||
                $guard(_exceptionable, {
                  path: _path + ".less_equal",
                  expected: 'number & Type<"int32">',
                  value: input.less_equal,
                })) &&
              (input.less_equal <= 7 ||
                $guard(_exceptionable, {
                  path: _path + ".less_equal",
                  expected: "number & Maximum<7>",
                  value: input.less_equal,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".less_equal",
                expected: '(number & Type<"int32"> & Maximum<7>)',
                value: input.less_equal,
              })) &&
            (("number" === typeof input.greater_less &&
              ((Math.floor(input.greater_less) === input.greater_less &&
                -2147483648 <= input.greater_less &&
                input.greater_less <= 2147483647) ||
                $guard(_exceptionable, {
                  path: _path + ".greater_less",
                  expected: 'number & Type<"int32">',
                  value: input.greater_less,
                })) &&
              (3 < input.greater_less ||
                $guard(_exceptionable, {
                  path: _path + ".greater_less",
                  expected: "number & ExclusiveMinimum<3>",
                  value: input.greater_less,
                })) &&
              (input.greater_less < 7 ||
                $guard(_exceptionable, {
                  path: _path + ".greater_less",
                  expected: "number & ExclusiveMaximum<7>",
                  value: input.greater_less,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".greater_less",
                expected:
                  '(number & Type<"int32"> & ExclusiveMinimum<3> & ExclusiveMaximum<7>)',
                value: input.greater_less,
              })) &&
            (("number" === typeof input.greater_equal_less &&
              ((Math.floor(input.greater_equal_less) ===
                input.greater_equal_less &&
                -2147483648 <= input.greater_equal_less &&
                input.greater_equal_less <= 2147483647) ||
                $guard(_exceptionable, {
                  path: _path + ".greater_equal_less",
                  expected: 'number & Type<"int32">',
                  value: input.greater_equal_less,
                })) &&
              (3 <= input.greater_equal_less ||
                $guard(_exceptionable, {
                  path: _path + ".greater_equal_less",
                  expected: "number & Minimum<3>",
                  value: input.greater_equal_less,
                })) &&
              (input.greater_equal_less < 7 ||
                $guard(_exceptionable, {
                  path: _path + ".greater_equal_less",
                  expected: "number & ExclusiveMaximum<7>",
                  value: input.greater_equal_less,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".greater_equal_less",
                expected:
                  '(number & Type<"int32"> & Minimum<3> & ExclusiveMaximum<7>)',
                value: input.greater_equal_less,
              })) &&
            (("number" === typeof input.greater_less_equal &&
              ((Math.floor(input.greater_less_equal) ===
                input.greater_less_equal &&
                -2147483648 <= input.greater_less_equal &&
                input.greater_less_equal <= 2147483647) ||
                $guard(_exceptionable, {
                  path: _path + ".greater_less_equal",
                  expected: 'number & Type<"int32">',
                  value: input.greater_less_equal,
                })) &&
              (3 < input.greater_less_equal ||
                $guard(_exceptionable, {
                  path: _path + ".greater_less_equal",
                  expected: "number & ExclusiveMinimum<3>",
                  value: input.greater_less_equal,
                })) &&
              (input.greater_less_equal <= 7 ||
                $guard(_exceptionable, {
                  path: _path + ".greater_less_equal",
                  expected: "number & Maximum<7>",
                  value: input.greater_less_equal,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".greater_less_equal",
                expected:
                  '(number & Type<"int32"> & ExclusiveMinimum<3> & Maximum<7>)',
                value: input.greater_less_equal,
              })) &&
            (("number" === typeof input.greater_equal_less_equal &&
              ((Math.floor(input.greater_equal_less_equal) ===
                input.greater_equal_less_equal &&
                -2147483648 <= input.greater_equal_less_equal &&
                input.greater_equal_less_equal <= 2147483647) ||
                $guard(_exceptionable, {
                  path: _path + ".greater_equal_less_equal",
                  expected: 'number & Type<"int32">',
                  value: input.greater_equal_less_equal,
                })) &&
              (3 <= input.greater_equal_less_equal ||
                $guard(_exceptionable, {
                  path: _path + ".greater_equal_less_equal",
                  expected: "number & Minimum<3>",
                  value: input.greater_equal_less_equal,
                })) &&
              (input.greater_equal_less_equal <= 7 ||
                $guard(_exceptionable, {
                  path: _path + ".greater_equal_less_equal",
                  expected: "number & Maximum<7>",
                  value: input.greater_equal_less_equal,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".greater_equal_less_equal",
                expected: '(number & Type<"int32"> & Minimum<3> & Maximum<7>)',
                value: input.greater_equal_less_equal,
              })) &&
            (("number" === typeof input.equal &&
              ((Math.floor(input.equal) === input.equal &&
                -2147483648 <= input.equal &&
                input.equal <= 2147483647) ||
                $guard(_exceptionable, {
                  path: _path + ".equal",
                  expected: 'number & Type<"int32">',
                  value: input.equal,
                })) &&
              (10 <= input.equal ||
                $guard(_exceptionable, {
                  path: _path + ".equal",
                  expected: "number & Minimum<10>",
                  value: input.equal,
                })) &&
              (input.equal <= 10 ||
                $guard(_exceptionable, {
                  path: _path + ".equal",
                  expected: "number & Maximum<10>",
                  value: input.equal,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".equal",
                expected:
                  '(number & Type<"int32"> & Minimum<10> & Maximum<10>)',
                value: input.equal,
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "TypeTagRange",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "TypeTagRange",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const prune = (input: TypeTagRange): void => {
      const $io1 = (input: any): boolean =>
        "number" === typeof input.greater &&
        Math.floor(input.greater) === input.greater &&
        -2147483648 <= input.greater &&
        input.greater <= 2147483647 &&
        3 < input.greater &&
        "number" === typeof input.greater_equal &&
        Math.floor(input.greater_equal) === input.greater_equal &&
        -2147483648 <= input.greater_equal &&
        input.greater_equal <= 2147483647 &&
        3 <= input.greater_equal &&
        "number" === typeof input.less &&
        Math.floor(input.less) === input.less &&
        -2147483648 <= input.less &&
        input.less <= 2147483647 &&
        input.less < 7 &&
        "number" === typeof input.less_equal &&
        Math.floor(input.less_equal) === input.less_equal &&
        -2147483648 <= input.less_equal &&
        input.less_equal <= 2147483647 &&
        input.less_equal <= 7 &&
        "number" === typeof input.greater_less &&
        Math.floor(input.greater_less) === input.greater_less &&
        -2147483648 <= input.greater_less &&
        input.greater_less <= 2147483647 &&
        3 < input.greater_less &&
        input.greater_less < 7 &&
        "number" === typeof input.greater_equal_less &&
        Math.floor(input.greater_equal_less) === input.greater_equal_less &&
        -2147483648 <= input.greater_equal_less &&
        input.greater_equal_less <= 2147483647 &&
        3 <= input.greater_equal_less &&
        input.greater_equal_less < 7 &&
        "number" === typeof input.greater_less_equal &&
        Math.floor(input.greater_less_equal) === input.greater_less_equal &&
        -2147483648 <= input.greater_less_equal &&
        input.greater_less_equal <= 2147483647 &&
        3 < input.greater_less_equal &&
        input.greater_less_equal <= 7 &&
        "number" === typeof input.greater_equal_less_equal &&
        Math.floor(input.greater_equal_less_equal) ===
          input.greater_equal_less_equal &&
        -2147483648 <= input.greater_equal_less_equal &&
        input.greater_equal_less_equal <= 2147483647 &&
        3 <= input.greater_equal_less_equal &&
        input.greater_equal_less_equal <= 7 &&
        "number" === typeof input.equal &&
        Math.floor(input.equal) === input.equal &&
        -2147483648 <= input.equal &&
        input.equal <= 2147483647 &&
        10 <= input.equal &&
        input.equal <= 10;
      const $pp0 = (input: any) =>
        input.forEach((elem: any) => {
          if ("object" === typeof elem && null !== elem) $po1(elem);
        });
      const $po0 = (input: any): any => {
        if (Array.isArray(input.value)) $pp0(input.value);
        for (const key of Object.keys(input)) {
          if ("value" === key) continue;
          delete input[key];
        }
      };
      const $po1 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if (
            "greater" === key ||
            "greater_equal" === key ||
            "less" === key ||
            "less_equal" === key ||
            "greater_less" === key ||
            "greater_equal_less" === key ||
            "greater_less_equal" === key ||
            "greater_equal_less_equal" === key ||
            "equal" === key
          )
            continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    assert(input);
    prune(input);
    return input;
  })(input),
);
