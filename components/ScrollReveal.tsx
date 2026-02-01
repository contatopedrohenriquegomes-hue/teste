
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const ScrollReveal: React.FC<Props> = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Atualiza o estado conforme o elemento entra ou sai da viewport
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1, // Dispara quando 10% do elemento está visível
        rootMargin: "0px 0px -50px 0px" // Pequena margem para melhorar o timing
      }
    );

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible 
          ? "opacity-100 translate-x-0" 
          : "opacity-0 translate-x-20"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
