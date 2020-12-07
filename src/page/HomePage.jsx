import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>당신만의 등산로를 찾아드립니다!</h1>
      <p>
        나에게 맞는 등산로는 어디에 있을까요?
        나의 등산 실력, 등산의 목적, 그리고 등산을 원하는 계절까지
        간편하게 선택하고 여기저기 숨겨진 나만의 등산로를 찾아보세요!
      </p>
      <Link to="/questions">Start</Link>
    </div>
  );
}
