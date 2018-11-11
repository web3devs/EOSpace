Commands to build/deploy contracts:


docker run --name eosio \
  --publish 7777:7777 \
  --publish 127.0.0.1:5555:5555 \
  --volume /Users/brianwentzloff/Dropbox/projects/eospace/EOSpace/contracts:/Users/brianwentzloff/Dropbox/projects/eospace/EOSpace/contracts \
  --detach \
  eosio/eos:v1.4.2 \
  /bin/bash -c \
  "keosd --http-server-address=0.0.0.0:5555 & exec nodeos -e -p eosio --plugin eosio::producer_plugin --plugin eosio::chain_api_plugin --plugin eosio::history_plugin --plugin eosio::history_api_plugin --plugin eosio::http_plugin -d /mnt/dev/data --config-dir /mnt/dev/config --http-server-address=0.0.0.0:7777 --access-control-allow-origin=* --contracts-console --http-validate-host=false --filter-on='*' --verbose-http-errors = true"


cleos wallet unlock -n default --password PW5Kk4VuTidd7uVik4GzRqXjqrmmeBt4dKhhjRUgFwo1FH9qYB6RZ

cleos create account eosio bob EOS6cyH4iAjEB2cJGaVRYfroCZCsDx74FsLLg5Q8a1sYh1uZAvKFa 
cleos create account eosio alice EOS6cyH4iAjEB2cJGaVRYfroCZCsDx74FsLLg5Q8a1sYh1uZAvKFa



eosio-cpp -o survey.wasm survey.cpp --abigen

#first deploy
cleos create account eosio survey EOS6cyH4iAjEB2cJGaVRYfroCZCsDx74FsLLg5Q8a1sYh1uZAvKFa -p eosio@active

cleos set contract survey /Users/brianwentzloff/Dropbox/projects/eospace/EOSpace/contracts/survey -p survey@active

#cleos push action survey csurvey [] -p survey

cleos push action survey upsert '["alice", "alice", "what is love", "this is text"]' -p alice@active
cleos push action survey upsert '["bob", "what is hate"]' -p bob@active
cleos push action survey droptable [] -p alice@active


cleos push action survey upsert '["alice", "alice", "Should we move the monthly meetings to a Friday instead of Thursdays?", "yesNoAction"]' -p alice@active
cleos push action survey upsert '["alice", "alice", "What blockchain technologies would you like to learn more about?", "multipleChoice"]' -p alice@active
cleos push action survey upsert '["alice", "alice", "Would you come a 10 year bitcoin genesis block anniversary party?", "yesNoAction"]' -p alice@active

cleos get table survey survey poll
cleos get table survey survey poll --lower "alice" --upper "alice" --key "accountname"





docker exec eosio /opt/eosio/bin/cleos --url http://127.0.0.1:7777 --wallet-url http://127.0.0.1:5555 set contract survey /Users/brianwentzloff/Dropbox/projects/eospace/EOSpace/contracts -p survey@active