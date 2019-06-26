port module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Json.Decode as Decode exposing (..)
import Json.Encode as Encode exposing (..)
import Model exposing (..)
import Types.AnimationRecord exposing (..)
import Types.Camera as Camera exposing (..)
import Types.Euler as Euler exposing (..)
import Types.GLTFModel exposing (..)
import Types.Transform exposing (..)
import Types.Vector2 exposing (..)
import Types.Vector3 as Vector3 exposing (..)
import Utility exposing (flip)


type alias Value =
    Encode.Value



---- PORTS ----


port threeOut : ( String, Value ) -> Cmd a


port threeIn : (Value -> a) -> Sub a


type alias ThreeIn =
    { deltaTime : Float
    , scrollTop : Float
    , mouse : Vector2
    , width : Int
    , height : Int
    }


decodeThreeIn : Decoder ThreeIn
decodeThreeIn =
    Decode.map5 ThreeIn
        (field "deltaTime" Decode.float)
        (field "scrollTop" Decode.float)
        (field "mouse" decodeVector2)
        (field "width" Decode.int)
        (field "height" Decode.int)



---- MODEL ----


init : ( Model, Cmd Msg )
init =
    ( initialModel, threeOut ( "INIT", encodeModel initialModel ) )



---- UPDATE ----


type Msg
    = FrameUpdate AnimationRecord
    | NoOp


updateCameraPosition : AnimationRecord -> Vector3 -> Vector3
updateCameraPosition animationRecord cameraPos =
    let
        desiredY =
            20 - animationRecord.scrollTop * 0.07
    in
    cameraPos
        |> Vector3.setY (cameraPos.y + (desiredY - cameraPos.y) * 0.25)


updateCameraRotation : AnimationRecord -> Euler -> Euler
updateCameraRotation animationRecord cameraRot =
    -- mouse x and mouse y are swapped?
    -- or is it that my iq is too low to understand 3d?
    let
        sensitivity =
            0.0001

        desiredX =
            let
                mid =
                    toFloat animationRecord.height / 2
            in
            (mid - animationRecord.mouse.y) * sensitivity - 0.35

        desiredY =
            let
                mid =
                    toFloat animationRecord.width / 2
            in
            (mid - animationRecord.mouse.x) * sensitivity
    in
    cameraRot
        |> Euler.setX (cameraRot.x + (desiredX - cameraRot.x) * 0.05)
        |> Euler.setY (cameraRot.y + (desiredY - cameraRot.y) * 0.05)


updateCamera : AnimationRecord -> Camera -> Camera
updateCamera animationRecord camera =
    let
        camT =
            camera.transform

        updatedCameraPosition =
            updateCameraPosition animationRecord camT.position

        updatedCameraRotation =
            updateCameraRotation animationRecord camT.rotation
    in
    camera.transform
        |> setPosition updatedCameraPosition
        |> setRotation updatedCameraRotation
        |> flip Camera.setTransform camera


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        FrameUpdate animationRecord ->
            let
                updatedCamera =
                    updateCamera animationRecord model.camera

                updatedGLTFModels =
                    List.map (gltfUpdate animationRecord) model.models

                updatedModel =
                    { model
                        | animationRecord = animationRecord
                        , camera = updatedCamera
                        , models = updatedGLTFModels
                    }
            in
            ( updatedModel, threeOut ( "UPDATE", encodeModel updatedModel ) )

        NoOp ->
            ( model, Cmd.none )



---- SUBSCRIPTIONS ----


subscriptions : Model -> Sub Msg
subscriptions model =
    threeIn <| handleThreeIn model


handleThreeIn : Model -> Value -> Msg
handleThreeIn model value =
    FrameUpdate <|
        case decodeValue decodeThreeIn value of
            Ok res ->
                { elapsedTime = model.animationRecord.elapsedTime + res.deltaTime
                , deltaTime = res.deltaTime
                , scrollTop = res.scrollTop
                , mouse =
                    { x = res.mouse.x
                    , y = res.mouse.y
                    }
                , width = res.width
                , height = res.height
                }

            Err err ->
                Debug.todo <| Debug.toString err



---- VIEW ----


heading : String -> Html Msg
heading content =
    h1 [ class "display-1 font-bold" ] [ text content ]


view : Model -> Html Msg
view model =
    let
        containerHidden =
            if model.camera.controlsEnabled then
                "hidden"

            else
                ""
    in
    div [ class ("container mx-auto " ++ containerHidden) ]
        [ hero
        , div [ class "-mt-32" ] []
        , about
        , projects
        , contact
        , div [ class "mb-24" ] []
        ]


hero : Html Msg
hero =
    let
        divider =
            div [ class "ml-4 mt-10 mb-6 w-16 h-1 bg-black" ] []

        styledLi x =
            li [ class "leading-loose" ] [ text x ]
    in
    div [ class "flex flex-col justify-center h-screen ml-24" ]
        [ h1 [ class "text-6xl font-bold" ] [ text "I'm Jason Liang" ]
        , divider
        , ul [ class "ml-2" ] <|
            List.map styledLi <|
                [ "Student"
                , "Web Developer"
                , "Functional Programming Enthusiast"
                , "Guitarist"
                , "3D Artist"
                , "😎😎😎 Epic Gamer 😎😎😎"
                ]
        , div [ class "my-8" ] []
        ]


about : Html Msg
about =
    div []
        [ heading "About Me"
        , p [] [ text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis quam placerat, condimentum orci ac, aliquet erat. Morbi turpis ante, hendrerit ut tristique et, mollis dapibus lorem. Quisque porta elit elit. In egestas est a arcu luctus fermentum. Nam dignissim, neque ut facilisis vestibulum, tellus eros lobortis elit, ut convallis neque urna sed diam. Aliquam eget semper nulla, vitae tincidunt eros. Mauris convallis fringilla nunc, a rutrum dui fermentum lacinia. Donec dapibus risus nisi, vitae tincidunt libero dignissim imperdiet. Donec at fringilla lectus. Aliquam consectetur lectus quis nisl volutpat, sit amet sollicitudin nisl vulputate. Vivamus porttitor lacus eget velit commodo consequat. Nulla in aliquet ante." ]
        ]


projects : Html Msg
projects =
    div []
        [ heading "Projects"
        ]


contact : Html Msg
contact =
    div []
        [ heading "Say Hi"
        , a
            [ class "text-xl text-blue-700 hover:underline"
            , href "mailto:jasonliang512@gmail.com"
            ]
            [ text "jasonliang512@gmail.com" ]
        ]



---- PROGRAM ----


main : Program () Model Msg
main =
    Browser.element
        { view = view
        , init = \_ -> init
        , update = update
        , subscriptions = subscriptions
        }
