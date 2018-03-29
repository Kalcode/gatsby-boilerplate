import React from 'react'
import Slider, { Slide } from 'components/Slider'
import { HomeSlide } from 'components/Slides'

export default function AboutPage() {
  return (
    <main>
      <Slider>
        <Slide><HomeSlide color='purple'>Test 1</HomeSlide></Slide>
        <Slide><HomeSlide color='blue'>Test 2</HomeSlide></Slide>
        <Slide><HomeSlide color='green'>Test 3</HomeSlide></Slide>
        <Slide><HomeSlide color='red'>Test 4</HomeSlide></Slide>
        <Slide><HomeSlide color='orange'>Test 5</HomeSlide></Slide>
      </Slider>
    </main>
  )
}
