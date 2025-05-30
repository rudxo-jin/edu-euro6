import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-6 shadow-lg">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          🚛 포터2 / 봉고3 유로6 정비 교육 - 평우기술교육센터
        </h1>
        <p className="text-teal-100 text-sm md:text-base">
          전문 정비사를 위한 체계적인 학습 과정 • ⚡ 추가 컨텐츠 업데이트 예정 ⚡
        </p>
      </div>
    </header>
  );
};

export default Header; 