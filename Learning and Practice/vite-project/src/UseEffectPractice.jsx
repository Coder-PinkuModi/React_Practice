// useEffect is one of the important hook like useState in react
// useEffect performs side effects in functional components
//It is similar to the componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods in React.

//useEffect can be used:-
//1. useEffect(function) can be used while rendering or mount of a componenet each time
//2. useEffect(function, []) can be used while rendering or mount of a componenet only once
//3. useEffect(function, [dependencies]) can be used while rendering or mount of a componenet only when the dependecny value changes
//Remember:- you can pass more than one dependency in useEffect function as an array(sort of like a dependency list)

//useEffect has its own lifecycle
//1. componentDidMount
//2. componentDidUpdate
//3. componentWillUnmount

//useEffect has vast functionality with event listeners, timer, subscriptions(real-time updates), DOM manipulation, fetching data from an Api, clean up when a component unmounts.

import React, { useEffect, useState } from "react"


function UseEffectTitleChange() {

    const [height, setHeight] = useState(window.innerHeight)
    const [width, setWidth] = useState(window.innerWidth)


    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    })

    useEffect(() => {
        window.document.title = `Size: ${height} X ${width}`
    }, [width, height]
    )

    function handleResize() {
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }


    return (
        <div>
            <p>Height: {height} Width: {width}</p>
        </div>
    )
}


export default UseEffectTitleChange