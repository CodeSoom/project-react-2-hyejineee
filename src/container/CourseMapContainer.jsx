import React, { useEffect } from 'react';

import { RenderAfterNavermapsLoaded } from 'react-naver-maps';

import { useDispatch, useSelector } from 'react-redux';

import CourseMap from 'presentational/CourseMap';

import { loadCourseGPX } from '_redux/slice';

import { converter } from 'utils';

const parser = (str, mimeType) => new DOMParser().parseFromString(str, mimeType);

const convertToXml = converter(parser)('text/xml');

export default function CourseMapCotainer({ courseId }) {
  const dispatch = useDispatch();

  const { courseGPX } = useSelector((state) => ({
    courseGPX: state.courseGPX,
  }));

  useEffect(async () => {
    dispatch(loadCourseGPX(courseId));
  }, []);

  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={process.env.REACT_APP_MAP_CLIENT_ID}
    >
      <CourseMap courseGPX={convertToXml(courseGPX)} />
    </RenderAfterNavermapsLoaded>
  );
}
