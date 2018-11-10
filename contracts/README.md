Commands to build/deploy contracts:


docker exec eosio /opt/eosio/bin/cleos --url http://127.0.0.1:7777 --wallet-url http://127.0.0.1:5555 wallet unlock -n default --password PW5KZ7KoffGNHmB9mTTKURt7EUCTCrCL2jeD4Qp6zfQcXzPJ5h1Yt


eosio-cpp -o survey.wasm survey.cpp --abigen

#first deploy
docker exec eosio /opt/eosio/bin/cleos --url http://127.0.0.1:7777 --wallet-url http://127.0.0.1:5555 create account eosio survey EOS7HsTuCEVGpT2SZ2v7p2FEfb1crMi2UZhArA3Ywo7GLbkJwzyDi -p eosio@active

docker exec eosio /opt/eosio/bin/cleos --url http://127.0.0.1:7777 --wallet-url http://127.0.0.1:5555 set contract survey /Users/brianwentzloff/Dropbox/projects/eospace/EOSpace/contracts/survey -p survey@active






docker exec eosio /opt/eosio/bin/cleos --url http://127.0.0.1:7777 --wallet-url http://127.0.0.1:5555 set contract survey /Users/brianwentzloff/Dropbox/projects/eospace/EOSpace/contracts -p survey@active