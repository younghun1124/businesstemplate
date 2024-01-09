"use client"
import { useCatch } from 'next/app'

export default function ErrorPage() {
    const caught = useCatch();

    if (caught.status === 404) {
        // 404 페이지 커스텀 레이아웃
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-gray-800">404</h1>
                    <p className="text-2xl font-light text-gray-600">페이지를 찾을 수 없습니다.</p>
                    <a href="/" className="mt-6 inline-block text-blue-500 hover:text-blue-600">
                        홈으로 돌아가기
                    </a>
                </div>
            </div>
        );
    }

    // 다른 에러 상황을 위한 레이아웃
    return <p>에러: {caught.status}</p>;
}
