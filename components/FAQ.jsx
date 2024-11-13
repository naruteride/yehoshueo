'use client'

import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

/**
 * @typedef {Object} FAQItem
 * @property {string} question
 * @property {string} answer
 */

/**
 * @returns {JSX.Element}
 */
export default function FAQ() {
    /** @type {FAQItem[]} */
    const faqItems = [
        {
            question: '수어를 전혀 모르는 초보자도 참여할 수 있나요?',
            answer: '네, 물론입니다! 우리 동아리는 모든 수준의 학습자를 환영합니다. 기초부터 차근차근 배워갈 수 있습니다.'
        },
        {
            question: '모임은 얼마나 자주 있나요?',
            answer: '보통 2주에 한 번씩 모임을 가집니다. 정확한 일정은 캘린더를 참고해 주세요.'
        },
        {
            question: '수어를 배우는 데 얼마나 걸리나요?',
            answer: '개인마다 다르지만, 기본적인 의사소통은 몇 개월 안에 가능해집니다. 꾸준히 연습하는 것이 중요합니다.'
        }
    ]

    /** @type {[number, Function]} */
    const [openIndex, setOpenIndex] = useState(-1)

    return (
        <div className="space-y-4">
            {faqItems.map((item, index) => (
                <div key={index} className="border rounded">
                    <button
                        className="flex justify-between items-center w-full p-4 text-left"
                        onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    >
                        <span className="font-medium">{item.question}</span>
                        {openIndex === index ? (
                            <ChevronUpIcon className="h-5 w-5" />
                        ) : (
                            <ChevronDownIcon className="h-5 w-5" />
                        )}
                    </button>
                    {openIndex === index && (
                        <div className="p-4 bg-gray-50">{item.answer}</div>
                    )}
                </div>
            ))}
        </div>
    )
}