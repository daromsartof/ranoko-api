#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 <feat or fix or refact>"
  exit 1
fi
if [ -z "$2" ]; then
  echo "Usage: $0 $1 <branch name>"
  exit 1
fi

action=$1
name=$2

case $action in
    "refact")
        new_branch="refactor/$name"
        git checkout -b "$new_branch" && git push --set-upstream origin "$new_branch"
        ;;
    "fix")
        new_branch="fix/$name"
        git checkout -b "$new_branch" && git push --set-upstream origin "$new_branch"
        ;;
    *)
        new_branch="feature/$name"
        git checkout -b "$new_branch" && git push --set-upstream origin "$new_branch"
        ;;
esac



