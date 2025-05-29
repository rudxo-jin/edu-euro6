import React from 'react';
import Card from '../common/Card';
import DetailsSection from '../common/DetailsSection';

interface Module6Props {
  onNavigate: (tabId: string, sectionId?: string) => void;
}

const Module6: React.FC<Module6Props> = ({ onNavigate: _onNavigate }) => {
  return (
    <Card>
      <h2 className="text-2xl font-semibold text-teal-600 mb-4 pb-2 border-b-2 border-gray-200">
        <span className="mr-2">🚀</span>모듈 6: 과급 시스템 (터보차저) 문제 해결
      </h2>
      
      <p className="mb-6 text-gray-700">
        터보차저는 배기가스 에너지로 공기를 압축 공급하여 출력을 증대시킵니다. WGT 또는 eVGT 방식 적용.
      </p>

      <DetailsSection title="6.1. 터보차저 구조 및 작동 원리 (WGT, eVGT)">
        <p className="mb-4">
          <strong>기본구조:</strong> 터빈, 컴프레서, 센터하우징(축, 베어링).
        </p>
        <p className="mb-4">
          <strong>WGT:</strong> 웨이스트게이트 밸브로 과급압 조절. 구조 단순, 저속 터보랙 가능.
        </p>
        <p>
          <strong>eVGT:</strong> 가변 베인 각도 전자 제어. 전 RPM 영역 효율적 과급. 구조 복잡, 액추에이터 고장 가능.
        </p>
      </DetailsSection>

      <DetailsSection title="6.2. 주요 고장 원인">
        <ul className="list-disc ml-6 space-y-2">
          <li>오일 관리 불량 (윤활 부족, 오일 오염, 오일 라인 막힘).</li>
          <li>임펠러 손상 (이물질 유입, 과도한 RPM).</li>
          <li>액추에이터 고장 (eVGT의 경우 전기적/기계적 문제).</li>
          <li>오일 씰 손상으로 인한 오일 누유.</li>
          <li>과열 또는 장기간 사용으로 인한 베어링 마모.</li>
        </ul>
      </DetailsSection>

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-gray-600">
          <strong>참고:</strong> 모듈 6의 상세 증상, 진단, 해결방안은 원본 자료를 참조하십시오. 
          이 웹앱에서는 구조적 개요를 중심으로 요약했습니다.
        </p>
      </div>
    </Card>
  );
};

export default Module6; 