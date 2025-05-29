import React, { useState } from 'react';
import Card from '../common/Card';
import DetailsSection from '../common/DetailsSection';

interface Module2Props {
  onNavigate: (tabId: string, sectionId?: string) => void;
}

const Module2: React.FC<Module2Props> = ({ onNavigate }) => {
  const [activeSymptom, setActiveSymptom] = useState<string | null>(null);

  const toggleSymptom = (symptomId: string) => {
    setActiveSymptom(activeSymptom === symptomId ? null : symptomId);
  };

  const InternalLink: React.FC<{ tabId: string; children: React.ReactNode; sectionId?: string }> = ({ 
    tabId, 
    children, 
    sectionId 
  }) => (
    <span 
      className="text-teal-600 underline cursor-pointer hover:text-teal-800"
      onClick={() => onNavigate(tabId, sectionId)}
    >
      {children}
    </span>
  );

  const PCode: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="font-mono bg-gray-200 px-1 py-0.5 rounded text-sm">
      {children}
    </span>
  );

  const SymptomItem: React.FC<{ 
    id: string; 
    title: string; 
    children: React.ReactNode 
  }> = ({ id, title, children }) => (
    <div className="mb-2">
      <div
        className="bg-teal-50 p-4 border border-gray-200 rounded cursor-pointer hover:bg-teal-100 transition-colors"
        onClick={() => toggleSymptom(id)}
      >
        {title}
      </div>
      {activeSymptom === id && (
        <div className="p-4 border border-gray-300 border-t-0 bg-white rounded-b">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <Card>
      <h2 className="text-2xl font-semibold text-teal-600 mb-4 pb-2 border-b-2 border-gray-200">
        <span className="mr-2">🔍</span>모듈 2: 다빈도 엔진 고장 유형 및 초기 진단 접근법
      </h2>

      <DetailsSection title="2.1. 주요 고장 증상별 분류">
        <p className="mb-4">아래 증상을 클릭하면 예상 원인과 관련 정보를 확인할 수 있습니다.</p>
        
        <div className="space-y-2">
          <SymptomItem id="symptom1" title="출력 부족 및 가속 불량">
            <p className="mb-2"><strong>설명:</strong> 차량 힘 부족, 가속 페달 반응 둔화. 언덕길에서 심화.</p>
            <p className="mb-2"><strong>주요 원인 추정:</strong></p>
            <ul className="list-disc ml-6 mb-4 space-y-1">
              <li>연료 계통: 연료 필터 막힘, 연료 라인 공기 유입, 펌프 압력 저하, <InternalLink tabId="module5">인젝터 분사 불량</InternalLink>.</li>
              <li>공기 흡입 계통: 에어필터 오염, 흡기 매니폴드 카본, 인터쿨러/호스 누설, <InternalLink tabId="module6">터보차저 고장</InternalLink>.</li>
              <li>배기 계통: <InternalLink tabId="module3">DPF 막힘/손상</InternalLink>, 촉매 막힘.</li>
              <li><InternalLink tabId="module4">EGR 시스템</InternalLink>: EGR 밸브 열림 고착.</li>
              <li>엔진 제어 센서: AFS, MAP, TPS 등 신호 오류.</li>
            </ul>
            <p><strong>관련 P-코드 예시:</strong> <PCode>P0299</PCode> (터보 부스트 압력 과소), <PCode>P0102</PCode>, <PCode>P242F</PCode>.</p>
          </SymptomItem>

          <SymptomItem id="symptom2" title="시동 지연 및 시동 불능">
            <p className="mb-2"><strong>설명:</strong> 시동 모터는 작동하나 시동이 늦게 걸리거나 안 걸림.</p>
            <p className="mb-2"><strong>주요 원인 추정:</strong></p>
            <ul className="list-disc ml-6 mb-4 space-y-1">
              <li>연료 계통: 연료 부족, 연료 필터 막힘, 연료 라인 공기 유입, <InternalLink tabId="module5">고압펌프/인젝터 누설</InternalLink>, 연료압력조절밸브 고착.</li>
              <li>전기 계통: 배터리, 스타터 모터, 배선/접지 불량.</li>
              <li>엔진 제어 센서: CKP, CMP 센서 신호 불량.</li>
              <li>예열 시스템 (저온 시): 예열 플러그, GCU 고장.</li>
              <li>이모빌라이저 시스템 오류.</li>
            </ul>
            <p><strong>관련 P-코드 예시:</strong> <PCode>P0335</PCode> (CKP), <PCode>P0340</PCode> (CMP), <PCode>P0087</PCode> (연료 압력 낮음).</p>
          </SymptomItem>

          <SymptomItem id="symptom3" title="엔진 부조 (아이들링 및 주행 중 떨림)">
            <p className="mb-2"><strong>설명:</strong> 엔진 회전 불안정, 차량 떨림.</p>
            <p className="mb-2"><strong>주요 원인 추정:</strong></p>
            <ul className="list-disc ml-6 mb-4 space-y-1">
              <li>연료 시스템: <InternalLink tabId="module5">특정 인젝터 분사량 불균형</InternalLink>, 연료 압력 불안정.</li>
              <li>공기 흡입 계통: 흡기 라인 미세 누설, 스로틀 바디 오염.</li>
              <li><InternalLink tabId="module4">EGR 시스템</InternalLink>: EGR 밸브 간헐적 작동 불량.</li>
              <li>엔진 내부 문제: 특정 실린더 압축 압력 저하.</li>
              <li>엔진 마운트 손상.</li>
            </ul>
            <p><strong>관련 P-코드 예시:</strong> <PCode>P030X</PCode> (실화 감지 - 디젤은 드묾), 인젝터 관련 코드.</p>
          </SymptomItem>

          <SymptomItem id="symptom4" title="과도한 매연 발생 (백색, 흑색, 청색)">
            <div className="space-y-3">
              <div>
                <p className="font-semibold">백색 매연:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>정상: 냉간 시동 초기 수증기 (무취, 예열 후 소멸).</li>
                  <li>비정상 (지속적, 달콤한 냄새 가능): 냉각수 연소실 유입 (헤드 가스켓 손상, <InternalLink tabId="module4">EGR 쿨러 누수</InternalLink>).</li>
                  <li>비정상 (<InternalLink tabId="module3">DPF 강제 재생 중</InternalLink>): 일시적 다량 발생 가능.</li>
                  <li>비정상 (연료 내 수분 과다).</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold">흑색 매연 (불완전 연소):</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>연료 시스템: <InternalLink tabId="module5">인젝터 분사량 과다/고착</InternalLink>.</li>
                  <li>공기 흡입 계통: 에어필터 막힘, 흡기 카본 과다, <InternalLink tabId="module6">터보차저 성능 저하</InternalLink>.</li>
                  <li><InternalLink tabId="module4">EGR 시스템</InternalLink>: EGR 밸브 열림 고착.</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold">청색 매연 (엔진 오일 연소, 매캐한 냄새):</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>피스톤 링 마모, 밸브 스템 씰 손상.</li>
                  <li><InternalLink tabId="module6">터보차저 오일 씰 손상</InternalLink>.</li>
                </ul>
              </div>
              
              <p className="text-red-600 font-semibold text-sm">
                주의: 유로6 차량 DPF 정상 시 매연 거의 없음. DPF 후단 흑색 매연 시 DPF 손상 의심.
              </p>
            </div>
          </SymptomItem>

          <SymptomItem id="symptom5" title="엔진 경고등 점등">
            <p className="mb-2"><strong>설명:</strong> ECU가 문제 감지 시 점등. 스캐너로 고장 코드(DTC) 확인 필수.</p>
            <p className="mb-2"><strong>주요 P-코드 예시:</strong></p>
            <ul className="list-disc ml-6 space-y-1">
              <li>DPF 관련: <PCode>P2003</PCode>, <PCode>P24AF</PCode>, <PCode>P242F</PCode>. (세부 <InternalLink tabId="module3" sectionId="dpf-section">모듈 3.1</InternalLink>)</li>
              <li>흡기 관련: <PCode>P0102</PCode>, <PCode>P0103</PCode> (AFS).</li>
              <li>EGR 관련: <PCode>P0401</PCode>, <PCode>P0404</PCode>. (세부 <InternalLink tabId="module4">모듈 4</InternalLink>)</li>
              <li>연료 시스템 관련: <PCode>P0087</PCode>, <PCode>P0190</PCode>, <PCode>P0201</PCode>-P0204. (세부 <InternalLink tabId="module5">모듈 5</InternalLink>)</li>
              <li>터보차저 관련: <PCode>P0299</PCode>. (세부 <InternalLink tabId="module6">모듈 6</InternalLink>)</li>
            </ul>
          </SymptomItem>

          <SymptomItem id="symptom6" title="특정 운행 조건 이상 소음">
            <p className="mb-2"><strong>설명:</strong> 특정 조건(시동, 공회전, 가감속, RPM)에서 평소와 다른 소음 발생.</p>
            <p className="mb-2"><strong>주요 원인 추정:</strong></p>
            <ul className="list-disc ml-6 space-y-1">
              <li>엔진 내부: 베어링, 피스톤 핀, 밸브 태핏, 타이밍 체인 문제.</li>
              <li><InternalLink tabId="module6">터보차저</InternalLink>: 임펠러/베어링 손상, 액추에이터, 공기 누설 (휘파람 소리).</li>
              <li>흡/배기계: 매니폴드 가스켓 손상, 인터쿨러 호스 파손.</li>
              <li><InternalLink tabId="module5">연료 시스템</InternalLink>: 인젝터 작동음 변화 (노킹 유사).</li>
              <li>기타 구동계: 발전기, 워터펌프 등 베어링/벨트 문제.</li>
            </ul>
          </SymptomItem>
        </div>
      </DetailsSection>

      <DetailsSection title="2.2. 초기 진단 가이드">
        <h4 className="font-semibold mt-4 mb-2">문진 (고객 상담) 주요 질문 항목:</h4>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>최초 증상 발생 시점 및 빈도</li>
          <li>증상 발생 조건 (특정 상황, RPM, 속도, 날씨 등)</li>
          <li>최근 정비 이력 및 연료 주유 습관</li>
          <li>경고등 점등 여부 및 동반 증상</li>
          <li>차량 관리 이력 (엔진오일, DPF 클리닝 등)</li>
        </ul>
        
        <h4 className="font-semibold mt-4 mb-2">육안 검사 포인트:</h4>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>엔진룸: 오일류/냉각수 양/누유, 호스류 균열/손상, 배선/커넥터 상태, 과열 흔적, 벨트 장력.</li>
          <li>차량 하부: 누유, 배기 시스템 손상/누출, 연료 탱크/라인 손상.</li>
          <li>시동 상태: 이상 소음, 과도한 진동, 배기가스 색깔/냄새.</li>
        </ul>
        
        <h4 className="font-semibold mt-4 mb-2">스캐너(진단기) 기본 데이터 점검 항목 (정상 범위 예시 - 정비지침서 확인 필수):</h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 mt-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left font-semibold">항목</th>
                <th className="border border-gray-300 p-3 text-left font-semibold">공회전 시 (예시)</th>
                <th className="border border-gray-300 p-3 text-left font-semibold">부하 시 (예시)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">흡기압 (MAP)</td>
                <td className="border border-gray-300 p-3">약 95-105 kPa</td>
                <td className="border border-gray-300 p-3">최대 250-280 kPa 이상</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">공기량 (AFS)</td>
                <td className="border border-gray-300 p-3">약 10-20 g/s</td>
                <td className="border border-gray-300 p-3">100-150 g/s 이상</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">연료 압력 (Rail)</td>
                <td className="border border-gray-300 p-3">목표 약 250-350 bar</td>
                <td className="border border-gray-300 p-3">목표 최대 1800-2500 bar</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">DPF 차압</td>
                <td className="border border-gray-300 p-3">수 hPa ~ 20 hPa</td>
                <td className="border border-gray-300 p-3">(2500 RPM) 50-100 hPa 이하</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">DPF PM 포집량</td>
                <td className="border border-gray-300 p-3">재생 직후 0-5g</td>
                <td className="border border-gray-300 p-3">주행하며 증가 (한계치 전 재생)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">인젝터 분사 보정량</td>
                <td className="border border-gray-300 p-3">±1.0 ~ ±2.0 mm³/st 범위 내</td>
                <td className="border border-gray-300 p-3">-</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mt-4 text-sm text-gray-600">
          <strong>주의:</strong> 제시된 정상 범위는 참고용이며, 차종별 정비지침서를 반드시 확인해야 합니다. 
          여러 데이터 간의 상관관계를 종합적으로 분석하는 것이 중요합니다.
        </p>
      </DetailsSection>
    </Card>
  );
};

export default Module2; 