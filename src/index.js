const model = {
  todos: [
    {
      id: "1",
      content: "데이터 모델링부터 막힙니다. 이렇게 하는 게 맞나? 에궁...",
      done: false,
      category: "model",
      hashtag: "#model",
    },
    {
      id: "2",
      content: "jsdoc을 설치해봤습니다. 이게 맞나? 의 연속",
      done: true,
      category: "jsdoc",
    },
  ],
};

/**
 * "할일내용: ${content}"을 반환하는 함수
 *
 * @param {category} category - 카테고리
 * @param {string} content - 할일 내용
 * @param {?hashtag} hashtag - 해시 태그
 * @returns {string} - 할일제목: title, 할일내용: content
 */
function createTodoItem(content, category, hashtag) {
  return `${category} : 할일내용: ${content} 태그: ${hashtag}`;
}
