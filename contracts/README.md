Commands to build/deploy contracts:


cleos wallet unlock -n default --password PW5KXjz1Zzf8SkBsxXjwVJYAcoTbx8FYiV52kV1WaWhap6Ls5L6J1


eosio-cpp -o survey.wasm survey.cpp --abigen

#first deploy
cleos create account eosio survey EOS7wQYZRYFioPmyzdD9mGTsGHfudSE4bTidhP5oroZ9v6FaSXPX4 -p eosio@active

cleos set contract survey /Users/brianwentzloff/Dropbox/projects/eospace/EOSpace/contracts/survey -p survey@active

#cleos push action survey csurvey [] -p survey

cleos push action survey upsert '["alice", "what is love"]' -p alice@active




docker exec eosio /opt/eosio/bin/cleos --url http://127.0.0.1:7777 --wallet-url http://127.0.0.1:5555 set contract survey /Users/brianwentzloff/Dropbox/projects/eospace/EOSpace/contracts -p survey@active