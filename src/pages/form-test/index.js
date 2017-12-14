import React from 'react'
import Form, { Checkboxes, Input, TextArea, Select, Submit, Radios } from 'components/Form'
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
              width='50%'
            />
            <Input
              id='Field2'
              label='Phone'
              autocomplete='tel'
              validator='phone'
              width='50%'
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
              width={'50%'}
            >
              <option>Test</option>
              <option>Test2</option>
              <option>Test3</option>
            </Select>
            <Checkboxes
              label='Check some boxes'
              required
            >
              {[
                { id: 'Field8', value: 'First Choice' },
                { id: 'Field9', value: 'Second Choice' },
                { id: 'Field10', value: 'Third Choice' },
              ]}
            </Checkboxes>
            <Radios
              id='Field109'
              label='Choose Your Favorite'
              required
            >
              {[
                { value: 'Red' },
                { value: 'Yellow' },
                { value: 'Blue' },
              ]}
            </Radios>
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
