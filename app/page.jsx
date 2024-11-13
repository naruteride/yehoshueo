import { CalendarIcon, AcademicCapIcon, UserGroupIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import Calendar from '../components/calendar'
import Curriculum from '../components/curriculum'
import FAQ from '../components/FAQ'

export default function Home() {
    return (
        <div className="space-y-12">
            <section id="about" className="text-center p-6">
                <h2 className="text-3xl font-bold mb-4">여호수어 소개</h2>
                <p className="text-lg">
                    여호수어는 수어를 즐겁고 가볍게 배우는 동아리입니다. 우리는 함께 재미있게 수어를 학습하며,
                    서로 소통하는 방법을 익힙니다. 부담 없이 참여할 수 있는 환경을 만들어 모두가 편안하게 배울 수 있도록 합니다.
                </p>
            </section>

            <section id="calendar" className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <CalendarIcon className="h-6 w-6 mr-2" />
                    활동 일정
                </h2>
                <Calendar />
            </section>

            <section id="curriculum" className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <AcademicCapIcon className="h-6 w-6 mr-2" />
                    커리큘럼
                </h2>
                <Curriculum />
            </section>

            <section id="apply" className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <UserGroupIcon className="h-6 w-6 mr-2" />
                    신청 방법
                </h2>
                <p>
                    여호수어 동아리에 참여하고 싶으신 분들은 아래 버튼을 클릭하여 신청 양식을 작성해주세요.
                    누구나 환영합니다!
                </p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    신청하기
                </button>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">여호수어 이름의 의미</h2>
                <p>
                    "여호수어"는 "여호와의 수어"를 의미합니다. 우리는 수어를 통해 서로를 이해하고
                    소통하는 것이 마치 신성한 언어를 나누는 것과 같다고 믿습니다.
                </p>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">추천 작품</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>목소리의 형태 (애니메이션)</li>
                    <li>손끝과 연연 (애니메이션)</li>
                    <li>Ho! (웹툰)</li>
                    <li>듄 (영화)</li>
                    <li>듄 2 (영화)</li>
                </ul>
            </section>

            <section id="faq" className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <QuestionMarkCircleIcon className="h-6 w-6 mr-2" />
                    자주 묻는 질문 (FAQ)
                </h2>
                <FAQ />
            </section>
        </div>
    )
}