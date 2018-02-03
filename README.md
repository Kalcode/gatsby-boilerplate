# gatsby-boilerplate aka The Kitchen Sink
This is just a boilerplate for static websites.  
It basically a kitchen sink of stuff I typically use in every project.

Uses [GatsbyJS](https://www.gatsbyjs.org/) at its foundation.  
React, Redux, SCSS, Post-CSS, GSAP, ScrollMagic, Foundation, Modernizr, sitemap-gen, favicon-gen, google-analytics probably more.

Also linters, ESlint and Styline rules along with pre-commit hooks. 

Tested as far back as IE10 with the polyfills I use. 

Has a nav already hooked up to redux. Also has React headroom so you nav auto hides.

A form that uses fetch but you can pass an action prop and do a normal POST on submit. The form has validators for it and is currently hooked to to work with a custom micro-server that talks to wufoo. Should be very simple to swap out the reducers and the API calls with whatever service you'd like to use.

Has page transitions to. It's a component that really easy to customize. Only caveat is page transitions causes a flicker, so I have a 'loading' screen before React loads in. Takes away one from the awesome things about a static generated React app which is a first paint time. But I really like page transitions and I still loads pretty fast.

There is an example component for scrollmagic with comments.



