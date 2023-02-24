import typia from "typia";

import { TagLength } from "../../structures/TagLength";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_TagLength = _test_assertClone(
    "TagLength",
    TagLength.generate,
    (input) => typia.assertClone(input),
    TagLength.SPOILERS,
);