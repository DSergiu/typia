import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_createAssertEquals_ObjectGenericArray = _test_assertEquals(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input: any): ObjectGenericArray => {
        const $guard = (typia.createAssertEquals as any).guard;
        const $join = (typia.createAssertEquals as any).join;
        const __is = (
            input: any,
            _exceptionable: boolean = true,
        ): input is ObjectGenericArray => {
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "object" === typeof input.pagination &&
                null !== input.pagination &&
                $io1(input.pagination, true && _exceptionable) &&
                Array.isArray(input.data) &&
                input.data.every(
                    (elem: any, _index1: number) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        $io2(elem, true && _exceptionable),
                ) &&
                (2 === Object.keys(input).length ||
                    Object.keys(input).every((key) => {
                        if (["pagination", "data"].some((prop) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io1 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "number" === typeof input.page &&
                Number.isFinite(input.page) &&
                "number" === typeof input.limit &&
                Number.isFinite(input.limit) &&
                "number" === typeof input.total_count &&
                Number.isFinite(input.total_count) &&
                "number" === typeof input.total_pages &&
                Number.isFinite(input.total_pages) &&
                (4 === Object.keys(input).length ||
                    Object.keys(input).every((key) => {
                        if (
                            [
                                "page",
                                "limit",
                                "total_count",
                                "total_pages",
                            ].some((prop) => key === prop)
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io2 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.name &&
                "number" === typeof input.age &&
                Number.isFinite(input.age) &&
                (2 === Object.keys(input).length ||
                    Object.keys(input).every((key) => {
                        if (["name", "age"].some((prop) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                "object" === typeof input && null !== input && $io0(input, true)
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectGenericArray => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("object" === typeof input.pagination &&
                        null !== input.pagination) ||
                        $guard(_exceptionable, {
                            path: _path + ".pagination",
                            expected: "Resolve<ObjectGenericArray.IPagination>",
                            value: input.pagination,
                        })) &&
                    $ao1(
                        input.pagination,
                        _path + ".pagination",
                        true && _exceptionable,
                    ) &&
                    (Array.isArray(input.data) ||
                        $guard(_exceptionable, {
                            path: _path + ".data",
                            expected:
                                "Array<Resolve<ObjectGenericArray.IPerson>>",
                            value: input.data,
                        })) &&
                    input.data.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(_exceptionable, {
                                    path: _path + ".data[" + _index1 + "]",
                                    expected:
                                        "Resolve<ObjectGenericArray.IPerson>",
                                    value: elem,
                                })) &&
                            $ao2(
                                elem,
                                _path + ".data[" + _index1 + "]",
                                true && _exceptionable,
                            ),
                    ) &&
                    (2 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key) => {
                            if (
                                ["pagination", "data"].some(
                                    (prop) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.page &&
                        Number.isFinite(input.page)) ||
                        $guard(_exceptionable, {
                            path: _path + ".page",
                            expected: "number",
                            value: input.page,
                        })) &&
                    (("number" === typeof input.limit &&
                        Number.isFinite(input.limit)) ||
                        $guard(_exceptionable, {
                            path: _path + ".limit",
                            expected: "number",
                            value: input.limit,
                        })) &&
                    (("number" === typeof input.total_count &&
                        Number.isFinite(input.total_count)) ||
                        $guard(_exceptionable, {
                            path: _path + ".total_count",
                            expected: "number",
                            value: input.total_count,
                        })) &&
                    (("number" === typeof input.total_pages &&
                        Number.isFinite(input.total_pages)) ||
                        $guard(_exceptionable, {
                            path: _path + ".total_pages",
                            expected: "number",
                            value: input.total_pages,
                        })) &&
                    (4 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key) => {
                            if (
                                [
                                    "page",
                                    "limit",
                                    "total_count",
                                    "total_pages",
                                ].some((prop) => key === prop)
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao2 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.name ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        })) &&
                    (("number" === typeof input.age &&
                        Number.isFinite(input.age)) ||
                        $guard(_exceptionable, {
                            path: _path + ".age",
                            expected: "number",
                            value: input.age,
                        })) &&
                    (2 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key) => {
                            if (["name", "age"].some((prop) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Resolve<ObjectGenericArray>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
        return input;
    },
);