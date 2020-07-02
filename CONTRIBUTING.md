# Contribution guide

To ask about the guide, feel free to message on Discord @Chill#4048 or create an issue and I will try to respond to it.

To contribute to the guide, fork this repository and make the necessary ammendments to the markdown files for each chapter. Then, create a pull request for the changes and tag @woojiahao for review. 

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
title: "Chapter X - <Title>
geometry: margin=1.5cm
---

# Title
...
```

### Export script

A simple export script has been included to use pandoc to configure the document. This script can be found in the root of the project folder as `export.sh`.

When you first use this script, change the permissions to allow the script to run.

```bash
chmod +x export.sh
```

Then, run the script, passing in the chapter's markdown file as the first argument and the PDF file name as the second.

```bash
bash ./export.sh 01-setup/README.md chapter-1.pdf
```

Once done, you should be able to view the changes and commit that new PDF.
