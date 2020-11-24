import climbingCourses from 'data/courses';

import {
  exist,
} from '../utils';

export function findClimbingCourses({
  region, climbingLevel, season, activity,
}) {
  if (!(region && climbingLevel && season && activity)) {
    return [];
  }

  const hasRegion = exist(region);
  const hasDifficulty = exist({
    '초보자': '하',
    '중급자': '중',
    '상급자': '상',
  }[climbingLevel]);
  const hasSeason = exist(season);
  const hasActivity = exist(activity);

  return climbingCourses.filter((course) => hasRegion(Object.values(course))
    && hasDifficulty(Object.values(course))
    && hasSeason(course.seasons)
    && hasActivity(course.activities));
}
