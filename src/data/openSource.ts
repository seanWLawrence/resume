export default {
  openSourceContributions: [
    {
      name: "webpacker",
      url: "https://github.com/rails/webpacker/issues/1897",
      programmingLanguage: "Ruby",
      description:
        "Added documentation for troubleshooting an error when using Webpacker with an existing Sprockets asset pipeline. Without this confirguration setting, the uglifier minification tool would fail to minify ES6 JavaScript and break the build."
    },
    {
      name: "mail-for-good",
      url: "https://github.com/freeCodeCamp/mail-for-good/pull/251",
      programmingLanguage: "HTML/CSS",
      description:
        "Created an accessible documentation website for Mail For Good, an open source email campaign management tool for nonprofits. The site is deployed on GitHub Pages and is made with Hugo and a customized Material Design theme with Free Code Camp's branding."
    },
    {
      name: "MINA",
      url: "http://mina.pro",
      programmingLanguage: "HTML/CSS",
      description:
        "Created a website for the Mobile Innovation Network and Association non-profit company that and allows filmmakers to submit films for screening events hosted by them and view information about past and upcoming screenings. The site was built with WordPress and integrates with third-party tools from FilmFreeway and Scribd."
    }
  ],
  openSourceProjects: [
    {
      name: "hendrix",
      url: "https://github.com/seanWLawrence/hendrix",
      programmingLanguage: "TypeScript",
      description:
        "Command line interface that allows you to quickly generate list of files based on customizable templates with zero configuration. We use this in production at Make School to scaffold new products and onboard new engineers with our frontend coding conventions."
    },
    {
      name: "curry-time (in progress)",
      url: "https://github.com/seanWLawrence/curry-time",
      programmingLanguage: "TypeScript",
      description:
        "Curried functional programming helpers to help you write chainable, declarative logic with immutable data. Includes over 60 functions like pipe, caseOf, maybe, pluck, etc., detailed TypeScript type definitions, and thorough property-based testing."
    },
    {
      name: "react-design-system (in progress)",
      url: "https://github.com/seanWLawrence/react-design-system",
      programmingLanguage: "TypeScript/SASS",
      description:
        "Command line interface that allows you to generate a list of basic and advanced React components with base styles and built-in accessibility, form validation, TypeScript type definitions and error handling without any dependencies. The base styles build off of a SASS theme that can easily be customized for your project's branding."
    }
  ]
};
