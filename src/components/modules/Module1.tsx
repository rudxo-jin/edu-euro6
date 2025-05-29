import React from 'react';
import Card from '../common/Card';
import DetailsSection from '../common/DetailsSection';

interface Module1Props {
  onNavigate: (tabId: string, sectionId?: string) => void;
}

const Module1: React.FC<Module1Props> = ({ onNavigate: _onNavigate }) => {
  return (
    <Card>
      <h2 className="text-2xl font-semibold text-teal-600 mb-4 pb-2 border-b-2 border-gray-200">
        <span className="mr-2">⚙️</span>모듈 1: 포터2/봉고3 유로6 디젤 엔진 시스템 개요
      </h2>

      <DetailsSection title="1.1. 유로6 배출가스 규제의 의미와 핵심 기술">
        <p className="mb-4">
          유로6 규제는 질소산화물(NOx), 입자상물질(PM) 등 배출가스를 획기적으로 줄이는 것을 목표로 합니다. 
          포터2/봉고3에는 DPF, SCR/LNT, 고압 EGR 등의 핵심 기술이 적용되었습니다.
        </p>
        
        <h4 className="font-semibold mt-4 mb-2">핵심 후처리 기술:</h4>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>
            <strong>DPF (디젤 매연 필터):</strong> PM 포집 후 고온으로 태워 제거.
          </li>
          <li>
            <strong>SCR (선택적 촉매 환원 장치) / LNT (희박 질소산화물 트랩):</strong> NOx 저감. 
            SCR은 요소수 사용 (주로 2019년 하반기 이후 모델), LNT는 요소수 미사용 (주로 2019년 하반기 이전 모델).
          </li>
          <li>
            <strong>고압 EGR (배기가스 재순환 장치):</strong> 배기가스 일부를 냉각 후 재순환시켜 NOx 생성 억제.
          </li>
        </ul>
        
        <p className="text-sm text-gray-700">
          이 기술들은 상호 유기적으로 작동하며, 한 시스템의 문제는 다른 시스템에 영향을 줄 수 있습니다. 
          특히 SCR 시스템은 요소수 관리 및 관련 부품(NOx 센서 등)의 정비가 중요합니다.
        </p>
      </DetailsSection>

      <DetailsSection title="1.2. 주력 엔진 (A2 엔진, D4CB 유로6 사양)">
        <p className="mb-4">
          A2 엔진(D4CB 유로6)은 커먼레일 디젤 엔진으로, 내구성과 신뢰성을 중시하여 개발되었습니다. 
          DOHC 헤드와 CRDi 시스템을 적용했습니다.
        </p>
        
        <h4 className="font-semibold mt-4 mb-2">A2 엔진 주요 제원 (요약):</h4>
        
        {/* 데스크톱 테이블 (768px 이상) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 mt-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left font-semibold">항목</th>
                <th className="border border-gray-300 p-3 text-left font-semibold">제원</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">형식</td>
                <td className="border border-gray-300 p-3">A2 (D4CB 유로6)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">배기량</td>
                <td className="border border-gray-300 p-3">2,497 cc</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">최고 출력</td>
                <td className="border border-gray-300 p-3">133 PS / 3,600 rpm</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">최대 토크</td>
                <td className="border border-gray-300 p-3">26.5 kg·m / 1,250~3,500 rpm</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">연료분사방식</td>
                <td className="border border-gray-300 p-3">커먼레일 직접분사 (CRDi)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">과급방식</td>
                <td className="border border-gray-300 p-3">WGT 또는 eVGT</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 모바일 카드 형태 (768px 미만) */}
        <div className="md:hidden mt-4 space-y-3">
          <div className="bg-gray-50 p-4 rounded-lg border">
            <div className="font-semibold text-gray-700 mb-1">형식</div>
            <div className="text-gray-900">A2 (D4CB 유로6)</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border">
            <div className="font-semibold text-gray-700 mb-1">배기량</div>
            <div className="text-gray-900">2,497 cc</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border">
            <div className="font-semibold text-gray-700 mb-1">최고 출력</div>
            <div className="text-gray-900">133 PS / 3,600 rpm</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border">
            <div className="font-semibold text-gray-700 mb-1">최대 토크</div>
            <div className="text-gray-900">26.5 kg·m / 1,250~3,500 rpm</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border">
            <div className="font-semibold text-gray-700 mb-1">연료분사방식</div>
            <div className="text-gray-900">커먼레일 직접분사 (CRDi)</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border">
            <div className="font-semibold text-gray-700 mb-1">과급방식</div>
            <div className="text-gray-900">WGT 또는 eVGT</div>
          </div>
        </div>
        
        <p className="mt-4 text-sm text-gray-700">
          롱 스트로크 설계로 저회전 토크가 우수하여 상용차 특성에 적합합니다. 
          기본 작동 원리는 4행정 사이클을 따르며, 커먼레일 시스템이 정밀한 연료 분사를 담당합니다.
        </p>
      </DetailsSection>

      <DetailsSection title="1.3. 유로6-C, 유로6-D 엔진 시스템 주요 변경점 및 정비 시 유의사항">
        <p className="mb-4">
          유로6c/6d는 측정 조건을 강화하여 실질적인 규제를 강화했습니다. (RDE: 실제 도로 주행 배출가스 측정)
        </p>
        
        <h4 className="font-semibold mt-4 mb-2">주요 변경점 (유로6-C 대비 유로6-D):</h4>
        
        {/* 데스크톱 테이블 (768px 이상) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 mt-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left font-semibold">구분</th>
                <th className="border border-gray-300 p-3 text-left font-semibold">유로6-C</th>
                <th className="border border-gray-300 p-3 text-left font-semibold">유로6-D</th>
                <th className="border border-gray-300 p-3 text-left font-semibold">정비 시 고려사항</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">콜드스타트 검사</td>
                <td className="border border-gray-300 p-3">미적용 또는 완화</td>
                <td className="border border-gray-300 p-3">추가 및 강화</td>
                <td className="border border-gray-300 p-3">저온 시동성, 예열 플러그, 초기 후처리장치 활성화 중요</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">배출가스 측정 시점</td>
                <td className="border border-gray-300 p-3">엔진 유효출력 20% 초과</td>
                <td className="border border-gray-300 p-3">엔진 유효출력 10% 초과</td>
                <td className="border border-gray-300 p-3">저속/저부하 관리 강화, DPF/SCR 작동 영향</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">RDE 적재 중량</td>
                <td className="border border-gray-300 p-3">최대 적재 50%</td>
                <td className="border border-gray-300 p-3">최대 적재 10%~100%</td>
                <td className="border border-gray-300 p-3">다양한 조건에서의 배출가스 대응 능력 요구</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 모바일 카드 형태 (768px 미만) */}
        <div className="md:hidden mt-4 space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="font-bold text-blue-800 mb-3">콜드스타트 검사</div>
            <div className="space-y-2">
              <div>
                <span className="font-semibold text-gray-700">유로6-C:</span>
                <span className="ml-2 text-gray-900">미적용 또는 완화</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">유로6-D:</span>
                <span className="ml-2 text-gray-900">추가 및 강화</span>
              </div>
              <div className="mt-3 p-3 bg-yellow-50 rounded border border-yellow-200">
                <span className="font-semibold text-yellow-800">정비 포인트:</span>
                <div className="text-yellow-900 text-sm mt-1">저온 시동성, 예열 플러그, 초기 후처리장치 활성화 중요</div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="font-bold text-green-800 mb-3">배출가스 측정 시점</div>
            <div className="space-y-2">
              <div>
                <span className="font-semibold text-gray-700">유로6-C:</span>
                <span className="ml-2 text-gray-900">엔진 유효출력 20% 초과</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">유로6-D:</span>
                <span className="ml-2 text-gray-900">엔진 유효출력 10% 초과</span>
              </div>
              <div className="mt-3 p-3 bg-yellow-50 rounded border border-yellow-200">
                <span className="font-semibold text-yellow-800">정비 포인트:</span>
                <div className="text-yellow-900 text-sm mt-1">저속/저부하 관리 강화, DPF/SCR 작동 영향</div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <div className="font-bold text-purple-800 mb-3">RDE 적재 중량</div>
            <div className="space-y-2">
              <div>
                <span className="font-semibold text-gray-700">유로6-C:</span>
                <span className="ml-2 text-gray-900">최대 적재 50%</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">유로6-D:</span>
                <span className="ml-2 text-gray-900">최대 적재 10%~100%</span>
              </div>
              <div className="mt-3 p-3 bg-yellow-50 rounded border border-yellow-200">
                <span className="font-semibold text-yellow-800">정비 포인트:</span>
                <div className="text-yellow-900 text-sm mt-1">다양한 조건에서의 배출가스 대응 능력 요구</div>
              </div>
            </div>
          </div>
        </div>
        
        <h4 className="font-semibold mt-4 mb-2">정비 시 유의사항:</h4>
        <ul className="list-disc ml-6 space-y-1">
          <li>후처리 장치 중요성 증대 (DPF, SCR/LNT, EGR 및 관련 센서).</li>
          <li>저온 시동성 및 초기 워밍업 관리.</li>
          <li>주행 패턴의 영향 인지 (단거리/저속 주행 시 DPF 재생 불리).</li>
          <li>순정 부품 사용 권장.</li>
          <li>정비 비용 상승 가능성 인지.</li>
        </ul>
      </DetailsSection>
    </Card>
  );
};

export default Module1; 