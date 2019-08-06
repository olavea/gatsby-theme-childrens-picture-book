<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  @olavea/gatsby-theme-picture-book
</h1>

I love reading books. So the day it dawned on me that I could build a book with Gatsby was a GOOD day. By getting some brilliant friends to help me build this theme I hope to pass some of the goodness on to you.

[My daughter](#storytime) Lillian (4.5 🦄) gave me the Gatsby-book-building-idea, read the backstory by scrolling down to the end.

Check out [Petra Rabbit](https://petra-rabbit.netlify.com). It's almost Beatrix Potter's Peter Rabbit, newly narrated by Lillian (4.5 🦄) and I.

-- <cite>Ola Vea (41 #codenewbie and #booklover)<cite>

## Create a Do-It-Yourself picture book together with a child you know

- Automagically generate a picture book from image files
- Touch swipe to flip page
- Optional audio track

Ola will continue working on this theme while learning to code. New features will be added sporadically. You are welcome to make a pull request on [github](https://github.com/olavea/gatsby-theme-picture-book), [@raae](https://github.com/raae) will help manage the repo. Ask Ola anything or give him ideas on twitter [@OlaHolstVea](https://twitter.com/OlaHolstVea)

[DEMO Site](https://petra-rabbit.netlify.com)




## Installation

```sh
npm install @olavea/gatsby-theme-picture-book
```

### Install With the Gatsby-starter-hello-world 🐰

1.  **Practice Creating a Children's Picture Book With the Gatsby-starter-hello-world and Our Theme.**

    Use the Gatsby CLI to create a new book, specifying the hello-world starter.

    ```sh
    # create a new Gatsby book using the hello-world starter
    gatsby new Your_Brutus_BADger_Book https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```

1.  **Navigate into your new book’s directory**

    ```sh
    cd Your_Brutus_BADger_Book/
    ```
1.  **npm install @olavea/gatsby-theme-picture-book**

    ```sh
    npm install @olavea/gatsby-theme-picture-book
    ```


1.  **Open the source code and start editing gatsby-config.js**

    Open the `Your_Brutus_BADger_Book` directory in your code editor of choice and edit `gatsby-config.js`

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@olavea/gatsby-theme-picture-book`,
      options: {
        basePath: `/my-book`,
        imagePath: `book/images`,
        infoLink: {
          title: "gatsby-theme-picture-book on GitHub",
          url: `https://github.com/olavea/gatsby-theme-picture-book.git`,
        },
      },
    },
  ],
}
```

1.  **Almost There...**


- Create a new folder "book" at the root of your source code.
- Create a new folder "images" inside your new folder "book".
- Add two images to the "images" folder.
- Rename your two images to "00" and "01"
- Delete the folder "pages" at the root of your source code.
- Also delete the file "index.js" inside the folder "pages".

    ```sh
    # Start up your new Gatsby book
    gatsby develop
    ```

    Your book is now running at `http://localhost:8000`!






## Usage

### Theme options

| Key              | Default Value | Description                                              |
| ---------------- | ------------- | -------------------------------------------------------- |
| `basePath`       | `/`           | Root url for the theme                                   |
| `imagePath`      | `book/images` | Path to folder of images to turn into picture book pages |
| `audioPath`      | null          | Path to folder with a single audio file (optional)       |
| `infoLink`       | null          | Adds an info button to first and last page (optional)    |
| `infoLink.url`   | null          | Url to navigate to (external or internal)                |
| `infoLink.label` | `i`           | Label inside button                                      |
| `infoLink.title` | `info`        | Title for the a tag                                      |

The `imagePath` folder must contain at least _one_ image file. The book's pages will be sorted alphabetically by filename. We suggest using a naming schema similar to this "01.jpg", "02.jpg" ... "99.jpg".

#### Example Usage With Audiobook

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@olavea/gatsby-theme-picture-book`,
      options: {
        basePath: `/my-book`,
        imagePath: `book/images`,
        audioPath: `book/audio`,
        infoLink: {
          title: "Project on GitHub",
          url: `https://github.com/olavea/gatsby-theme-picture-book.git`,
        },
      },
    },
  ],
}
```

#### Additional configuration

In addition to the theme options, there are a handful of items you can customize via the `siteMetadata` object in your site's `gatsby-config.js`

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    // First page will have siteTile as page title,
    // the other pages follow this configuration <page#> | <siteTitle>.
    siteTitle: `Petra Rabbit`,
    // Used for SEO
    siteDescription: `Almost Beatrix Potter's Peter Rabbit, narrated by Ola (41) and Lillian (4.5 🦄)`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Twitter Handle
    author: `@OlaHolstVea`,
  },
}
```

### Shadowing

To change the look and feel of the theme shadow components found in `components/ui`. These have solely presentational logic, while the root components in `components` contain the more functional logic.

This theme has a persistent layout component `components/persistenLayout.js`. You will therefore not find a reference to a layout in any component. The `PersistentLayout` is wrapped around the whole site by [gatsby-plugin-layout](https://www.gatsbyjs.org/packages/gatsby-plugin-layout/).

Why do we do this? Its so the state of the audio element will persist through all pages of the book.

## [Storytime](#storytime)

### A Good Day In The Morning

One sunny morning Lillian (4.5 🦄) and I were reading Beatrix Potter's Ginger & Pickles together.
Lillian (4.5 🦄) is my daughter. Ginger is an orange and yellow striped cat who runs a shop with Pickles the terrier. Lillian (4.5 🦄) was drinking warmed oat milk, I was reading out loud and sipping coffee.

Lillian (4.5 🦄) said:
«I want to make my own book.»
«Yessss!!» I said with glee. «Let's build Ginger & Pickles, but with added PIRATES! Arrrh!»
«Do it NOW!» golden-haired Lillian (4.5 🦄) said.

### A Good Day At Work

After a reckless ride on her green bicycle, I leave Lillian (4.5 🦄) at kindergarten and start my workday by typing «Beatrix Potter» into google.

All of Beatrix Potter's precious picture books for children where THERE. Like a treasure trove. Content free from «this-content-needs-polishing-before-publishing-it» thoughts to distract me.

I started by firing up Scott Tolinski's top-notch tutorial [Pro Gatsby 2](https://www.leveluptutorials.com/tutorials/pro-gatsby-2).
Before I knew it, I had the Ginger & Pickles book deployed before I even remembered the poor pirates! Arrh!

### A Good Summer

Do not worry! Pirates were added, kids from the kindergarten contributed and I kept working on a Gatbsy starter to simplify creating books even more.

Take a look at [the books I am co-working on Lillian (4.5 🦄) and and her brave band of friends](https://olavea.carrd.co/)

When the Gasby Theme Jam came around, it was the perfect project for my time at the summer office!

And the rest as they say, is history (or a [tweet thread by Lillian's mom @raae](https://twitter.com/raae/status/1147430949598240769)).

<!-- AUTO-GENERATED-CONTENT:END -->
