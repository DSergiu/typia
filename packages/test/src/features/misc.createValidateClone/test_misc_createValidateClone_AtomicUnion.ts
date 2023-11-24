import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_misc_createValidateClone_AtomicUnion =
  _test_misc_validateClone("AtomicUnion")<AtomicUnion>(AtomicUnion)(
    typia.misc.createValidateClone<AtomicUnion>(),
  );
