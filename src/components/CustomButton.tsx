'use client';

import { CustomButtomProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const CustomButton = ({
  containerStyles,
  handleClick,
  title,
}: CustomButtomProps) => {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
      disabled={false}
      type={`button`}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;