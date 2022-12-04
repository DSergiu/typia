import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ObjectLiteralProperty = _test_assertParse(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    TSON.createAssertParse<ObjectLiteralProperty>(),
    ObjectLiteralProperty.SPOILERS,
);