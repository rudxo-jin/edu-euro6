# 포터2/봉고3 유로6 엔진 정비 교육 웹앱

현대 포터2/봉고3 유로6 디젤 엔진 시스템의 **정비사 교육용 웹 애플리케이션**입니다. 유로6 규제에 따른 후처리장치(DPF, SCR/LNT), EGR 시스템, 연료 시스템, 과급 시스템 등의 고장 진단 및 정비 방법을 체계적으로 학습할 수 있습니다.

## 🎯 주요 특징

### 📚 6개 모듈 구성
- **모듈 1**: 포터2/봉고3 유로6 디젤 엔진 시스템 개요
- **모듈 2**: 고장 증상별 분류 및 진단 가이드
- **모듈 3**: 배출가스 후처리장치 (DPF, SCR/LNT) 집중 분석
- **모듈 4**: EGR 시스템 정밀 진단 및 정비
- **모듈 5**: 연료 시스템 (인젝터, 고압펌프) 고장 분석
- **모듈 6**: 과급 시스템 (터보차저) 문제 해결

### 🔧 실무 중심 내용
- **고장 증상별 분류**: 실제 정비 현장에서 접하는 증상들을 체계적으로 분류
- **P-코드 해석**: 각 시스템별 주요 고장 코드와 해결 방안
- **진단 절차**: 스캐너 활용법과 단계별 진단 프로세스
- **정비 사례**: 실제 정비 경험을 바탕으로 한 해결 방안

### 💡 인터랙티브 학습
- **탭 네비게이션**: 모듈 간 쉬운 이동
- **접을 수 있는 섹션**: 필요한 내용만 선택적 학습
- **증상별 토글**: 고장 증상 클릭으로 관련 정보 즉시 확인
- **내부 링크**: 모듈 간 연관 내용 바로 이동

## 🛠️ 기술 스택

- **React 18** + **TypeScript**: 타입 안전성과 컴포넌트 기반 개발
- **Tailwind CSS**: 모던하고 반응형 UI 디자인
- **Vite**: 빠른 개발 서버와 최적화된 빌드

## 🚀 설치 및 실행

### 1. 저장소 클론
```bash
git clone https://github.com/rudxo-jin/edu-euro6.git
cd edu-euro6
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:5173` 접속

### 4. 프로덕션 빌드
```bash
npm run build
```

## 📖 사용법

1. **모듈 선택**: 상단 탭에서 학습하고 싶은 모듈 선택
2. **섹션 탐색**: 각 모듈 내 세부 섹션을 펼쳐서 내용 확인
3. **증상별 학습**: 모듈 2에서 고장 증상을 클릭하여 관련 정보 확인
4. **연관 학습**: 내부 링크를 통해 관련 모듈로 이동

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── MaintenanceEducation.tsx  # 메인 컴포넌트
│   ├── Header.tsx               # 헤더
│   ├── Navigation.tsx           # 탭 네비게이션
│   ├── Footer.tsx              # 푸터
│   ├── common/
│   │   ├── Card.tsx            # 재사용 카드 컴포넌트
│   │   └── DetailsSection.tsx  # 접을 수 있는 섹션
│   └── modules/
│       ├── Module1.tsx         # 시스템 개요
│       ├── Module2.tsx         # 고장 진단 가이드
│       ├── Module3.tsx         # 후처리장치
│       ├── Module4.tsx         # EGR 시스템
│       ├── Module5.tsx         # 연료 시스템
│       └── Module6.tsx         # 과급 시스템
├── App.tsx                     # 루트 컴포넌트
└── main.tsx                    # 진입점
```

## 🎓 교육 내용

### 유로6 핵심 기술
- **DPF (디젤 매연 필터)**: PM 포집 및 재생 원리
- **SCR/LNT**: NOx 저감 시스템 (요소수 타입/무요소수 타입)
- **고압 EGR**: 배기가스 재순환을 통한 NOx 억제
- **커먼레일**: 고압 연료 분사 시스템

### 실무 진단 기법
- **스캐너 활용**: 각 시스템별 주요 데이터 해석
- **단품 테스트**: 센서 및 액추에이터 개별 점검
- **육안 검사**: 물리적 손상 및 누유 확인
- **강제 재생**: DPF/LNT 재생 절차

### 정비 포인트
- **예방 정비**: 주기적 점검 및 관리 방법
- **부품 교환**: 순정 부품 사용의 중요성
- **학습값 초기화**: ECU 적응값 리셋 절차
- **연관 시스템**: 한 시스템 고장이 다른 시스템에 미치는 영향

## 🚀 배포

### Vercel
```bash
npm run build
# https://vercel.com 에서 GitHub 저장소 연동
```

### Netlify
```bash
npm run build
# https://app.netlify.com/drop 에서 dist 폴더 드래그 앤 드롭
```

## 📄 라이선스

MIT License

## 📞 문의

정비 교육 내용 관련 문의나 개선 사항은 GitHub Issues를 통해 제안해 주세요.

---

**대상**: 현대 포터2/봉고3 유로6 차량 정비사  
**난이도**: 중급 ~ 고급  
**업데이트**: 2024년 최신 정비 기법 반영 