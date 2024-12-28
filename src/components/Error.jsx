import React from 'react'
import { useRouteError } from 'react-router-dom'

export const Error = () => {
    const err = useRouteError();
  return (
    <div>
        <h1>
           Oopss.....
        </h1>
        <p>
            Something went wrong
        </p>
        <p>{err.status} - {err.statusText}</p>
    </div>
  )
}
