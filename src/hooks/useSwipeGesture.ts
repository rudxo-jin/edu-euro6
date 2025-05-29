import { useEffect, useRef, useState } from 'react';

interface SwipeGestureOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  threshold?: number;
  preventDefaultTouchmove?: boolean;
}

export const useSwipeGesture = (options: SwipeGestureOptions) => {
  const {
    onSwipeLeft,
    onSwipeRight,
    threshold = 50,
    preventDefaultTouchmove = true
  } = options;

  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const touchEndY = useRef<number>(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const [isSwipeVisible, setIsSwipeVisible] = useState(false);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (preventDefaultTouchmove) {
      // 수직 스크롤은 허용하되, 수평 스와이프 시에만 기본 동작 방지
      const deltaX = Math.abs(e.targetTouches[0].clientX - touchStartX.current);
      const deltaY = Math.abs(e.targetTouches[0].clientY - touchStartY.current);
      
      if (deltaX > deltaY && deltaX > 10) {
        e.preventDefault();
        
        // 스와이프 방향 미리보기
        const currentDeltaX = touchStartX.current - e.targetTouches[0].clientX;
        if (Math.abs(currentDeltaX) > 30) {
          const direction = currentDeltaX > 0 ? 'left' : 'right';
          setSwipeDirection(direction);
          setIsSwipeVisible(true);
        }
      }
    }
  };

  const handleTouchEnd = (e: TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    touchEndY.current = e.changedTouches[0].clientY;
    
    const deltaX = touchStartX.current - touchEndX.current;
    const deltaY = Math.abs(touchStartY.current - touchEndY.current);
    
    // 스와이프 표시기 숨김
    setIsSwipeVisible(false);
    setSwipeDirection(null);
    
    // 수평 스와이프가 수직 스와이프보다 클 때만 처리
    if (Math.abs(deltaX) > deltaY && Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        // 왼쪽으로 스와이프 (다음 페이지)
        onSwipeLeft?.();
      } else {
        // 오른쪽으로 스와이프 (이전 페이지)
        onSwipeRight?.();
      }
    }
  };

  useEffect(() => {
    const element = document.body;
    
    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchmove', handleTouchMove, { passive: false });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight, threshold, preventDefaultTouchmove]);

  return { swipeDirection, isSwipeVisible };
}; 