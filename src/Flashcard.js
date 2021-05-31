import React, { useState, useEffect, useRef } from 'react'

export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)
    const [height, setHeight] = useState('initial')

    const frontEl = useRef()
    const backEl = useRef()

    function setMaxHeight() {
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 100))
    }

    useEffect(setMaxHeight, [flashcard.english, flashcard.chinese, flashcard.pinyin])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    }, [])

    return (
        <div 
            className={`card ${flip ? 'flip' : ''}`}
            style={{ height: height }}
            onClick={() => setFlip(!flip)}>
            
            <div className="front" ref={frontEl}>
                <div className="english">
                    {flashcard.english}
                </div>
            </div>
            
            <div className="back" ref={backEl}>
                <div className="chinese">
                    {flashcard.chinese}
                </div>
                <div className="pinyin">
                    {flashcard.pinyin}
                </div>
            </div>
        </div>
    )
}
