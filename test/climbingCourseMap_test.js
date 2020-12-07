Feature('course map ');

Scenario('등산코스의 지도 보기 버튼을 누르면 해당 코스가 표시된 지도를 볼 수 있다.', ({ I }) => {
  I.amOnPage('/');

  I.checkOption('서울');
  I.checkOption('초보자');
  I.checkOption('가을');
  I.checkOption('경치 구경하기');

  I.see('소요산 - 공주봉 코스');
  I.see('소요산역 - 일주문 - 구절터 - 공주봉');

  // TODO : 아이템 클리시 지도를 볼 수 있다.
  // I.click('지도 보기');

  // I.seeElement('#react-naver-map');
});
