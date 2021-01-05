# NO LONGER MAINTAINED

This repo uses a very old outdated Gatsby version. For the latest checkout: https://www.gatsbyjs.com/

## gatsby-boilerplate aka The Kitchen Sink

This is just a boilerplate for static websites using React.

It basically a kitchen sink that is customiozed/tailored for stuff I typically use in every project.

Uses [GatsbyJS](https://www.gatsbyjs.org/) at its foundation.

React, Redux, SCSS, Post-CSS, GSAP, ScrollMagic, Foundation, Modernizr, sitemap-gen, favicon-gen, google-analytics probably more are hooked up.

Also linters, ESlint and Styline rules along with pre-commit hooks.

Tested as far back as IE10 with the polyfills I use.

Has a nav already hooked up to redux and React headroom so the nav auto hides.

A form that uses fetch but you can pass an action prop and do a normal POST on submit. The form has validators for it and is currently hooked to work with a custom micro-server that talks to wufoo. Pretty simple to swap out the reducers and the API calls with whatever service you'd like to use.

Has page transitions too that can be customized.

There is an example component for scrollmagic with comments that used context to interact with scrollmagic's controller.
