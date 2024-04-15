#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 <name>"
  exit 1
fi

capitalize_first_char() {
  local str="$1"
  local first_char=$(echo "${str:0:1}" | tr '[:lower:]' '[:upper:]')
  local rest=${str:1}
  echo "${first_char}${rest}"
}

NAME=$1
BASE_DIR="src"
CapitalizedName=$(capitalize_first_char "$NAME")

mkdir -p ${BASE_DIR}/{controllers,services,routes,repositories}/${CapitalizedName}



cat > ${BASE_DIR}/controllers/${CapitalizedName}/${NAME}Controller.js <<EOF
import authService from '../../services/${CapitalizedName}/${NAME}Service.js ';

async function get${CapitalizedName}(req, res) {
  return res.json('hello ${CapitalizedName}')
}



export default { get${CapitalizedName} };
EOF

cat > ${BASE_DIR}/services/${CapitalizedName}/${NAME}Service.js <<EOF
import prisma from '../../config/prismaClient.js';
async function create${CapitalizedName}() {

  return ;
}

async function read${CapitalizedName}() {

  return ;
}

async function delete${CapitalizedName}() {

  return ;
}

async function update${CapitalizedName}() {

  return ;
}
export default {
    create${CapitalizedName},
    read${CapitalizedName},
    delete${CapitalizedName},
    update${CapitalizedName}
};
EOF

cat > ${BASE_DIR}/routes/${CapitalizedName}/${NAME}Routes.js <<EOF
import express from 'express';
import ${NAME}Controller from '../../controllers/${CapitalizedName}/${NAME}Controller.js';

const router = express.Router();

router.get('/${NAME}', ${NAME}Controller.get${CapitalizedName});

export default router;
EOF


cat > ${BASE_DIR}/repositories/${CapitalizedName}/${NAME}Repositorie.js <<EOF
import prisma from '../../config/prismaClient.js';

export default {
    
};
EOF


echo "${NAME} route, controller, and service files have been created."
