import typia from "typia";

import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectHierarchical = _test_assertClone(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createAssertClone<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);