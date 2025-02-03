"use client";

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./MapClient'), { ssr: false });

export default Map;
