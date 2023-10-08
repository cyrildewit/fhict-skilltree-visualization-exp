#!/bin/bash

function runScriptInDockerContainer {
    docker compose exec -it node "$@";
}

docker compose up -d --remove-orphans
