<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  @olavea/gatsby-theme-picture-book
</h1>

I love reading books. So the day it dawned on me that I could build a book with Gatsby was a GOOD day. By open sourcing this theme I hope to pass some of the goodness on to you.

[Lean how my daughter](#storytime) Lillian (4.5 🦄) gave me this book building idea by scrolling to the end.

Check out [Petra Rabbit](https://petra-rabbit.netlify.com). It's almost Beatrix Potter's Peter Rabbit, narrated by Lillian and I.

-- <cite>Ola Vea (#codenewbie 41)<cite>

## Create a Do-It-Yourself picture book together with a child you know

- Automagically generate a picture book from image files
- Touch swipe to flip page
- Optional audio track

Ola will continue working on this theme while learning to code. New feature will be added sporadically. If you are #codenewbie as well you are welcome to join, @raae will help out manage the repo.

[DEMO Site](https://petra-rabbit.netlify.com)

## Installation

```sh
npm install @olavea/gatsby-theme-picture-book
```

### Install as a starter

A starter has not yet been created. Hoping for a solution to [this issue](https://github.com/gatsbyjs/gatsby/issues/16135).

But do have a look in `/demo` for a full example.

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

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@olavea/gatsby-theme-picture-book`,
      options: {
        basePath: `/my-book`,
        imagePath: `book/pics`,
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

One sunny morning Lillian and I were reading Beatrix Potter's Ginger & Pickles together.
Lillian (4.5 🦄) is my daughter. Ginger is an orange and yellow striped cat who runs a shop with Pickles the terrier. Lillian was drinking warmed oat milk, I was reading out loud and sipping coffee.

Lillian said:
«I want to make my own book.»
«Yessss!!» I said with glee. «Let's build Ginger & Pickles, but with added PIRATES! Arrrh!»
«Do it NOW!» golden-haired Lillian said.

### A Good Day At Work

After a reckless ride on her green bicycle, I leave Lillian at kindergarten and start my workday by typing «Beatrix Potter» into google.

All of Beatrix Potter's precious picture books for children where THERE. Like a treasure trove. Content free from «this-content-needs-polishing-before-publishing-it» thoughts to distract me.

I started by firing up Scott Tolinski's top-notch tutorial [Pro Gatsby 2](https://www.leveluptutorials.com/tutorials/pro-gatsby-2).
Before I knew it, I had the Ginger & Pickles book deployed before I even remembered the poor pirates! Arrh!

### A Good Summer

Do not worry! Pirates were added, kids from the kindergarten contributed and I kept working on a Gatbsy starter to simplify creating books even more.

When the Gasby Theme Jam came around, it was the perfect project for my time at the summer office!

And the rest as they say, is history (or a [tweet thread by Lillian's mom @raae](https://twitter.com/raae/status/1147430949598240769)).