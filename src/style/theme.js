const calcRem = (size) => `${size / 16}rem`;

const colors = {
  context: '#6c6c6c',
  main: '#3697ff',
  sub1: '#a28440',
  sub2: '#ffefcc',
};

const typos = {
  main: `bold ${calcRem(38)} Noto Sans KR`,
  sub: `bold ${calcRem(28)} Noto Sans KR`,
  selected: `500 ${calcRem(24)} Noto Sans KR`,
  nonSelected: `400 ${calcRem(24)} Noto Sans KR`,
  context: `400 ${calcRem(18)} Noto Sans KR`,
};

const theme = {
  colors,
  typos,
};

export default theme;
