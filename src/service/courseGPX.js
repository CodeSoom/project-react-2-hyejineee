import * as gpx from 'data/gpx';

export async function getCourseGPXFile(courseId) {
  const url = gpx[`course${courseId}`].default;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
  const result = await response.text();

  return new DOMParser().parseFromString(result, 'text/xml');
}

// TODO : delete this
export const xxxx = '';
