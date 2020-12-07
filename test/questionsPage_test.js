Feature('QuestionsPage');

Scenario('사용자는 지역 선택 화면을 볼 수 있습니다.', ({ I }) => {
  I.amOnPage('/questions/#question1');
  I.see('어느 지역으로 가고 싶으신가요?');
});

Scenario('사용자는 난이도 선택 화면을 볼 수 있습니다.', ({ I }) => {
  I.amOnPage('/questions/#question2');
  I.see('어느 지역으로 가고 싶으신가요?');
});

Scenario('사용자는 계절 선택 화면을 볼 수 있습니다.', ({ I }) => {
  I.amOnPage('/questions/#question3');
  I.see('등산을 가고자 하는 계절은 언제인가요?');
});

Scenario('사용자는 활동 선택 화면을 볼 수 있습니다.', ({ I }) => {
  I.amOnPage('/questions/#question4');
  I.see('산에서 무엇을 하고 싶으세요?');
});
