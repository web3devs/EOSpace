#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>
using namespace eosio;
class survey : public eosio::contract 
{
  public:
    using contract::contract;

    [[eosio::action]]
    void csurvey() 
    {
      print("your call to csurvey");
    }

    [[eosio::action]]
    void add() 
    {
      print("your call to add");
    }

    [[eosio::action]]
    void result()
    {
      print("your call to result");
    }
};
EOSIO_DISPATCH( survey, (csurvey) (add) (result) )