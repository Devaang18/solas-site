'use client';

import { useState, useEffect } from 'react';

interface Breakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
}

const breakpoints: Breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
  screenWidth: number;
  screenHeight: number;
  orientation: 'portrait' | 'landscape';
  breakpoint: keyof Breakpoints | 'xs';
}

export function useResponsive(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLargeDesktop: false,
    screenWidth: 0,
    screenHeight: 0,
    orientation: 'landscape',
    breakpoint: 'xs',
  });

  useEffect(() => {
    const updateDeviceInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      const isMobile = width < breakpoints.md;
      const isTablet = width >= breakpoints.md && width < breakpoints.lg;
      const isDesktop = width >= breakpoints.lg && width < breakpoints.xl;
      const isLargeDesktop = width >= breakpoints.xl;
      
      let breakpoint: keyof Breakpoints | 'xs' = 'xs';
      if (width >= breakpoints['2xl']) breakpoint = '2xl';
      else if (width >= breakpoints.xl) breakpoint = 'xl';
      else if (width >= breakpoints.lg) breakpoint = 'lg';
      else if (width >= breakpoints.md) breakpoint = 'md';
      else if (width >= breakpoints.sm) breakpoint = 'sm';
      
      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        isLargeDesktop,
        screenWidth: width,
        screenHeight: height,
        orientation: width > height ? 'landscape' : 'portrait',
        breakpoint,
      });
    };

    // Initial call
    updateDeviceInfo();

    // Add event listener
    window.addEventListener('resize', updateDeviceInfo);
    window.addEventListener('orientationchange', updateDeviceInfo);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateDeviceInfo);
      window.removeEventListener('orientationchange', updateDeviceInfo);
    };
  }, []);

  return deviceInfo;
}

// Utility functions for responsive design
export const getResponsiveValue = <T>(
  mobile: T,
  tablet: T,
  desktop: T,
  deviceInfo: DeviceInfo
): T => {
  if (deviceInfo.isMobile) return mobile;
  if (deviceInfo.isTablet) return tablet;
  return desktop;
};

export const getResponsiveSpacing = (deviceInfo: DeviceInfo): string => {
  if (deviceInfo.isMobile) return 'py-8 px-4';
  if (deviceInfo.isTablet) return 'py-12 px-6';
  return 'py-16 px-8';
};

export const getResponsiveTextSize = (deviceInfo: DeviceInfo, baseSize: string): string => {
  if (deviceInfo.isMobile) return `text-${baseSize}`;
  if (deviceInfo.isTablet) return `text-${baseSize} sm:text-${baseSize === 'sm' ? 'base' : baseSize === 'base' ? 'lg' : baseSize}`;
  return `text-${baseSize} sm:text-${baseSize === 'sm' ? 'base' : baseSize === 'base' ? 'lg' : baseSize} lg:text-${baseSize === 'sm' ? 'lg' : baseSize === 'base' ? 'xl' : baseSize}`;
};

