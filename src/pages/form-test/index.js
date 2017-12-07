import React from 'react'
import Form, { Input, Submit } from 'components/Form'

export default function FormTestPage() {
  return (
    <main className='row'>
      <div className='columns'>
        <h2>Form Test</h2>
        <Form>
          <Input
            id='Field201'
            label='Email'
            placeholder='example@test.com'
          />
          <Submit>Submit</Submit>
        </Form>
      </div>
    </main>
  )
}
