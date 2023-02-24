import typia from "typia";

import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ObjectLiteralType = _test_clone(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createClone<ObjectLiteralType>(),
);