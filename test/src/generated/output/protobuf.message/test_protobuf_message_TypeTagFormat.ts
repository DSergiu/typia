import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_protobuf_message_TypeTagFormat = _test_protobuf_message(
  "TypeTagFormat",
)(
  'syntax = "proto3";\n\nmessage TypeTagFormat {\n    required string byte = 1;\n    required string password = 2;\n    required string regex = 3;\n    required string uuid = 4;\n    required string email = 5;\n    required string hostname = 6;\n    required string idnEmail = 7;\n    required string idnHostname = 8;\n    required string iri = 9;\n    required string iriReference = 10;\n    required string ipv4 = 11;\n    required string ipv6 = 12;\n    required string uri = 13;\n    required string uriReference = 14;\n    required string uriTemplate = 15;\n    required string url = 16;\n    required string datetime = 17;\n    required string date = 18;\n    required string time = 19;\n    required string duration = 20;\n    required string jsonPointer = 21;\n    required string relativeJsonPointer = 22;\n}',
);
