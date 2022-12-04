import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ArrayUnion = _test_validateParse(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => TSON.validateParse<ArrayUnion>(input),
    ArrayUnion.SPOILERS,
);