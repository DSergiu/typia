import typia from "typia";

import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_protobuf_createEncode_TypeTagCustom = _test_protobuf_encode(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)({
  encode: (input: TypeTagCustom): Uint8Array => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $ProtobufSizer =
      require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
    const $ProtobufWriter =
      require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
    const encoder = (writer: any): any => {
      const $peo0 = (input: any): any => {
        // property "id";
        writer.uint32(10);
        writer.string(input.id);
        // property "dollar";
        writer.uint32(18);
        writer.string(input.dollar);
        // property "postfix";
        writer.uint32(26);
        writer.string(input.postfix);
        // property "powerOf";
        writer.uint32(33);
        writer.double(input.powerOf);
      };
      //TypeTagCustom;
      $peo0(input);
      return writer;
    };
    const sizer = encoder(new $ProtobufSizer());
    const writer = encoder(new $ProtobufWriter(sizer));
    return writer.buffer();
  },
  decode: (input: Uint8Array): typia.Resolved<TypeTagCustom> => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $ProtobufReader =
      require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
    const $pdo0 = (reader: any, length: number = -1): any => {
      length = length < 0 ? reader.size() : reader.index() + length;
      const output = {
        id: "" as any,
        dollar: "" as any,
        postfix: "" as any,
        powerOf: undefined as any,
      } as any;
      while (reader.index() < length) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            // string;
            output.id = reader.string();
            break;
          case 2:
            // string;
            output.dollar = reader.string();
            break;
          case 3:
            // string;
            output.postfix = reader.string();
            break;
          case 4:
            // double;
            output.powerOf = reader.double();
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
  },
  message:
    'syntax = "proto3";\n\nmessage TypeTagCustom {\n    required string id = 1;\n    required string dollar = 2;\n    required string postfix = 3;\n    required double powerOf = 4;\n}',
});
