import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createPrune_ObjectGeneric = _test_prune(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createPrune<ObjectGeneric>(),
);