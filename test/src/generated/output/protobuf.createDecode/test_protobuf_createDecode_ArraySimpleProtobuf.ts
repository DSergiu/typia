import typia from "typia";

import { _test_protobuf_decode } from "../../../internal/_test_protobuf_decode";
import { ArraySimpleProtobuf } from "../../../structures/ArraySimpleProtobuf";

export const test_protobuf_createDecode_ArraySimpleProtobuf =
  _test_protobuf_decode("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
    ArraySimpleProtobuf,
  )({
    decode: (input: Uint8Array): typia.Resolved<ArraySimpleProtobuf> => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $ProtobufReader =
        require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          boolean: [] as any,
          int32: [] as any,
          uint32: [] as any,
          int64: [] as any,
          uint64: [] as any,
          float: [] as any,
          double: [] as any,
          string: [] as any,
          bytes: [] as any,
          object: [] as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // type: Array<boolean>;
              if (2 === (tag & 7)) {
                const piece = reader.uint32() + reader.index();
                while (reader.index() < piece)
                  output.boolean.push(reader.bool());
              } else output.boolean.push(reader.bool());
              break;
            case 2:
              // type: Array<(number & Type<"int32">)>;
              if (2 === (tag & 7)) {
                const piece = reader.uint32() + reader.index();
                while (reader.index() < piece)
                  output.int32.push(reader.int32());
              } else output.int32.push(reader.int32());
              break;
            case 3:
              // type: Array<(number & Type<"uint32">)>;
              if (2 === (tag & 7)) {
                const piece = reader.uint32() + reader.index();
                while (reader.index() < piece)
                  output.uint32.push(reader.uint32());
              } else output.uint32.push(reader.uint32());
              break;
            case 4:
              // type: Array<(bigint & Type<"int64">)>;
              if (2 === (tag & 7)) {
                const piece = reader.uint32() + reader.index();
                while (reader.index() < piece)
                  output.int64.push(reader.int64());
              } else output.int64.push(reader.int64());
              break;
            case 5:
              // type: Array<(bigint & Type<"uint64">)>;
              if (2 === (tag & 7)) {
                const piece = reader.uint32() + reader.index();
                while (reader.index() < piece)
                  output.uint64.push(reader.uint64());
              } else output.uint64.push(reader.uint64());
              break;
            case 6:
              // type: Array<(number & Type<"float">)>;
              if (2 === (tag & 7)) {
                const piece = reader.uint32() + reader.index();
                while (reader.index() < piece)
                  output.float.push(reader.float());
              } else output.float.push(reader.float());
              break;
            case 7:
              // type: Array<(number & Type<"double">)>;
              if (2 === (tag & 7)) {
                const piece = reader.uint32() + reader.index();
                while (reader.index() < piece)
                  output.double.push(reader.double());
              } else output.double.push(reader.double());
              break;
            case 8:
              // type: Array<string>;
              output.string.push(reader.string());
              break;
            case 9:
              // type: Array<Uint8Array>;
              output.bytes.push(reader.bytes());
              break;
            case 10:
              // type: Array<ArraySimpleProtobuf>;
              output.object.push($pdo0(reader, reader.uint32()));
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
    encode: (input: ArraySimpleProtobuf): Uint8Array => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $ProtobufSizer =
        require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
      const $ProtobufWriter =
        require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "boolean";
          if (0 !== input.boolean.length) {
            writer.uint32(10);
            writer.fork();
            for (const elem of input.boolean) {
              writer.bool(elem);
            }
            writer.ldelim();
          }
          // property "int32";
          if (0 !== input.int32.length) {
            writer.uint32(18);
            writer.fork();
            for (const elem of input.int32) {
              writer.int32(elem);
            }
            writer.ldelim();
          }
          // property "uint32";
          if (0 !== input.uint32.length) {
            writer.uint32(26);
            writer.fork();
            for (const elem of input.uint32) {
              writer.uint32(elem);
            }
            writer.ldelim();
          }
          // property "int64";
          if (0 !== input.int64.length) {
            writer.uint32(34);
            writer.fork();
            for (const elem of input.int64) {
              writer.int64(elem);
            }
            writer.ldelim();
          }
          // property "uint64";
          if (0 !== input.uint64.length) {
            writer.uint32(42);
            writer.fork();
            for (const elem of input.uint64) {
              writer.uint64(elem);
            }
            writer.ldelim();
          }
          // property "float";
          if (0 !== input.float.length) {
            writer.uint32(50);
            writer.fork();
            for (const elem of input.float) {
              writer.float(elem);
            }
            writer.ldelim();
          }
          // property "double";
          if (0 !== input.double.length) {
            writer.uint32(58);
            writer.fork();
            for (const elem of input.double) {
              writer.double(elem);
            }
            writer.ldelim();
          }
          // property "string";
          if (0 !== input.string.length) {
            for (const elem of input.string) {
              writer.uint32(66);
              writer.string(elem);
            }
          }
          // property "bytes";
          if (0 !== input.bytes.length) {
            for (const elem of input.bytes) {
              writer.uint32(74);
              writer.bytes(elem);
            }
          }
          // property "object";
          if (0 !== input.object.length) {
            for (const elem of input.object) {
              // 10 -> ArraySimpleProtobuf;
              writer.uint32(82);
              writer.fork();
              $peo0(elem);
              writer.ldelim();
            }
          }
        };
        const $io0 = (input: any): boolean =>
          Array.isArray(input.boolean) &&
          input.boolean.every((elem: any) => "boolean" === typeof elem) &&
          Array.isArray(input.int32) &&
          input.int32.every(
            (elem: any) =>
              "number" === typeof elem &&
              Math.floor(elem) === elem &&
              -2147483648 <= elem &&
              elem <= 2147483647,
          ) &&
          Array.isArray(input.uint32) &&
          input.uint32.every(
            (elem: any) =>
              "number" === typeof elem &&
              Math.floor(elem) === elem &&
              0 <= elem &&
              elem <= 4294967295,
          ) &&
          Array.isArray(input.int64) &&
          input.int64.every((elem: any) => "bigint" === typeof elem && true) &&
          Array.isArray(input.uint64) &&
          input.uint64.every(
            (elem: any) => "bigint" === typeof elem && BigInt(0) <= elem,
          ) &&
          Array.isArray(input.float) &&
          input.float.every(
            (elem: any) =>
              "number" === typeof elem &&
              -1.175494351e38 <= elem &&
              elem <= 3.4028235e38,
          ) &&
          Array.isArray(input.double) &&
          input.double.every((elem: any) => "number" === typeof elem && true) &&
          Array.isArray(input.string) &&
          input.string.every((elem: any) => "string" === typeof elem) &&
          Array.isArray(input.bytes) &&
          input.bytes.every((elem: any) => elem instanceof Uint8Array) &&
          Array.isArray(input.object) &&
          input.object.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io0(elem),
          );
        //ArraySimpleProtobuf;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $ProtobufSizer());
      const writer = encoder(new $ProtobufWriter(sizer));
      return writer.buffer();
    },
  });
