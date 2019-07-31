<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  @olavea/gatsby-theme-picture-book
</h1>

## A Gatsby theme for building a book.

I love reading books. So the day it dawned on me that I could build a book with Gatsby was a GOOD day. I will try to pass some of the goodness of that day to you with this Gatsby Book Theme.

If you want to read how my daughter Lillian (4) gave me this book building idea see below.

[**Demo Website**](https://petra-kanini.netlify.com)

## Features

## -

-

## Installation

```sh
npm install @olavea/gatsby-theme-picture-book
```

### Install as a starter

This will generate a new book (with the folder name "book") that pre-configures the use of the theme including example content.

```sh
gatsby new book @olavea/gatsby-starter-picture-book-theme
```

## Usage

### Theme options

| Key         | Default Value | Description                                              |
| ----------- | ------------- | -------------------------------------------------------- |
| `basePath`  | `/`           | Root url for the theme                                   |
| `imagePath` | `book/images` | Path to folder of images to turn into picture book pages |
| `audioPath` | null          | Path to folder with a single audio file (optional)       |

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
    // Used as part of the page title template and as title for the first page.
    siteTitle: `Petra Kanini`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://petra-kanini.netlify.com`,
    // Used for SEO
    siteDescription: `Almost Peter Rabbit. Story and illustrations by Beatrix Potter, audio by Ola Vea (41) and Lillian Raae-Vea (4.5 🦄)`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Twitter Handle
    author: `Beatrix Potter (with some small changes by Lillian Raae-Vea (4.5 🦄)`,
  },
}
```

### Formats

Projects need the following frontmatter:

```md
---
client: "LekoArts"
title: "Theme"
cover: "./image.jpg"
date: "2019-06-10"
service: "Theme"
color: "#8e9d31"
---
```

Pages need the following frontmatter:

```md
---
title: "Name"
slug: "/name"
cover: "./name.jpg"
---
```

Let me tell you about the good day my daughter Lillian (4) gave me the idea to build a book with Gatsby.

## A Good Day In The Morning

One sunny morning Lillian (4) and I was reading Ginger & Pickles together.
Lillian (4) is my daughter. Ginger is an orange and yellow striped cat who runs a shop with Pickles the terrier. Lillian (4) was drinking warmed oat milk, I was reading out loud and sipping coffee.

Lillian said:
«I want to make my own book.»
«Yessss!!» I said with feeling. «Let’s build Ginger & Pickles, but with added PIRATES! Arrrh!»
«Do it NOW!» golden haired Lillian (4) said.

## A Good Day At Work

After a reckless ride on her green bicycle I leave Lillian at kindergarten and start my work day by typimg «Beatrix Potter» into google, she is the author of Ginger & Pickles.

## A Treausre Trove

All of Beatrix Potter’s precious picture books for children where THERE, treausre trovelike. Clean content undirtified by «this-content-needs-polishing» thoughts to disctract me. I got started by firing up Scott Tolinski’s top notch tutorial Pro Gatsby 2. I had our new Ginger & Pickles book deployed before i even rememberd the poor pirates! Arrh!
