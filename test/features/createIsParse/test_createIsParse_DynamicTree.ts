import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_DynamicTree = _test_isParse(
    "DynamicTree",
    DynamicTree.generate,
    TSON.createIsParse<DynamicTree>(),
    DynamicTree.SPOILERS,
);