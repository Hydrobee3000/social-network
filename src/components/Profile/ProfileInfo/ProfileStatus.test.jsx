import React from 'react'
import ProfileStatus from './ProfileStatus'
import { create } from 'react-test-renderer'

describe('ProfileStatus component', () => {
  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status='hihihoho' />)
    const instance = component.getInstance()
    expect(instance.state.status).toBe('hihihoho')
  })

  test('after creation <span> should be displayed', () => {
    const component = create(<ProfileStatus status='hihihoho' />)
    const root = component.root
    let span = root.findByType('span')
    expect(span).not.toBeNull()
  })

  test(`after creation <span> shouldn't be displayed`, () => {
    const component = create(<ProfileStatus status='hihihoho' />)
    const root = component.root
    expect(() => {
      let input = root.findByType('input')
    }).toThrow()
  })

  test('after creation <span> should contains correct status', () => {
    const component = create(<ProfileStatus status='hihihoho' />)
    const root = component.root
    let span = root.findByType('span')
    expect(span.children[0]).toBe('hihihoho')
  })

  test('input should be displayed in editMode instead of span', () => {
    const component = create(<ProfileStatus status='hihihoho' />)
    const root = component.root
    let span = root.findByType('span')
    span.props.onDoubleClick()
    let input = root.findByType('input')
    expect(input.props.value).toBe('hihihoho')
  })
})
