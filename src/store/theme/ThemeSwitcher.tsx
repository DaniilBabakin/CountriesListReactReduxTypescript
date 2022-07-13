import { useEffect } from 'react'
import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import styled from 'styled-components'
import { useTypedDispatch, useTypedSelector } from 'types'

import { setTheme } from './ThemeSlice'

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`

export const ThemeSwitcher: React.FC = () => {
  const dispatch = useTypedDispatch()
  const theme = useTypedSelector((state) => state.theme)

  const toggleTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])
  return (
    <ModeSwitcher onClick={toggleTheme}>
      {theme === 'light' ? <IoMoonOutline size='14px' /> : <IoMoon size='14px' />}{' '}
      <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
    </ModeSwitcher>
  )
}
