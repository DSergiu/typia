import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ArrayRecursiveUnionImplicit =
    _test_validateParse(
        "ArrayRecursiveUnionImplicit",
        ArrayRecursiveUnionImplicit.generate,
        (input) => TSON.validateParse<ArrayRecursiveUnionImplicit>(input),
        ArrayRecursiveUnionImplicit.SPOILERS,
    );