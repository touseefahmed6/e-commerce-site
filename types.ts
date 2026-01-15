// Add missing React import to fix namespace error
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  href: string;
}