/**
 * @namespace
 */
const TodoList = {
  /**
   * Todo Modeling
   * @type {Object}
   * @example Todo {
   *    id,
   *    content,
   *    isDone,
   *    category,
   *    hashtag
   * }
   */
  Todo: { id, content, isDone, category, hashtag },
  /**
   * 모든 할일을 조회하는 함수.
   * @function
   */
  getTodoList: function () {},

  /**
   * ID를 기반으로 특정 할 일을 조회할 수 있는 함수.
   * @function
   * @param {string} id - todo id
   */
  getTodoItemById: function (id) {},

  /**
   * 할일을 생성하는 함수
   * @function
   * @param {string} category - 카테고리
   * @param {string} content - 할일 내용
   * @param {string} [hashtag] - 해시 태그
   */
  createTodoItem: function (category, content, hashtag) {},

  /**
   * 할일을 수정하는 함수
   * @function
   * @param {string} category - 카테고리
   * @param {string} content - 할일 내용
   * @param {string} [hashtag] - 해시 태그
   */
  updateTodoItem: function (category, content, hashtag) {},

  /**
   * 할일을 삭제하는 함수
   * @function
   * @param {string} id - todo id
   */
  deleteTodoItem: function (id) {},
};
