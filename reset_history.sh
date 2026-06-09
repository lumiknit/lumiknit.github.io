#!/bin/bash
git co --orphan latest
git add -A
git commit -m "History reset"
git branch -D main
git branch -m main
git push -f origin main
