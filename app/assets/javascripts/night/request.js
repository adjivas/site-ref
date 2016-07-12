$.ajax({
  type: "POST",
  url: https://interact.objectivemoon.io/api/v1/data/user_actions,
  data: {
    "client_id": "c_id",
    "client_secret": "c_secret",
    "data": {
        "user_token": "user_tok",
        "application": [2]
    }
},
  success: function(data){
    
    
  },
  dataType: json
  error : {alert(data);}
});