import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_json_createIsStringify_DynamicUndefined =
  _test_json_isStringify("DynamicUndefined")<DynamicUndefined>(
    DynamicUndefined,
  )(typia.json.createIsStringify<DynamicUndefined>());
