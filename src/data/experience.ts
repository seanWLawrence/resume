interface CreateNewTabLink {
  (text: string, href: string): string;
}

let createNewTabLink: CreateNewTabLink = (text, href) => {
  return `<a href="${href}" target="_blank" rel="nofollow noreferrer nooopener">${text}</a>`;
};

export default {
  jobs: [
    {
      title: "Full Stack Engineer",
      company: { name: "Make School", url: "https://makeschool.com" },
      startDate: new Date("2018-10-22"),
      responsibilities: [
        "Build and maintain the frontend for course registrations, attendance tracker, job board and an advanced query builder table to support staff and students at scale of ~1.2M requests per month (React.js, GraphQL, Apollo Client). Projected to save staff and students over 1500 hours in the next year from previous implementations.",
        "Increase number of React.js unit tests with Jest/Enzyme by more than 4X (from ~200 to ~900 specs) and adding integration tests for all student-facing products. Allowed us to start a massive migration of ~40K JavaScript files from React v15 to React v16 and Relay Modern to Apollo Client with confidence.",
        "Implement a style guide and setup JavaScript linting/prettify/typing configuration to enforce it throughout the entire codebase. Helped reduce technical debt ratio by 50% (from ~2% to ~1%), while adding 2X more features (from ~28K to ~70K lines of JavaScript code) over 18 months."
      ]
    },
    {
      title: "Full Stack Engineer (Freelance, Part-time)",
      company: { name: "Beastgrip", url: "https://beastgrip.com" },
      startDate: new Date("2015-01-10"),
      responsibilities: [
        "Lead product development of a custom-built e-commerce SaaS product with user permissions, CMS and integrated shipping service (React.js, Node.js, Express.js).",
        `Collaborate with the CEO on designs for new ${createNewTabLink(
          "rigs",
          "https://beastgrip.com/collections/shop-now/rigs-and-bundles"
        )}, ${createNewTabLink(
          "lenses",
          "https://beastgrip.com/collections/shop-now/lenses-adapters"
        )} and applications for both ${createNewTabLink(
          "mobile",
          "https://beastgrip.com/pages/beastcam"
        )} and ${createNewTabLink(
          "web",
          "https://beastgrip.com/"
        )}. Conduct internal dogfooding/${createNewTabLink(
          "film projects",
          "https://www.youtube.com/user/beastgripTV"
        )} with our gear and communicate directly with our users via phone and email to grow our product/market fit. Resulted in ${createNewTabLink(
          "several successfully funded Kickstarter campaigns",
          "https://www.kickstarter.com/discover/advanced?ref=nav_search&term=beastgrip"
        )} raising ~400K.`,
        `Develop strong partnerships with executives at Apple, Facebook, and several Oscar-winning directors. Resulted in several feature-length films and music videos created on an iPhone with Beastgrip gear: ${createNewTabLink(
          'Steven Soderberg\'s "Unsane"',
          "https://beastgrip.com/blogs/news/steven-soderberghs-unsane-film-shot-with-iphone-and-beastgrip-pro"
        )}, ${createNewTabLink(
          'Olivia Wilde\'s "No Love Like Yours"',
          "https://beastgrip.com/blogs/news/113315780-olivia-wilde-directs-music-video-no-love-like-yours-for-edward-sharpe-and-the-magnetic-zeros-shot-on-an-iphone-and-the-beastgrip-dof-adapter"
        )}, and ${createNewTabLink(
          'John Legend\'s "A Good Night"',
          "https://beastgrip.com/blogs/news/john-legends-a-good-night-music-video-shot-with-google-pixel-2-and-beastgrip-pro"
        )}.`
      ]
    }
  ]
};
