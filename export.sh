#!/usr/bin/bash

TARGET=$([[ -z "$1" ]] && echo 'README.md' || echo "$1")
DESTINATION=$([[ -z "$2" ]] && echo 'README.pdf' || echo "$2")

echo "Exporting $TARGET to $DESTINATION"

if [[ ! -f "float-adjustment.tex" ]]; then
  echo '\\usepackage{float}' > float-adjustment.tex
  echo '\\floatplacement{figure}{H}' >> float-adjustment.tex
fi

pandoc $TARGET --toc -V linkcolor:blue -o $DESTINATION

rm float-adjustment.tex
