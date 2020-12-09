import React from 'react';

import Option from 'presentational/Option';

export default function SelectedOptions({ selectedOptions }) {
  const {
    region, climbingLevel, season, activity,
  } = selectedOptions;

  return (
    <p>
      <Option option={region} />
      에서
      {' '}
      <Option option={climbingLevel} />
      를 위한
      <Option option={season} />
      에 제격인
      {' '}
      <Option option={activity} />
      목적의 등산로입니다!
    </p>
  );
}
