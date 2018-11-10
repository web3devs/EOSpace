#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>
using namespace eosio;
class survey : public eosio::contract 
{
  public:
    using contract::contract;
/// @abi action
    void csurvey() 
    {
      print("your call to csurvey");
    }
/// @abi action
    void add() 
    {
      print("your call to add");
    }
/// @abi action
    void result()
    {
      print("your call to result");
    }
};
EOSIO_ABI( survey, (csurvey) (add) (result) )