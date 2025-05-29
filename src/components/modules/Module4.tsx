import React from 'react';
import Card from '../common/Card';
import DetailsSection from '../common/DetailsSection';

interface Module4Props {
  onNavigate: (tabId: string, sectionId?: string) => void;
}

const Module4: React.FC<Module4Props> = ({ onNavigate: _onNavigate }) => {
  const PCode: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="font-mono bg-gray-200 px-1 py-0.5 rounded text-sm">
      {children}
    </span>
  );

  return (
    <Card>
      <h2 className="text-2xl font-semibold text-teal-600 mb-4 pb-2 border-b-2 border-gray-200">
        <span className="mr-2">🔄</span>모듈 4: EGR 시스템 정밀 진단 및 정비
      </h2>
      
      <p className="mb-6 text-gray-700">
        EGR 시스템은 배기가스 일부를 재순환시켜 연소 온도를 낮춰 NOx 생성을 억제합니다. 
        포터2/봉고3는 주로 고압 EGR(HP-EGR)을 사용합니다.
      </p>

      <DetailsSection title="4.1. EGR 밸브 (작동 원리, 고착 원인)">
        <p className="mb-4">
          <strong>작동 원리:</strong> ECU 제어로 배기가스 재순환량 조절. 전자식 구동.
        </p>
        <p>
          <strong>고착/작동 불량 원인:</strong> 카본 퇴적, 내부 모터/기어 손상, 전기적 문제.
        </p>
      </DetailsSection>

      <DetailsSection title="4.2. EGR 쿨러 (역할, 누수/막힘 원인)">
        <p className="mb-4">
          <strong>역할:</strong> 재순환되는 배기가스 냉각 (NOx 저감 효율 증대, 흡기 밀도 증가, 부품 보호).
        </p>
        <p>
          <strong>누수/막힘 원인:</strong> (누수) 부식, 균열, 변형. (막힘) 카본, 재 등 이물질 퇴적.
        </p>
      </DetailsSection>

      <DetailsSection title="4.3. 고장 증상">
        <ul className="list-disc ml-6 space-y-2">
          <li>출력 부족/가속 불량 (EGR 과다 시)</li>
          <li>엔진 부조, 매연 증가 (흑연)</li>
          <li>시동성 불량/시동 꺼짐</li>
          <li>엔진 경고등 (<PCode>P0401</PCode>, <PCode>P0404</PCode>, <PCode>P0489</PCode>)</li>
          <li>EGR 쿨러 누수 시: 백색 매연, 냉각수 소모, 엔진 과열</li>
        </ul>
      </DetailsSection>

      <DetailsSection title="4.4. 진단 및 해결 방안">
        <p className="mb-4">
          <strong>진단:</strong> 스캐너(EGR 듀티, AFS/MAP 변화), 액츄에이터 테스트, 육안검사(카본,누수).
        </p>
        <p>
          <strong>해결:</strong> EGR 밸브 교환 - 클리닝(X), EGR 쿨러 교환 - 클리닝(X), 
          흡기계/DPF 연계 점검.
        </p>
      </DetailsSection>
    </Card>
  );
};

export default Module4; 