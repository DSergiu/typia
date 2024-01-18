import typia from "typia";

import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { CommentTagBigInt } from "../../../structures/CommentTagBigInt";

export const test_protobuf_createAssertDecode_CommentTagBigInt =
  _test_protobuf_assertDecode("CommentTagBigInt")<CommentTagBigInt>(
    CommentTagBigInt,
  )({
    decode: (input) =>
      ((input: Uint8Array): typia.Resolved<CommentTagBigInt> => {
        const decode = (
          input: Uint8Array,
        ): typia.Resolved<CommentTagBigInt> => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $ProtobufReader =
            require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
          const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
              value: undefined as any,
              ranged: undefined as any,
              minimum: undefined as any,
              maximum: undefined as any,
              multipleOf: undefined as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // int64;
                  output.value = reader.int64();
                  break;
                case 2:
                  // int64;
                  output.ranged = reader.int64();
                  break;
                case 3:
                  // int64;
                  output.minimum = reader.int64();
                  break;
                case 4:
                  // int64;
                  output.maximum = reader.int64();
                  break;
                case 5:
                  // int64;
                  output.multipleOf = reader.int64();
                  break;
                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }
            return output;
          };
          const reader = new $ProtobufReader(input);
          return $pdo0(reader);
        };
        const assert = (input: any): CommentTagBigInt => {
          const __is = (input: any): input is CommentTagBigInt => {
            return (
              "object" === typeof input &&
              null !== input &&
              "bigint" === typeof (input as any).value &&
              "bigint" === typeof (input as any).ranged &&
              0 <= (input as any).ranged &&
              (input as any).ranged <= 100 &&
              "bigint" === typeof (input as any).minimum &&
              0 <= (input as any).minimum &&
              "bigint" === typeof (input as any).maximum &&
              (input as any).maximum <= 100 &&
              "bigint" === typeof (input as any).multipleOf &&
              (input as any).multipleOf % 3n === 0n
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is CommentTagBigInt => {
              // @ts-ignore;
              declare const require: (lib: string) => any;
              const $guard = require("typia/lib/functional/$guard").$guard(
                "typia.protobuf.assertDecode",
              );
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("bigint" === typeof input.value ||
                  $guard(_exceptionable, {
                    path: _path + ".value",
                    expected: "bigint",
                    value: input.value,
                  })) &&
                (("bigint" === typeof input.ranged &&
                  (0 <= input.ranged ||
                    $guard(_exceptionable, {
                      path: _path + ".ranged",
                      expected: "bigint & Minimum<0n>",
                      value: input.ranged,
                    })) &&
                  (input.ranged <= 100 ||
                    $guard(_exceptionable, {
                      path: _path + ".ranged",
                      expected: "bigint & Maximum<100n>",
                      value: input.ranged,
                    }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".ranged",
                    expected: "(bigint & Minimum<0n> & Maximum<100n>)",
                    value: input.ranged,
                  })) &&
                (("bigint" === typeof input.minimum &&
                  (0 <= input.minimum ||
                    $guard(_exceptionable, {
                      path: _path + ".minimum",
                      expected: "bigint & Minimum<0n>",
                      value: input.minimum,
                    }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".minimum",
                    expected: "(bigint & Minimum<0n>)",
                    value: input.minimum,
                  })) &&
                (("bigint" === typeof input.maximum &&
                  (input.maximum <= 100 ||
                    $guard(_exceptionable, {
                      path: _path + ".maximum",
                      expected: "bigint & Maximum<100n>",
                      value: input.maximum,
                    }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".maximum",
                    expected: "(bigint & Maximum<100n>)",
                    value: input.maximum,
                  })) &&
                (("bigint" === typeof input.multipleOf &&
                  (input.multipleOf % 3n === 0n ||
                    $guard(_exceptionable, {
                      path: _path + ".multipleOf",
                      expected: "bigint & MultipleOf<3n>",
                      value: input.multipleOf,
                    }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".multipleOf",
                    expected: "(bigint & MultipleOf<3n>)",
                    value: input.multipleOf,
                  }));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(true, {
                    path: _path + "",
                    expected: "CommentTagBigInt",
                    value: input,
                  })) &&
                  $ao0(input, _path + "", true)) ||
                $guard(true, {
                  path: _path + "",
                  expected: "CommentTagBigInt",
                  value: input,
                })
              );
            })(input, "$input", true);
          return input;
        };
        const output = decode(input);
        return assert(output) as any;
      })(input),
    encode: (input: CommentTagBigInt): Uint8Array => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $ProtobufSizer =
        require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
      const $ProtobufWriter =
        require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "value";
          writer.uint32(8);
          writer.int64(input.value);
          // property "ranged";
          writer.uint32(16);
          writer.int64(input.ranged);
          // property "minimum";
          writer.uint32(24);
          writer.int64(input.minimum);
          // property "maximum";
          writer.uint32(32);
          writer.int64(input.maximum);
          // property "multipleOf";
          writer.uint32(40);
          writer.int64(input.multipleOf);
        };
        //CommentTagBigInt;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $ProtobufSizer());
      const writer = encoder(new $ProtobufWriter(sizer));
      return writer.buffer();
    },
  });
