import React from 'react'
import Form, { Input, TextArea, Select, Submit } from 'components/Form'
import ThankYou from 'components/ThankYou'

export default function FormTestPage() {
  return (
    <main>
      <div className='row'>
        <div className='columns'>
          <h2>Form Test</h2>
          <Form
            submittedElement={ThankYou}
            id='zwtrd7608mqb1q'>
            <Input
              id='Field1'
              label='Name'
              autocomplete='name'
              placeholder='John Doe'
              required
            />
            <Input
              id='Field2'
              label='Phone'
              autocomplete='tel'
              validator='phone'
              required
            />
            <Input
              id='Field3'
              label='Email'
              autocomplete='email'
              placeholder='example@test.com'
              validator='email'
              required

            />
            <Select
              id='Field6'
              label='Options'
              required
            >
              <option>Test</option>
              <option>Test2</option>
              <option>Test3</option>
            </Select>
            <TextArea
              id='Field4'
              label='Message'
            />
            <Submit>Submit</Submit>
          </Form>
        </div>
      </div>
    </main>
  )
}
