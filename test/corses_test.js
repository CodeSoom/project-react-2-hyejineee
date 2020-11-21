Feature('course');

Scenario('사용자는 각 단계에서 질문에서 옵션을 선택하고 등산코스 리스트를 봅니다.', ({ I }) => {
  I.amOnPage('/');

  I.checkOption('서울');
  I.checkOption('초보자');
  I.checkOption('가을');
  I.checkOption('경치 구경하기');

  I.see('소요산 - 공주봉코스');
  I.see('1시간 50분');
  I.see('소요산역 - 일주문 - 구절터 - 공주봉');
  I.see('https://www.ddc.go.kr/tour/contents.do?key=567');

  const tags = ['가을', '봄', '초보자', '난이도 : 하', '서울'];

  tags.forEach((tag) => {
    I.see(tag);
  });
});
