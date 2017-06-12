import axios from 'axios';

const getSTBInfo = (state = [], action) => {
  console.log("state2", state)
    console.log("action2", action)
    console.log("action2 type", action.type)
  switch (action.type) {
    case '@@redux/INIT':
        var th = this;
var res="aaa";
        axios.get("http://127.0.0.1:3001/api/enigma-get-phases" , {
            timeout: 5000
        })
            .then(function(result,res) {
                console.log("http://127.0.0.1:3001", result.data.phases[0])
                axios.get("http://127.0.0.1:3001" + result.data.phases[0].url  , {
                    timeout: 5000
                })
                    .then(function(result2, res) {
                      res=result2.data.payload;
                        console.log("result2.data.payload", result2.data.payload, Object.prototype.toString.call(result2.data.payload))
                        console.log("result2.data.payload.e2servicelist", result2.data.payload.e2servicelist, Object.prototype.toString.call(result2.data.payload.e2servicelist))
                        console.log("result2.data.payload.e2servicelist.e2service", result2.data.payload.e2servicelist.e2service, Object.prototype.toString.call(result2.data.payload.e2servicelist.e2service))
                        console.log("result2.data.payload", result2.data, Object.prototype.toString.call(result2.data))
                        console.log("res", res)
                    });
            })
        console.log("res", res)
      return res
    default:
      return state
  }
}

export default getSTBInfo
