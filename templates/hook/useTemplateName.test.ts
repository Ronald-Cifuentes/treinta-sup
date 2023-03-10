import { act, renderHook } from '@testing-library/react'
import { useTemplateName } from './useTemplateName'

describe('<TemplateName />', () => {
  test('#1. Exist - Render correctly', () => {
    const { result } = renderHook(() => useTemplateName())

    void act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(1)
  })
})
