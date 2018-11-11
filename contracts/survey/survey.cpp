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
      auto iterator = questions.find(user.value);
      if( iterator == questions.end() )
      {
        questions.emplace(user, [&]( auto& row ) {
          row.key = user;
          row.question = question;
        });
      }
      else {
        std::string changes;
        questions.modify(iterator, user, [&]( auto& row ) {
          row.key = user;
          row.question = question;
        });
      }
    }


  private:
    struct [[eosio::table]] poll {
      name key;
      std::string question;

      uint64_t primary_key() const { return key.value;}
    };
  
    typedef eosio::multi_index<"poll"_n, poll> poll_index;
   
};
EOSIO_DISPATCH( survey, (upsert))