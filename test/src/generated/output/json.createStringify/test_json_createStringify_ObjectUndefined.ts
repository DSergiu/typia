import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_json_createStringify_ObjectUndefined = _test_json_stringify(
  "ObjectUndefined",
)<ObjectUndefined>(ObjectUndefined)((input: ObjectUndefined): string => {
  const $io1 = (input: any): boolean =>
    "string" === typeof input.id && "string" === typeof input.name;
  // @ts-ignore;
  declare const require: (lib: string) => any;
  const $string = require("typia/lib/functional/$string").$string;
  const $number = require("typia/lib/functional/$number").$number;
  const $throws = require("typia/lib/functional/$throws").$throws(
    "typia.json.createStringify",
  );
  const $so0 = (input: any): any =>
    `{${
      undefined === input.professor
        ? ""
        : `"professor":${
            undefined !== input.professor
              ? (() => {
                  if ("string" === typeof input.professor)
                    return $string(input.professor);
                  if ("number" === typeof input.professor)
                    return $number(input.professor);
                  $throws({
                    expected: "(number | string | undefined)",
                    value: input.professor,
                  });
                })()
              : undefined
          },`
    }${
      undefined === input.classroom
        ? ""
        : `"classroom":${
            undefined !== input.classroom
              ? `{"id":${$string((input.classroom as any).id)},"name":${$string(
                  (input.classroom as any).name,
                )}}`
              : undefined
          },`
    }${
      undefined === input.grade
        ? ""
        : `"grade":${
            undefined !== input.grade ? $number(input.grade) : undefined
          },`
    }${
      undefined === input.unknown || "function" === typeof input.unknown
        ? ""
        : `"unknown":${
            undefined !== input.unknown
              ? JSON.stringify(input.unknown)
              : undefined
          },`
    }"name":${$string(input.name)}}`;
  return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
});
