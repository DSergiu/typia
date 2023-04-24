import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";

export const test_assertClone_ObjectUnionImplicit = _test_assertClone(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) =>
        ((
            input: any,
        ): typia.Primitive<
            Array<
                | ObjectUnionImplicit.IPoint
                | ObjectUnionImplicit.ILine
                | ObjectUnionImplicit.ITriangle
                | ObjectUnionImplicit.IRectangle
                | ObjectUnionImplicit.IPolyline
                | ObjectUnionImplicit.IPolygon
                | ObjectUnionImplicit.ICircle
            >
        > => {
            const assert = (
                input: any,
            ): Array<
                | ObjectUnionImplicit.IPoint
                | ObjectUnionImplicit.ILine
                | ObjectUnionImplicit.ITriangle
                | ObjectUnionImplicit.IRectangle
                | ObjectUnionImplicit.IPolyline
                | ObjectUnionImplicit.IPolygon
                | ObjectUnionImplicit.ICircle
            > => {
                const $guard = (typia.assertClone as any).guard;
                const __is = (
                    input: any,
                ): input is Array<
                    | ObjectUnionImplicit.IPoint
                    | ObjectUnionImplicit.ILine
                    | ObjectUnionImplicit.ITriangle
                    | ObjectUnionImplicit.IRectangle
                    | ObjectUnionImplicit.IPolyline
                    | ObjectUnionImplicit.IPolygon
                    | ObjectUnionImplicit.ICircle
                > => {
                    const $io0 = (input: any): boolean =>
                        "number" === typeof input.x &&
                        Number.isFinite(input.x) &&
                        "number" === typeof input.y &&
                        Number.isFinite(input.y) &&
                        (null === input.slope ||
                            undefined === input.slope ||
                            ("number" === typeof input.slope &&
                                Number.isFinite(input.slope)));
                    const $io1 = (input: any): boolean =>
                        "object" === typeof input.p1 &&
                        null !== input.p1 &&
                        $io0(input.p1) &&
                        "object" === typeof input.p2 &&
                        null !== input.p2 &&
                        $io0(input.p2) &&
                        (null === input.width ||
                            undefined === input.width ||
                            ("number" === typeof input.width &&
                                Number.isFinite(input.width))) &&
                        (null === input.distance ||
                            undefined === input.distance ||
                            ("number" === typeof input.distance &&
                                Number.isFinite(input.distance)));
                    const $io2 = (input: any): boolean =>
                        "object" === typeof input.p1 &&
                        null !== input.p1 &&
                        $io0(input.p1) &&
                        "object" === typeof input.p2 &&
                        null !== input.p2 &&
                        $io0(input.p2) &&
                        "object" === typeof input.p3 &&
                        null !== input.p3 &&
                        $io0(input.p3) &&
                        (null === input.width ||
                            undefined === input.width ||
                            ("number" === typeof input.width &&
                                Number.isFinite(input.width))) &&
                        (null === input.height ||
                            undefined === input.height ||
                            ("number" === typeof input.height &&
                                Number.isFinite(input.height))) &&
                        (null === input.area ||
                            undefined === input.area ||
                            ("number" === typeof input.area &&
                                Number.isFinite(input.area)));
                    const $io3 = (input: any): boolean =>
                        "object" === typeof input.p1 &&
                        null !== input.p1 &&
                        $io0(input.p1) &&
                        "object" === typeof input.p2 &&
                        null !== input.p2 &&
                        $io0(input.p2) &&
                        "object" === typeof input.p3 &&
                        null !== input.p3 &&
                        $io0(input.p3) &&
                        "object" === typeof input.p4 &&
                        null !== input.p4 &&
                        $io0(input.p4) &&
                        (null === input.width ||
                            undefined === input.width ||
                            ("number" === typeof input.width &&
                                Number.isFinite(input.width))) &&
                        (null === input.height ||
                            undefined === input.height ||
                            ("number" === typeof input.height &&
                                Number.isFinite(input.height))) &&
                        (null === input.area ||
                            undefined === input.area ||
                            ("number" === typeof input.area &&
                                Number.isFinite(input.area)));
                    const $io4 = (input: any): boolean =>
                        Array.isArray(input.points) &&
                        input.points.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io0(elem),
                        ) &&
                        (null === input.length ||
                            undefined === input.length ||
                            ("number" === typeof input.length &&
                                Number.isFinite(input.length)));
                    const $io5 = (input: any): boolean =>
                        "object" === typeof input.outer &&
                        null !== input.outer &&
                        $io4(input.outer) &&
                        (undefined === input.inner ||
                            (Array.isArray(input.inner) &&
                                input.inner.every(
                                    (elem: any) =>
                                        "object" === typeof elem &&
                                        null !== elem &&
                                        $io4(elem),
                                ))) &&
                        (null === input.area ||
                            undefined === input.area ||
                            ("number" === typeof input.area &&
                                Number.isFinite(input.area)));
                    const $io6 = (input: any): boolean =>
                        (undefined === input.centroid ||
                            ("object" === typeof input.centroid &&
                                null !== input.centroid &&
                                $io0(input.centroid))) &&
                        "number" === typeof input.radius &&
                        Number.isFinite(input.radius) &&
                        (null === input.area ||
                            undefined === input.area ||
                            ("number" === typeof input.area &&
                                Number.isFinite(input.area)));
                    const $iu0 = (input: any): any =>
                        (() => {
                            if (undefined !== input.x) return $io0(input);
                            if (undefined !== input.p4) return $io3(input);
                            if (undefined !== input.points) return $io4(input);
                            if (undefined !== input.outer) return $io5(input);
                            if (undefined !== input.radius) return $io6(input);
                            return (() => {
                                if (undefined !== input.p3) return $io2(input);
                                return $io1(input);
                            })();
                        })();
                    return (
                        Array.isArray(input) &&
                        input.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu0(elem),
                        )
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is Array<
                        | ObjectUnionImplicit.IPoint
                        | ObjectUnionImplicit.ILine
                        | ObjectUnionImplicit.ITriangle
                        | ObjectUnionImplicit.IRectangle
                        | ObjectUnionImplicit.IPolyline
                        | ObjectUnionImplicit.IPolygon
                        | ObjectUnionImplicit.ICircle
                    > => {
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("number" === typeof input.x &&
                                Number.isFinite(input.x)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".x",
                                    expected: "number",
                                    value: input.x,
                                })) &&
                            (("number" === typeof input.y &&
                                Number.isFinite(input.y)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".y",
                                    expected: "number",
                                    value: input.y,
                                })) &&
                            (null === input.slope ||
                                undefined === input.slope ||
                                ("number" === typeof input.slope &&
                                    Number.isFinite(input.slope)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".slope",
                                    expected: "(null | number | undefined)",
                                    value: input.slope,
                                }));
                        const $ao1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("object" === typeof input.p1 &&
                                null !== input.p1) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p1",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p1,
                                })) &&
                            $ao0(
                                input.p1,
                                _path + ".p1",
                                true && _exceptionable,
                            ) &&
                            (("object" === typeof input.p2 &&
                                null !== input.p2) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p2",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p2,
                                })) &&
                            $ao0(
                                input.p2,
                                _path + ".p2",
                                true && _exceptionable,
                            ) &&
                            (null === input.width ||
                                undefined === input.width ||
                                ("number" === typeof input.width &&
                                    Number.isFinite(input.width)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".width",
                                    expected: "(null | number | undefined)",
                                    value: input.width,
                                })) &&
                            (null === input.distance ||
                                undefined === input.distance ||
                                ("number" === typeof input.distance &&
                                    Number.isFinite(input.distance)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".distance",
                                    expected: "(null | number | undefined)",
                                    value: input.distance,
                                }));
                        const $ao2 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("object" === typeof input.p1 &&
                                null !== input.p1) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p1",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p1,
                                })) &&
                            $ao0(
                                input.p1,
                                _path + ".p1",
                                true && _exceptionable,
                            ) &&
                            (("object" === typeof input.p2 &&
                                null !== input.p2) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p2",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p2,
                                })) &&
                            $ao0(
                                input.p2,
                                _path + ".p2",
                                true && _exceptionable,
                            ) &&
                            (("object" === typeof input.p3 &&
                                null !== input.p3) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p3",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p3,
                                })) &&
                            $ao0(
                                input.p3,
                                _path + ".p3",
                                true && _exceptionable,
                            ) &&
                            (null === input.width ||
                                undefined === input.width ||
                                ("number" === typeof input.width &&
                                    Number.isFinite(input.width)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".width",
                                    expected: "(null | number | undefined)",
                                    value: input.width,
                                })) &&
                            (null === input.height ||
                                undefined === input.height ||
                                ("number" === typeof input.height &&
                                    Number.isFinite(input.height)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".height",
                                    expected: "(null | number | undefined)",
                                    value: input.height,
                                })) &&
                            (null === input.area ||
                                undefined === input.area ||
                                ("number" === typeof input.area &&
                                    Number.isFinite(input.area)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".area",
                                    expected: "(null | number | undefined)",
                                    value: input.area,
                                }));
                        const $ao3 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("object" === typeof input.p1 &&
                                null !== input.p1) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p1",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p1,
                                })) &&
                            $ao0(
                                input.p1,
                                _path + ".p1",
                                true && _exceptionable,
                            ) &&
                            (("object" === typeof input.p2 &&
                                null !== input.p2) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p2",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p2,
                                })) &&
                            $ao0(
                                input.p2,
                                _path + ".p2",
                                true && _exceptionable,
                            ) &&
                            (("object" === typeof input.p3 &&
                                null !== input.p3) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p3",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p3,
                                })) &&
                            $ao0(
                                input.p3,
                                _path + ".p3",
                                true && _exceptionable,
                            ) &&
                            (("object" === typeof input.p4 &&
                                null !== input.p4) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p4",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p4,
                                })) &&
                            $ao0(
                                input.p4,
                                _path + ".p4",
                                true && _exceptionable,
                            ) &&
                            (null === input.width ||
                                undefined === input.width ||
                                ("number" === typeof input.width &&
                                    Number.isFinite(input.width)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".width",
                                    expected: "(null | number | undefined)",
                                    value: input.width,
                                })) &&
                            (null === input.height ||
                                undefined === input.height ||
                                ("number" === typeof input.height &&
                                    Number.isFinite(input.height)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".height",
                                    expected: "(null | number | undefined)",
                                    value: input.height,
                                })) &&
                            (null === input.area ||
                                undefined === input.area ||
                                ("number" === typeof input.area &&
                                    Number.isFinite(input.area)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".area",
                                    expected: "(null | number | undefined)",
                                    value: input.area,
                                }));
                        const $ao4 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (Array.isArray(input.points) ||
                                $guard(_exceptionable, {
                                    path: _path + ".points",
                                    expected:
                                        "Array<Resolve<ObjectUnionImplicit.IPoint>>",
                                    value: input.points,
                                })) &&
                            input.points.every(
                                (elem: any, _index2: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".points[" +
                                                _index2 +
                                                "]",
                                            expected:
                                                "Resolve<ObjectUnionImplicit.IPoint>",
                                            value: elem,
                                        })) &&
                                    $ao0(
                                        elem,
                                        _path + ".points[" + _index2 + "]",
                                        true && _exceptionable,
                                    ),
                            ) &&
                            (null === input.length ||
                                undefined === input.length ||
                                ("number" === typeof input.length &&
                                    Number.isFinite(input.length)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".length",
                                    expected: "(null | number | undefined)",
                                    value: input.length,
                                }));
                        const $ao5 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("object" === typeof input.outer &&
                                null !== input.outer) ||
                                $guard(_exceptionable, {
                                    path: _path + ".outer",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPolyline>",
                                    value: input.outer,
                                })) &&
                            $ao4(
                                input.outer,
                                _path + ".outer",
                                true && _exceptionable,
                            ) &&
                            (undefined === input.inner ||
                                ((Array.isArray(input.inner) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".inner",
                                        expected:
                                            "(Array<Resolve<ObjectUnionImplicit.IPolyline>> | undefined)",
                                        value: input.inner,
                                    })) &&
                                    input.inner.every(
                                        (elem: any, _index3: number) =>
                                            (("object" === typeof elem &&
                                                null !== elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".inner[" +
                                                        _index3 +
                                                        "]",
                                                    expected:
                                                        "Resolve<ObjectUnionImplicit.IPolyline>",
                                                    value: elem,
                                                })) &&
                                            $ao4(
                                                elem,
                                                _path +
                                                    ".inner[" +
                                                    _index3 +
                                                    "]",
                                                true && _exceptionable,
                                            ),
                                    ))) &&
                            (null === input.area ||
                                undefined === input.area ||
                                ("number" === typeof input.area &&
                                    Number.isFinite(input.area)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".area",
                                    expected: "(null | number | undefined)",
                                    value: input.area,
                                }));
                        const $ao6 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (undefined === input.centroid ||
                                ((("object" === typeof input.centroid &&
                                    null !== input.centroid) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".centroid",
                                        expected:
                                            "(Resolve<ObjectUnionImplicit.IPoint> | undefined)",
                                        value: input.centroid,
                                    })) &&
                                    $ao0(
                                        input.centroid,
                                        _path + ".centroid",
                                        true && _exceptionable,
                                    ))) &&
                            (("number" === typeof input.radius &&
                                Number.isFinite(input.radius)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".radius",
                                    expected: "number",
                                    value: input.radius,
                                })) &&
                            (null === input.area ||
                                undefined === input.area ||
                                ("number" === typeof input.area &&
                                    Number.isFinite(input.area)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".area",
                                    expected: "(null | number | undefined)",
                                    value: input.area,
                                }));
                        const $au0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            (() => {
                                if (undefined !== input.x)
                                    return $ao0(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (undefined !== input.p4)
                                    return $ao3(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (undefined !== input.points)
                                    return $ao4(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (undefined !== input.outer)
                                    return $ao5(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (undefined !== input.radius)
                                    return $ao6(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                return (() => {
                                    if (undefined !== input.p3)
                                        return $ao2(
                                            input,
                                            _path,
                                            true && _exceptionable,
                                        );
                                    return $ao1(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                })();
                            })();
                        return (
                            (Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected:
                                        "Array<(Resolve<ObjectUnionImplicit.ICircle> | Resolve<ObjectUnionImplicit.ILine> | Resolve<ObjectUnionImplicit.IPoint> | Resolve<ObjectUnionImplicit.IPolygon> | Resolve<ObjectUnionImplicit.IPolyline> | Resolve<ObjectUnionImplicit.IRectangle> | Resolve<ObjectUnionImplicit.ITriangle>)>",
                                    value: input,
                                })) &&
                            input.every(
                                (elem: any, _index1: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Resolve<ObjectUnionImplicit.ICircle> | Resolve<ObjectUnionImplicit.ILine> | Resolve<ObjectUnionImplicit.IPoint> | Resolve<ObjectUnionImplicit.IPolygon> | Resolve<ObjectUnionImplicit.IPolyline> | Resolve<ObjectUnionImplicit.IRectangle> | Resolve<ObjectUnionImplicit.ITriangle>)",
                                            value: elem,
                                        })) &&
                                    $au0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    ),
                            )
                        );
                    })(input, "$input", true);
                return input;
            };
            const clone = (
                input: Array<
                    | ObjectUnionImplicit.IPoint
                    | ObjectUnionImplicit.ILine
                    | ObjectUnionImplicit.ITriangle
                    | ObjectUnionImplicit.IRectangle
                    | ObjectUnionImplicit.IPolyline
                    | ObjectUnionImplicit.IPolygon
                    | ObjectUnionImplicit.ICircle
                >,
            ): typia.Primitive<
                Array<
                    | ObjectUnionImplicit.IPoint
                    | ObjectUnionImplicit.ILine
                    | ObjectUnionImplicit.ITriangle
                    | ObjectUnionImplicit.IRectangle
                    | ObjectUnionImplicit.IPolyline
                    | ObjectUnionImplicit.IPolygon
                    | ObjectUnionImplicit.ICircle
                >
            > => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.x &&
                    "number" === typeof input.y &&
                    (null === input.slope ||
                        undefined === input.slope ||
                        "number" === typeof input.slope);
                const $io1 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io0(input.p1) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io0(input.p2) &&
                    (null === input.width ||
                        undefined === input.width ||
                        "number" === typeof input.width) &&
                    (null === input.distance ||
                        undefined === input.distance ||
                        "number" === typeof input.distance);
                const $io2 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io0(input.p1) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io0(input.p2) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    $io0(input.p3) &&
                    (null === input.width ||
                        undefined === input.width ||
                        "number" === typeof input.width) &&
                    (null === input.height ||
                        undefined === input.height ||
                        "number" === typeof input.height) &&
                    (null === input.area ||
                        undefined === input.area ||
                        "number" === typeof input.area);
                const $io3 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io0(input.p1) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io0(input.p2) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    $io0(input.p3) &&
                    "object" === typeof input.p4 &&
                    null !== input.p4 &&
                    $io0(input.p4) &&
                    (null === input.width ||
                        undefined === input.width ||
                        "number" === typeof input.width) &&
                    (null === input.height ||
                        undefined === input.height ||
                        "number" === typeof input.height) &&
                    (null === input.area ||
                        undefined === input.area ||
                        "number" === typeof input.area);
                const $io4 = (input: any): boolean =>
                    Array.isArray(input.points) &&
                    input.points.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    ) &&
                    (null === input.length ||
                        undefined === input.length ||
                        "number" === typeof input.length);
                const $io5 = (input: any): boolean =>
                    "object" === typeof input.outer &&
                    null !== input.outer &&
                    $io4(input.outer) &&
                    (undefined === input.inner ||
                        (Array.isArray(input.inner) &&
                            input.inner.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io4(elem),
                            ))) &&
                    (null === input.area ||
                        undefined === input.area ||
                        "number" === typeof input.area);
                const $io6 = (input: any): boolean =>
                    (undefined === input.centroid ||
                        ("object" === typeof input.centroid &&
                            null !== input.centroid &&
                            $io0(input.centroid))) &&
                    "number" === typeof input.radius &&
                    (null === input.area ||
                        undefined === input.area ||
                        "number" === typeof input.area);
                const $iu0 = (input: any): any =>
                    (() => {
                        if (undefined !== input.x) return $io0(input);
                        if (undefined !== input.p4) return $io3(input);
                        if (undefined !== input.points) return $io4(input);
                        if (undefined !== input.outer) return $io5(input);
                        if (undefined !== input.radius) return $io6(input);
                        return (() => {
                            if (undefined !== input.p3) return $io2(input);
                            return $io1(input);
                        })();
                    })();
                const $co0 = (input: any): any => ({
                    x: input.x as any,
                    y: input.y as any,
                    slope: input.slope as any,
                });
                const $co1 = (input: any): any => ({
                    p1:
                        "object" === typeof input.p1 && null !== input.p1
                            ? $co0(input.p1)
                            : (input.p1 as any),
                    p2:
                        "object" === typeof input.p2 && null !== input.p2
                            ? $co0(input.p2)
                            : (input.p2 as any),
                    width: input.width as any,
                    distance: input.distance as any,
                });
                const $co2 = (input: any): any => ({
                    p1:
                        "object" === typeof input.p1 && null !== input.p1
                            ? $co0(input.p1)
                            : (input.p1 as any),
                    p2:
                        "object" === typeof input.p2 && null !== input.p2
                            ? $co0(input.p2)
                            : (input.p2 as any),
                    p3:
                        "object" === typeof input.p3 && null !== input.p3
                            ? $co0(input.p3)
                            : (input.p3 as any),
                    width: input.width as any,
                    height: input.height as any,
                    area: input.area as any,
                });
                const $co3 = (input: any): any => ({
                    p1:
                        "object" === typeof input.p1 && null !== input.p1
                            ? $co0(input.p1)
                            : (input.p1 as any),
                    p2:
                        "object" === typeof input.p2 && null !== input.p2
                            ? $co0(input.p2)
                            : (input.p2 as any),
                    p3:
                        "object" === typeof input.p3 && null !== input.p3
                            ? $co0(input.p3)
                            : (input.p3 as any),
                    p4:
                        "object" === typeof input.p4 && null !== input.p4
                            ? $co0(input.p4)
                            : (input.p4 as any),
                    width: input.width as any,
                    height: input.height as any,
                    area: input.area as any,
                });
                const $co4 = (input: any): any => ({
                    points: Array.isArray(input.points)
                        ? input.points.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co0(elem)
                                  : (elem as any),
                          )
                        : (input.points as any),
                    length: input.length as any,
                });
                const $co5 = (input: any): any => ({
                    outer:
                        "object" === typeof input.outer && null !== input.outer
                            ? $co4(input.outer)
                            : (input.outer as any),
                    inner: Array.isArray(input.inner)
                        ? input.inner.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co4(elem)
                                  : (elem as any),
                          )
                        : (input.inner as any),
                    area: input.area as any,
                });
                const $co6 = (input: any): any => ({
                    centroid:
                        "object" === typeof input.centroid &&
                        null !== input.centroid
                            ? $co0(input.centroid)
                            : (input.centroid as any),
                    radius: input.radius as any,
                    area: input.area as any,
                });
                const $cu0 = (input: any): any =>
                    (() => {
                        if (undefined !== input.x) return $co0(input);
                        if (undefined !== input.p4) return $co3(input);
                        if (undefined !== input.points) return $co4(input);
                        if (undefined !== input.outer) return $co5(input);
                        if (undefined !== input.radius) return $co6(input);
                        return (() => {
                            if (undefined !== input.p3) return $co2(input);
                            return $co1(input);
                        })();
                    })();
                return Array.isArray(input)
                    ? input.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $cu0(elem)
                              : (elem as any),
                      )
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    ObjectUnionImplicit.SPOILERS,
);