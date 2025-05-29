import React from 'react';
import Card from '../common/Card';
import DetailsSection from '../common/DetailsSection';

interface Module5Props {
  onNavigate: (tabId: string, sectionId?: string) => void;
}

const Module5: React.FC<Module5Props> = ({ onNavigate: _onNavigate }) => {
  const PCode: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="font-mono bg-gray-200 px-1 py-0.5 rounded text-sm">
      {children}
    </span>
  );

  return (
    <Card>
      <h2 className="text-2xl font-semibold text-teal-600 mb-4 pb-2 border-b-2 border-gray-200">
        <span className="mr-2">⛽</span>모듈 5: 연료 시스템 (인젝터, 고압펌프) 고장 분석 및 대처
      </h2>
      
      <p className="mb-6 text-gray-700">
        커먼레일 연료 시스템은 고압으로 연료를 정밀 분사합니다. 포터2/봉고3 요소수 차량은 보쉬 인젝터가 적용되어 있습니다.
      </p>

      <DetailsSection title="5.1. 커먼레일 인젝터 (구조, 고장 원인, 영향)">
        <p className="mb-4">
          <strong>구조/원리:</strong> 고압 연료 정밀 분사 (솔레노이드/피에조, 노즐, 니들밸브). 다단 분사 제어.
        </p>
        <p className="mb-4">
          <strong>고장 원인:</strong> 연료 품질 불량(수분, 불순물), 노후화/마모, 제어 불량(전기적), 동와셔 불량, 카본 퇴적.
        </p>
        <p>
          <strong>엔진 영향:</strong> 출력저하, 연비악화, 소음/진동, 배출가스 증가, DPF 부담 가중.
        </p>
      </DetailsSection>

      <DetailsSection title="5.2. 고장 증상">
        <ul className="list-disc ml-6 space-y-2">
          <li>엔진 소음 증가 (노킹음), 엔진 부조</li>
          <li>가속 불량/출력 저하, 매연 과다 (흑연/백연)</li>
          <li>연비 저하, 시동 지연/불능</li>
        </ul>
      </DetailsSection>

      <DetailsSection title="5.3. 진단 및 해결 방안">
        <p className="mb-4">
          <strong>진단:</strong> 스캐너(분사량 보정치, 연료압력, P-코드 <PCode>P0201</PCode>~<PCode>P0204</PCode>, <PCode>P0087</PCode>), 
          리턴량 테스트, 동와셔 점검.
        </p>
        <p>
          <strong>해결:</strong> 클리닝(초기), 수리(X), 교환(신품). 인젝터 코딩 필수. 동와셔 신품 교환.
        </p>
      </DetailsSection>

      <DetailsSection title="5.4. 고압펌프 및 연료 필터">
        <p className="mb-4">
          <strong>고압펌프:</strong> 저압 연료를 고압으로 압축. 고장 시 시동불량, 출력부족. 
          스캐너로 연료압력 확인. IMV 점검. 쇳가루 발생 시 라인 전체 세척/교환.
        </p>
        <p>
          <strong>연료필터:</strong> 수분/이물질 제거. 막힘 시 시동불량, 출력부족. 주기적 교환 및 수분 배출 필수.
        </p>
      </DetailsSection>
    </Card>
  );
};

export default Module5; 