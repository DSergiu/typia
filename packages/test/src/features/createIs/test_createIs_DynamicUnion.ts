import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createIs_DynamicUnion = _test_is(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)(typia.createIs<DynamicUnion>());
