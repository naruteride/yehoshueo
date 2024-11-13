/**
 * @typedef {Object} CurriculumItem
 * @property {string} title
 * @property {string} description
 */

/**
 * @returns {JSX.Element}
 */
export default function Curriculum() {
    /** @type {CurriculumItem[]} */
    const curriculum = [
        { title: '기초 수어', description: '인사, 자기소개, 기본 단어 학습' },
        { title: '일상 대화', description: '간단한 대화, 질문과 답변 연습' },
        { title: '수어로 노래하기', description: '인기 있는 노래를 수어로 표현하기' },
        { title: '수어 이야기', description: '짧은 이야기를 수어로 전달하는 방법' },
    ]

    return (
        <ul className="space-y-4">
            {curriculum.map((item, index) => (
                <li key={index} className="bg-gray-50 p-4 rounded">
                    <h3 className="font-bold">{item.title}</h3>
                    <p>{item.description}</p>
                </li>
            ))}
        </ul>
    )
}