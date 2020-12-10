import React from 'react';

import SelectedOption from 'presentational/SelectedOption';

export default function SelectedOptions({ selectedOptions }) {
  const {
    region, climbingLevel, season, activity,
  } = selectedOptions;

  return (
    <p>
      <SelectedOption option={region} />
      에서
      {' '}
      <SelectedOption option={climbingLevel} />
      를 위한
      <SelectedOption option={season} />
      에 제격인
      {' '}
      <SelectedOption option={activity} />
      목적의 등산로입니다!
    </p>
  );
}
