import { mount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp'

describe('TodoApp.vue', () => {

  let wrapper;
  
  beforeEach(() => {

    wrapper = mount(TodoApp)

  })

  it('todo text check', () => {
    const todo = wrapper.get('[data-test="todo"]')
    expect(todo.text()).toContain("learn Vue");
  })
})
