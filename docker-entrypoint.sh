#!/bin/sh

# Work directory
dir="/apps/v4p-alertbot"

cd ${dir} && npm install pm2 -g

# Install app dependencies
cd ${dir} && npm install
echo "Hello from entrypoint"
echo $NODE_ENV
# Run application
cd ${dir} && NODE_ENV=$NODE_ENV  pm2 start app/app.js --name v4p-alertbot --watch --ignore-watch="node_modules app/userfiles/* logs/*" --no-daemon -o logs/v4p-alertbot.out.log -e logs/v4p-alertbot.err.log


# NODE_ENV=dev  pm2 start app/api.js --name vet4pet-api --watch --ignore-watch="node_modules app/userfiles/* logs/*" --no-daemon -o logs/vet4pet-api.out.log -e logs/vet4pet-api.err.log