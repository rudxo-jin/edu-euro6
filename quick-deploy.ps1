# 빠른 배포 스크립트
param(
    [string]$message = "빠른 업데이트"
)

Write-Host "🚀 빠른 배포 시작..." -ForegroundColor Green

# Git 상태 확인
git status

# 모든 변경사항 추가
git add .

# 커밋 (메시지가 제공되지 않으면 기본 메시지 사용)
git commit -m $message

# 푸시
git push origin main

Write-Host "✅ 배포 완료! Vercel에서 자동 빌드 중..." -ForegroundColor Green
Write-Host "🌐 사이트: https://edu-euro6.vercel.app" -ForegroundColor Cyan 