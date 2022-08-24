/**
 * Todo type definition
 * @typedef {Object} Todo
 * @property {string} id - id
 * @property {string} content - 할일 내용
 * @property {boolean} isDone - 완료 여부
 * @property {string} category - 카테고리
 * @property {string[]} [hashtag] - 해시태그
 */

/**
 * 모든 할일을 조회하는 함수.
 * @function
 * @returns {Todo[]}
 */
const getTodoList = () => {};

/**
 * ID를 기반으로 특정 할 일을 조회할 수 있는 함수.
 * @function
 * @param {string} id - todo id
 * @returns {Todo}
 */
const getTodoItemById = (id) => {};

/**
 * 할일을 생성하는 함수
 * @function
 * @param {string} category - 카테고리
 * @param {string} content - 할일 내용
 * @param {string[]} [hashtag] - 해시 태그
 */
const createTodoItem = (category, content, hashtag) => {};

/**
 * 할일을 수정하는 함수
 * @function
 * @param {string} id - todo id
 * @param {string} category - 카테고리
 * @param {string} content - 할일 내용
 * @param {string[]} [hashtag] - 해시 태그
 */
const updateTodoItem = (id, category, content, hashtag) => {};

/**
 * 할일을 삭제하는 함수
 * @function
 * @param {string} id - todo id
 */
const deleteTodoItem = (id) => {};

/**
 * 할일을 모두 삭제하는 함수
 * @function
 */
const clearTodoList = () => {};
