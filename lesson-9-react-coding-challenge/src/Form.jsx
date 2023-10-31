import React from 'react'
import Button from './Button'

const Form = ({reqType, setReqType}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <Button
            buttonText='Users'
            reqType={reqType}
            setReqtype={setReqType}
        />
        <Button
            buttonText='Posts'
            reqType={reqType}
            setReqtype={setReqType}
        />
        <Button
            buttonText='Comments'
            reqType={reqType}
            setReqtype={setReqType}
        />
    </form>
  )
}

export default Form
