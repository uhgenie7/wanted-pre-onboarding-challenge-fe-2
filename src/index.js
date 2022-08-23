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
 * 할일을 생성하는 함수
 * @function
 * @param {string} category - 카테고리
 * @param {string} content - 할일 내용
 * @param {string} [hashtag] - 해시 태그
 */
function createTodoItem(content, category, hashtag) {}

/**
 * 모든 할일을 조회하는 함수
 * @function
 */
function getTodoList() {}

/**
 * 단일 할일을 조회하는 함수
 * @function
 */
function getTodoItemById() {}

/**
 * 할일을 수정하는 함수
 * @function
 */
function updateTodoItem() {}

/**
 * 할일을 삭제하는 함수
 * @function
 */
function deleteTodoItem() {}
