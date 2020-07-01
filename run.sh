  
#!/bin/bash
WHITE='\033[1;39m'
RED='\033[1;31m'
GREEN='\033[1;32m'
DEFAULT='\033[1;39m'
YELLOW='\033[1;93m'
MAGENTA='\033[1;95m'

trap "exit" INT TERM ERR
trap "kill 0" EXIT


printf "${GREEN} STARTING MICROSERVICE ${DEFAULT}";
npm run start:dev --prefix nestjs.micro.server &>/dev/null &
echo ''

printf "${GREEN} STARTING CLIENT ${DEFAULT}";
npm run start:dev --prefix nestjs.micro.client &>/dev/null &
echo ''

echo "----------------------------------------------------------------"

while [ "$cmd" != "Yes" ]; do
  echo "${GREEN}App is running, Write CTRL+C or EXIT to exit or write a command  ${DEFAULT}"
  echo "${GREEN}Type ${MAGENTA}help for help${DEFAULT}"

  printf "${YELLOW}@nestjs.micro/$>"
  printf "${GREEN}"
  read cmd
  if [ "$cmd" == "help" ]; then
      curl http://localhost:6000/help
      echo
  else
      ( eval $cmd ) || 'Command throws error'
  fi
  echo ''
done

wait