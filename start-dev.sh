#!/bin/bash

function runScriptInDockerContainer {
    docker compose exec -it node "$@";
}

docker compose up -d --remove-orphans

runScriptInDockerContainer pnpm install
runScriptInDockerContainer pnpm run dev