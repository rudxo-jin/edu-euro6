import React from 'react';
import Card from '../common/Card';
import DetailsSection from '../common/DetailsSection';

interface Module3Props {
  onNavigate: (tabId: string, sectionId?: string) => void;
}

const Module3: React.FC<Module3Props> = ({ onNavigate: _onNavigate }) => {
  const PCode: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="font-mono bg-gray-200 px-1 py-0.5 rounded text-sm">
      {children}
    </span>
  );

  return (
    <Card>
      <h2 className="text-2xl font-semibold text-teal-600 mb-4 pb-2 border-b-2 border-gray-200">
        <span className="mr-2">💨</span>모듈 3: 배출가스 후처리장치 (DPF, SCR/LNT) 집중 분석 및 정비
      </h2>

      <DetailsSection title="3.1. DPF (Diesel Particulate Filter)" defaultOpen>
        <div id="dpf-section">
          <p className="mb-4">
            <strong>작동 원리:</strong> PM(매연) 포집 후 고온으로 태워(재생) 제거. 
            관련 센서: 차압센서(DPS), 배기가스 온도센서(EGTS), PM센서(일부), 산소센서(일부).
          </p>
          
          <p className="mb-4">
            <strong>주요 고장 원인:</strong> PM 과다 축적(단거리/저속 주행), 재생 불량(조건 미달, 관련 부품 고장), 
            내부 손상(크랙, 용융).
          </p>
          
          <p className="mb-4">
            <strong>고장 증상:</strong> 출력 저하, 연비 악화, DPF/엔진 경고등, 잦은 강제 재생, (손상 시) 매연 배출.
          </p>
          
          <p className="mb-4">
            <strong>진단 방법:</strong> 스캐너(PM량, 차압, 재생이력, 온도), 강제재생 모니터링, 육안검사(탈거 후).
          </p>
          
          <div className="mb-4">
            <p className="font-semibold mb-2">정비 사례 및 해결 방안:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>근본 원인 해결 필수 (엔진 연소 상태, 인젝터 등).</li>
              <li>재생초기화 (고장 초기 - 손상 없을 시).</li>
              <li>교환 (손상 또는 클리닝 불가 시) + ECU 학습.</li>
              <li>관련 부품 점검 (인젝터, 터보, 흡기 및 EGR).</li>
            </ul>
          </div>
          
          <p className="mb-4">
            <strong>예방 관리:</strong> 주기적 고속/정속 주행, DPF 전용 엔진오일(Low SAPS), 
            주기적 스캐너 점검, 양질 연료, 경고등 즉시 점검.
          </p>
          
          <p>
            <strong>P-코드 예시:</strong> <PCode>P242F</PCode>, <PCode>P2003</PCode>, <PCode>P24AF</PCode>
          </p>
        </div>
      </DetailsSection>

      <DetailsSection title="3.2. SCR (Selective Catalytic Reduction) (요소수 타입, 2019년 하반기 이후 모델)">
        <p className="mb-4">
          <strong>작동 원리:</strong> 요소수(AdBlue) 분사 → 암모니아 생성 → SCR 촉매 내 NOx와 반응 → 
          질소(N2)와 물(H2O)로 변환.
        </p>
        
        <p className="mb-4">
          <strong>시스템 구성:</strong> 요소수 탱크/펌프/인젝터, DCU/ECU, NOx 센서, 온도센서, 히팅 시스템, SCR 촉매.
        </p>
        
        <p className="mb-4">
          <strong>주요 고장 원인:</strong> 요소수 품질 불량/오염, 분사 시스템(인젝터,펌프) 고장, 
          NOx 센서 오류, 히팅 시스템 고장, SCR 촉매 손상.
        </p>
        
        <p className="mb-4">
          <strong>고장 증상:</strong> 요소수 경고등, 출력 제한, 시동 불가, NOx 과다 배출, 요소수 소모 이상.
        </p>
        
        <p className="mb-4">
          <strong>진단 방법:</strong> 스캐너(NOx 값, 분사량, 레벨, 온도), 단품 테스트, 요소수 품질 검사.
        </p>
        
        <p className="mb-4">
          <strong>정비 사례 및 해결 방안:</strong> 부품 교환(센서, 인젝터, 펌프 등), 배선 점검, 요소수 교환, 학습값 초기화.
        </p>
        
        <p>
          <strong>P-코드 예시:</strong> <PCode>P20EE</PCode>, <PCode>P2BAD</PCode>, <PCode>P229E</PCode>, <PCode>P220F</PCode>
        </p>
      </DetailsSection>

      <DetailsSection title="3.3. LNT (Lean NOx Trap) (2019년 하반기 이전 모델)">
        <p className="mb-4">
          <strong>작동 원리:</strong> 요소수 미사용. 희박 연소 시 NOx 흡착 → 주기적 농후 연소 또는 후분사로 NOx 환원/재생.
        </p>
        
        <p className="mb-4">
          <strong>구성 요소:</strong> LNT 촉매 (DPF와 통합 가능 - SDPF), 온도센서, 산소센서, (경우에 따라) NOx 센서.
        </p>
        
        <p className="mb-4">
          <strong>주요 고장 원인:</strong> LNT 촉매 성능 저하(황 피독, 열화), 농후 연소 제어 불량, 관련 센서 고장.
        </p>
        
        <p className="mb-4">
          <strong>고장 증상:</strong> 엔진 경고등, 출력 제한, 연비 악화, NOx 과다 배출.
        </p>
        
        <p className="mb-4">
          <strong>진단 방법:</strong> 스캐너(NOx/산소/온도 센서값, 재생 이력), 강제 재생, 배기가스 분석기.
        </p>
        
        <p className="mb-4">
          <strong>정비 사례 및 해결 방안:</strong> LNT 촉매 교환, 센서 교환, 엔진/연료 시스템 점검. 저유황 경유 사용 필수.
        </p>
        
        <p>
          <strong>P-코드 예시:</strong> <PCode>P2000</PCode>
        </p>
      </DetailsSection>
    </Card>
  );
};

export default Module3; 