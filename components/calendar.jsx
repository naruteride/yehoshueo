'use client'

import { useState } from 'react'

/**
 * @typedef {Object} Event
 * @property {string} date
 * @property {string} title
 */

/**
 * @returns {JSX.Element}
 */
export default function Calendar() {
    /** @type {[Event[], Function]} */
    const [events] = useState([
        { date: '2024-03-15', title: '첫 모임: 인사와 기본 수어' },
        { date: '2024-03-29', title: '일상 대화 수어 배우기' },
        { date: '2024-04-12', title: '수어로 노래 부르기' },
    ])

    return (
        <div className="space-y-4">
            {events.map((event, index) => (
                <div key={index} className="flex items-center space-x-4">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
                        {event.date}
                    </div>
                    <div>{event.title}</div>
                </div>
            ))}
        </div>
    )
}