#!/bin/bash
vue inspect > output/inspect.js && echo 'ok' || echo 'error'

# inspect the vue.config.js
# detail: https://cli.vuejs.org/zh/guide/webpack.html
