#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>
using namespace eosio;
using namespace std;

class [[eosio::contract]] survey : public eosio::contract 
{
  public:
    using contract::contract;

    survey(name receiver, name code,  datastream<const char*> ds): contract(receiver, code, ds) {}

    [[eosio::action]]
    void upsert(name user, std::string question) {
      require_auth( user );
      poll_index questions(_code, _code.value);

        questions.emplace(user, [&]( auto& row ) {
          row.key = questions.available_primary_key();
          row.accountname = user;
          row.question = question;
        });
      
    }

    [[eosio::action]]
    void somethingelse() {}


  private:
    struct [[eosio::table]] poll {
      uint64_t key;
      name accountname;
      std::string question;

      uint64_t primary_key() const { return key;}
    };
  
    typedef eosio::multi_index<"poll"_n, poll> poll_index;
   
};
EOSIO_DISPATCH( survey, (upsert))