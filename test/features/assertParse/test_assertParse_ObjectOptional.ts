import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ObjectOptional = _test_assertParse(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => TSON.assertParse<ObjectOptional>(input),
    ObjectOptional.SPOILERS,
);