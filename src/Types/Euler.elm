module Types.Euler exposing (Euler, Order(..), encodeEuler, encodeOrder, setX, setY, setZ)

import Json.Encode as Encode exposing (Value)


type Order
    = XYZ
    | XZY
    | YXZ
    | YZX
    | ZXY
    | ZYX


type alias Euler =
    { x : Float
    , y : Float
    , z : Float
    , order : Order
    }


encodeOrder : Order -> Value
encodeOrder order =
    Encode.string <|
        case order of
            XYZ ->
                "XYZ"

            XZY ->
                "XZY"

            YXZ ->
                "YXZ"

            YZX ->
                "YZX"

            ZXY ->
                "ZXY"

            ZYX ->
                "ZYX"


encodeEuler : Euler -> Value
encodeEuler euler =
    Encode.object
        [ ( "x", Encode.float euler.x )
        , ( "y", Encode.float euler.y )
        , ( "z", Encode.float euler.z )
        , ( "order", encodeOrder euler.order )
        ]


setX : Float -> Euler -> Euler
setX x rot =
    { rot | x = x }


setY : Float -> Euler -> Euler
setY y rot =
    { rot | y = y }


setZ : Float -> Euler -> Euler
setZ z rot =
    { rot | z = z }
