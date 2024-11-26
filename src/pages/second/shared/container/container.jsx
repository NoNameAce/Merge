import { css } from '@emotion/css'
import React, { Children } from 'react'

const Container = ({children}) => {
  return (
    <div className={
      css`
      max-width: 1248px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items:center;
      `
    }>
      {children}
    </div>
  )
}

export default Container
