# Reading and Deleting DOM Elements

Use this travel blog website to practice reading and deleting elements from the DOM.

---

## Lab Setup

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your local directory.

```
npm test
```

This will open the Cypress testing window, where you can click to run an individual suite of tests or all of the tests at once.

## Instructions

Begin by creating a `main.js` file. Then, connect that file to the `index.html` file.

To complete the tests in this lab, you will need to remove a number of elements from the page using JavaScript. You _should not_ edit the HTML at all to get the tests to pass. If you're unclear about any of the instructions below, remember that you can check the test file to see what exactly is being tested.

- [ ] Remove the "All Posts" link from the header.
- [ ] Remove the `span` element that contains the "Read Time" in the featured post. The featured post is the first post on the page.
- [ ] Remove the last post from the page, titled "Stop Planning".
- [ ] Remove all titles from all non-featured posts.
