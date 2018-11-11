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
    void upsert(name user, std::string accountname, std::string question,std::string actionName) {

      polls_index questions(_code, _code.value);

        questions.emplace(user, [&]( auto& row ) {
          row.key = questions.available_primary_key();
          row.accountname = accountname;
          row.question = question;
          row.actionName = actionName;
        });
      
    }

    [[eosio::action]]
    void droppollres(){
      pollres_index questions(_code, _code.value); // code, scope
      for(auto itr = questions.begin(); itr != questions.end();) {
        itr = questions.erase(itr);
      }
    }

    [[eosio::action]]
    void addpollres(name user, std::string question,std::string actionName, std::string result1,std::string result2) {

      pollres_index questions(_code, _code.value);

        questions.emplace(user, [&]( auto& row ) {
          row.key = questions.available_primary_key();
          row.question = question;
          row.actionName = actionName;
          row.result1 = result1;
          row.result2 = result2;
        });
      
    }

    [[eosio::action]]
    void addvote(name user, std::string vote, std::string data) {
      uservote_index questions(_code, _code.value);

      questions.emplace(user, [&]( auto& row){
        row.user = user;
        row.vote = vote;
        row.data = data;
      });
    }


  private:
    
    struct [[eosio::table]] pollItem {
      uint64_t key;
      std::string accountname;
      std::string question;
      std::string actionName;

      uint64_t primary_key() const { return key;}
      std::string by_name() const { return accountname;}
    };

    typedef eosio::multi_index<"pollitems"_n, pollItem> polls_index;

    struct [[eosio::table]] pollResult {
      uint64_t key;
      std::string question;
      std::string actionName;
      std::string result1;
      std::string result2;

      uint64_t primary_key() const { return key;}
    };

    typedef eosio::multi_index<"pollresults"_n, pollResult> pollres_index;

    struct [[eosio::table]] userVote {
      name user;
      std::string vote;
      std::string data;

      uint64_t primary_key() const { return user.value;}
    };

    typedef eosio::multi_index<"uservotes"_n, userVote> uservote_index;



   
};
EOSIO_DISPATCH( survey, (upsert)(droppollres)(addpollres)(addvote))