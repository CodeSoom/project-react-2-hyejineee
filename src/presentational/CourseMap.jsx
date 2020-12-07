import React, { useEffect, useRef } from 'react';

import { NaverMap } from 'react-naver-maps';

export default function CourseMap({ courseGPX }) {
  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current !== null && courseGPX !== undefined) {
      const ref = mapRef.current;
      try {
        const map = ref.instance;
        map.data.addGpx(courseGPX, true);
      } catch (error) {
        console.log(error);
      }
    }
  });

  return (
    <NaverMap
      naverRef={(ref) => { mapRef.current = ref; }}
      style={{ width: '100%', height: '400px' }}
    />
  );
}
