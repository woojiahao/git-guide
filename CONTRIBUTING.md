# Contribution guide

To ask about the guide, feel free to message on Discord @Chill#4048 or create an issue and I will try to respond to it.

To contribute to the guide, fork this repository and make the necessary ammendments to the markdown files for each chapter. Then, create a pull request for the changes and tag @woojiahao for review.

## Self-hosting

To host the guide on GitHub Pages, the quickest way is by enabling it in the settings of GitHub. Set GitHub Pages to render from the `gh-pages` branch (refer [here](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)). Once this is done, GitHub Pages will take a while to upload your changes and it will soon be available at `https://<username>.github.io/git-guide`.

**Note*** it is possible to use a separate documentation generator for this but for simplicity sake, we will be using the default GitHub Pages template.

Update as of **01 August 2020** we are now using Gatsby.js to host our guide on github pages.  

You can find out more information on how to self-host the website [here.](./site/README.md)

## Exporting chapters as PDFs

To export each chapter, `pandoc` is used.

### Install `pandoc`

The documentation on `pandoc`'s site includes the installer link and instructions to install `pandoc`.

Documentation [here.](https://pandoc.org/installing.html)

### Preparing the document

To keep the document clean, each markdown document does not include front matter YAML. However, to configure the margins of the document and the title of the chapter, front matter YAML is required with `pandoc`.

So at the start of the chapter that you wish to export, add the following lines above everything else:

```markdown
---
title: "Chapter X - <Title>"
geometry: margin=1.5cm
output:
    rmarkdown::pdf_document:
        fig_caption: yes
        includes:
            in_header: figure-adjustment.tex
---

# Title
...
```

**Note*** the only line to change is the title of the document

### Export script

A simple export script has been included to use pandoc to configure the document. This script can be found in the root of the project folder as `export.sh`.

When you first use this script, change the permissions to allow the script to run.

```bash
chmod +x export.sh
```

Then, run the script, passing in the chapter's markdown file as the first argument and the PDF file name as the second.

**Note*** the script must be run within the chapter folder otherwise the images will not be rendered.

```bash
cd 01-setup/
bash ../export.sh README.md chapter-1.pdf
```

Once done, you should be able to view the changes and commit that new PDF.

### Cleaning up

After exporting the PDF, it is advised that the front matter YAML added is removed from the file.
