import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_json_stringify_TagObjectUnion =
    _test_json_stringify<TagObjectUnion>(TagObjectUnion)((input) =>
        typia.json.stringify<TagObjectUnion>(input),
    );