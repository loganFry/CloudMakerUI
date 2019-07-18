#!/bin/bash
read -p "Docker username: " user
read -p "Docker password: " -s pass
echo ""
read -p "Repo name: " repo
read -p "Tag for current build: " tag
docker login --username=$user --password=$pass
docker build -t $user/$repo:$tag .
docker push $user/$repo:$tag
