import React from 'react'
import Form, { Input, TextArea, Submit } from 'components/Form'

export default function FormTestPage() {
  return (
    <main className='row'>
      <div className='columns'>
        <h2>Form Test</h2>
        <Form id='zwtrd7608mqb1q'>
          <Input
            id='Field1'
            label='Name'
            required
          />
          <Input
            id='Field2'
            label='Phone'
            validator='phone'
            required
          />
          <Input
            id='Field3'
            label='Email'
            placeholder='example@test.com'
            validator='email'
            required
          />
          <TextArea
            id='Field4'
            label='Message'
            min={35}
            required
          />
          <Submit>Submit</Submit>
        </Form>
      </div>
    </main>
  )
}
