import { useLayoutEffect, useRef, useCallback } from "react";

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
  <div className={`scroll-stack-item ${itemClassName}`.trim()}>
    <div className="scroll-stack-wrapper">
      <div className="scroll-stack-content">
        {children}
      </div>
    </div>
  </div>
);

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  rotationAmount = 0,
  onStackComplete,
}) => {
  const containerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const wrappersRef = useRef([]);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const updateWrapperTransforms = useCallback(() => {
    const container = containerRef.current;
    if (!container || !wrappersRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    // Use window scroll instead of container scroll
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerHeight = window.innerHeight;
    const containerRect = container.getBoundingClientRect();
    const containerTop = containerRect.top + scrollTop;
    
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    wrappersRef.current.forEach((wrapper, i) => {
      if (!wrapper) return;

      const item = wrapper.closest('.scroll-stack-item');
      const itemRect = item.getBoundingClientRect();
      const itemTop = itemRect.top + scrollTop;
      
      const triggerStart = itemTop - containerHeight + stackPositionPx - (itemStackDistance * i);
      const triggerEnd = itemTop - containerHeight + scaleEndPositionPx;
      const pinStart = itemTop - containerHeight + stackPositionPx - (itemStackDistance * i);
      const pinEnd = containerTop + container.offsetHeight - containerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + (i * itemScale);
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;
      
      if (isPinned) {
        translateY = scrollTop - itemTop + containerHeight - stackPositionPx - (itemStackDistance * i);
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - itemTop + containerHeight - stackPositionPx - (itemStackDistance * i);
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged = !lastTransform || 
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        wrapper.style.transform = transform;
        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === wrappersRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    onStackComplete,
    calculateProgress,
    parsePercentage,
  ]);

  const handleScroll = useCallback(() => {
    requestAnimationFrame(updateWrapperTransforms);
  }, [updateWrapperTransforms]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const wrappers = Array.from(container.querySelectorAll(".scroll-stack-wrapper"));
    wrappersRef.current = wrappers;

    wrappers.forEach((wrapper, i) => {
      const item = wrapper.closest('.scroll-stack-item');
      
      if (i < wrappers.length - 1) {
        item.style.marginBottom = `${itemDistance}px`;
      }

      wrapper.style.willChange = 'transform';
      wrapper.style.transformOrigin = 'top center';
      wrapper.style.backfaceVisibility = 'hidden';
      wrapper.style.transform = 'translateZ(0)';
      wrapper.style.webkitTransform = 'translateZ(0)';
      wrapper.style.perspective = '1000px';
      wrapper.style.webkitPerspective = '1000px';
      wrapper.style.position = 'relative';
      wrapper.style.zIndex = '1';
    });

    // Listen to window scroll instead of container scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    updateWrapperTransforms();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      stackCompletedRef.current = false;
      wrappersRef.current = [];
      lastTransformsRef.current.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    onStackComplete,
    handleScroll,
    updateWrapperTransforms,
  ]);

  return (
    <div
      className={`relative w-full ${className}`.trim()}
      ref={containerRef}
    >
      <div className="scroll-stack-inner space-y-16 lg:space-y-24">
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;
