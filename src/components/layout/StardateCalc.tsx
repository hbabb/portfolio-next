'use client';

import React, { useState, useEffect } from 'react';
import { format, formatInTimeZone } from 'date-fns-tz';

// Define our type for date strings
type EarthDate = string; // ISO date string
type Stardate = string; // Stardate string

// Interfaces for each component's props
interface ClockDisplayProps {
  className?: string;
}

interface DateConverterProps {
  date: Date | EarthDate;  // Accept either Date object or ISO string
  className?: string;
  showUTC?: boolean;
}

// Helper function with type safety
export function convertToStardate(earthDate: EarthDate): Stardate {
  const date = new Date(earthDate);
  const year = date.getFullYear() % 100;
  
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const dayOfYearStr = (dayOfYear < 10 ? '00' : dayOfYear < 100 ? '0' : '') + dayOfYear;

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  const totalSecondsInDay = 24 * 60 * 60;
  const currentSeconds = hours * 60 * 60 + minutes * 60 + seconds;
  const fractionOfDay = ((currentSeconds / totalSecondsInDay) * 100).toFixed(0);

  return `${year}${dayOfYearStr}.${fractionOfDay.padStart(2, '0')}`;
}

// Components with explicit type annotations
export const StardateDisplay: React.FC<ClockDisplayProps> = ({ className = '' }) => {
  const [currentStardate, setCurrentStardate] = useState<Stardate>('');

  useEffect(() => {
    const updateStardate = () => {
      const now = new Date();
      setCurrentStardate(convertToStardate(now.toISOString()));
    };

    updateStardate();
    const interval = setInterval(updateStardate, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`font-lcars ${className}`}>
      {currentStardate}
    </div>
  );
};

export const UTCClock: React.FC<ClockDisplayProps> = ({ className = '' }) => {
  const [utcTime, setUtcTime] = useState<EarthDate>('');

  useEffect(() => {
    const updateUTC = () => {
      const now = new Date();
      setUtcTime(formatInTimeZone(now, 'UTC', "'UTC:' yyyy-MM-dd | HH:mm"));
    };

    updateUTC();
    const interval = setInterval(updateUTC, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`font-lcars ${className}`}>
      {utcTime}
    </div>
  );
};

export const LocalClock: React.FC<ClockDisplayProps> = ({ className = '' }) => {
  const [localTime, setLocalTime] = useState<EarthDate>('');

  useEffect(() => {
    const updateLocal = () => {
      const now = new Date();
      setLocalTime(format(now, "'Local:' yyyy-MM-dd | HH:mm", { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }));
    };

    updateLocal();
    const interval = setInterval(updateLocal, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`font-lcars ${className}`}>
      {localTime}
    </div>
  );
};

export const DateConverter: React.FC<DateConverterProps> = ({ 
  date, 
  className = '', 
  showUTC = true 
}) => {
  // Type guard to handle both Date and string inputs
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const stardate = convertToStardate(dateObj.toISOString());
  const utcTime = format(dateObj, "yyyy-MM-dd");

  return (
    <div className={`font-lcars ${className}`}>
      <div>STARDATE: {stardate}</div>
      {showUTC && <div>EARTHDATE: {utcTime}</div>}
    </div>
  );
};