import React, { useEffect, useState } from 'react';

import { getCourseGPXFile } from 'service/courseGPX';

import { RenderAfterNavermapsLoaded } from 'react-naver-maps';

import CourseMap from 'presentational/CourseMap';

export default function CourseMapCotainer({ courseId }) {
  const [courseGPX, setGPXFile] = useState();

  useEffect(async () => {
    setGPXFile(await getCourseGPXFile(courseId));
  }, []);

  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={process.env.REACT_APP_MAP_CLIENT_ID}
    >
      <CourseMap courseGPX={courseGPX} />
    </RenderAfterNavermapsLoaded>
  );
}
