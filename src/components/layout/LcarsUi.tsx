'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';


interface CommonProps {
  className?: string;
  color?: string;
  children?: React.ReactNode;
}

interface LcarsButtonProps extends CommonProps {
  label: string;
  variant?: 'pill' | 'cap-left' | 'cap-right' | 'rect';
  href?: string;
  onClick?: () => void;
}

interface LcarsElbowProps extends CommonProps {
  direction: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

interface LcarsSidebarProps extends CommonProps {
  side?: 'left' | 'right';
}

interface DataCascadeProps extends CommonProps {
  pattern?: 'default' | 'niagara' | 'frozen';
}

// Base block component for LCARS UI elements
export const LcarsBlock: React.FC<CommonProps> = ({ 
  children, 
  color = 'bg-lcars-orange', 
  className = '' 
}) => (
  <div className={`
    flex items-center justify-end
    h-full w-full
    font-lcars text-lcars-spaceWhite text-right
    ${color} ${className}
  `}>
    {children}
  </div>
);

// Elbow corner piece - essential LCARS UI element
export const LcarsElbow: React.FC<LcarsElbowProps> = ({
  direction,
  color = 'bg-lcars-orange',
  className = '',
  children,
}) => {
  const radiusClasses = {
    'top-left': 'rounded-lcars-top-left',
    'top-right': 'rounded-lcars-top-right',
    'bottom-left': 'rounded-lcars-bottom-left',
    'bottom-right': 'rounded-lcars-bottom-right',
  };

  return (
    <div className={`
      min-h-[3rem] min-w-[3rem]
      flex items-center justify-end pr-8
      text-lcars-spaceWhite font-lcars
      ${color}
      ${radiusClasses[direction]}
      ${className}
    `}>
      {children}
    </div>
  );
};

// Pill or capsule shaped button
export const LcarsButton: React.FC<LcarsButtonProps> = ({
  label,
  variant = 'pill',
  color = 'bg-lcars-africanViolet',
  href,
  onClick,
  className = '',
}) => {
  const baseClasses = `
    flex items-center justify-center
    h-12 px-6
    font-lcars text-lcars-spaceWhite
    transition-all duration-200
    ${variant === 'pill' ? 'rounded-full' : ''}
    ${variant === 'cap-left' ? 'rounded-l-full' : ''}
    ${variant === 'cap-right' ? 'rounded-r-full' : ''}
    ${color}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {label}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {label}
    </button>
  );
};

// Horizontal row container
export const LcarsRow: React.FC<CommonProps> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`flex flex-row items-center gap-2 ${className}`}>
    {children}
  </div>
);

// Vertical column container
export const LcarsColumn: React.FC<CommonProps> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`flex flex-col gap-0 ${className}`}>
    {children}
  </div>
);

// Sidebar container
export const LcarsSidebar: React.FC<LcarsSidebarProps> = ({ 
  children, 
  className = '', 
  side = 'left'
}) => (
  <aside className={`
    flex flex-col gap-0
    w-lcars-sidebar
    ${side === 'left' ? 'items-end text-right' : 'items-start text-left'}
    ${className}
  `}>
    {children}
  </aside>
);

// Content window with Matrix rain effect
export const LcarsDataWindow: React.FC<CommonProps> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`
    relative overflow-hidden
    min-h-[12rem] w-full
    bg-lcars-black
    ${className}
  `}>
    {/* Matrix rain effect */}
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

// Divider bar
export const LcarsDivider: React.FC<CommonProps> = ({ 
  color = 'bg-lcars-orange', 
  className = '' 
}) => (
  <div className={`h-2 w-full ${color} ${className}`} />
);

// Data Cascade for LCARS
export const DataCascade: React.FC<DataCascadeProps> = ({ 
  pattern = 'default',
  className = '' 
}) => {
  const [data] = useState([
    ['101','7109','1966', '36','880','11.3','1954', '03','6.08','241','309','7.08','1935','12.20', '53','1961','2.16'],
    ['102','8102','1987','044','0051','1968','704','1031','1984','1954','764','1940','9.9','1972', '815','4.12','2023'],
    ['103', '714','1993','954','4.4','1969','2450', '91',' 56',' 21','716','801','417','602','5618','238','1443'],
    ['104','6104','1995','3.22','1931','727','755','1701','1984','218','908',' 10',' 85','1888',' 27','2879','213'],
    ['105','  08','2001','713',' 079','1977',' LV','426','105',' 10','1642','1979','402','795','361','0852','984'],
    ['106',' 31','2017','429',' 65','871',' 24','541','656','  M','113','12.6',' 27',' 05',' 85','12.25','7884'],
    ['107','  5','2022','784','3304',' 42','733','1224','5801',' 23','1015',' 84',' 36','029',' 24','318','12.24'],
    ['108',' 23','174',' 91','947',' 28','527',' 04','0469','2200',' 88','1985','540','3121','308','9571','404']
  ]);

  return (
    <div className={`grid grid-cols-17 gap-x-4 text-lcars-orange font-lcars text-sm ${className}`}
         id={pattern !== 'default' ? pattern : undefined}>
      {data.map((row, rowIndex) => (
        row.map((cell, cellIndex) => (
          <div key={`${rowIndex}-${cellIndex}`} className="text-right whitespace-nowrap">
            {cell}
          </div>
        ))
      ))}
    </div>
  );
};

// Replace existing ScrollToTop with:
export const LcarsScrollToTop: React.FC<CommonProps> = ({ 
  className = '' 
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-4 left-4
        h-12 w-12
        bg-lcars-violet rounded-full
        flex items-center justify-center
        text-lcars-spaceWhite
        hover:brightness-110
        transition-opacity duration-200
        ${className}
      `}
    >
      ↑
    </button>
  );
};