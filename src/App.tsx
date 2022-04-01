import {World, Model, ThirdPersonCamera, Skybox, useKeyboard, useLoop} from "lingo3d-react";
import * as Lingo3d from 'lingo3d'
import {useEffect, useRef} from "react";

function App() {
    const key = useKeyboard()
    const characterRef = useRef<Lingo3d.Model>(null)
    const movtion = ['w','a','s','d','Shift w','w Shift'].includes(key) ? 'walking' : 'idle'
    useEffect(() => {
        console.log(key)
    },[key])
    useLoop(() => {
        characterRef.current!.moveForward(-3)
    },key === 'w')
    useLoop(() => {
        characterRef.current!.moveForward(3)
    },key === 's')
    useLoop(() => {
        characterRef.current!.moveRight(-3)
    },key === 'd')
    useLoop(() => {
        characterRef.current!.moveRight(3)
    },key === 'a')
    useLoop(() => {
        characterRef.current!.moveForward(-6)
    },key.indexOf('w') > -1 && key.indexOf('Shift') > -1)
    return (
        <World>
            <Model src="Grassland.glb" scale={270} physics="map"/>
            <ThirdPersonCamera active mouseControl>
                <Model
                    ref={characterRef}
                    src="Fox.fbx"
                    physics="character"
                    animations={{idle: 'Idle.fbx', walking: 'Walking.fbx'}}
                    animation={movtion}
                />
            </ThirdPersonCamera>
            <Skybox texture="skybox.jpg"/>
        </World>
    )
}

export default App
