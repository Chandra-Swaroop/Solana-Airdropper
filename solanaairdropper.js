document.addEventListener('DOMContentLoaded',  function() {
    var form = document.getElementById('myForm');
    form.addEventListener('submit', async function(event){
        event.preventDefault();

        var walletaddress = document.getElementById('address').value;
        // console.log(walletaddress)
        try{
       let response = await axios({
            method: 'post',
            url: 'https://api.devnet.solana.com',
            data: {
                "jsonrpc": "2.0", "id": 1,
                "method": "requestAirdrop",
                "params": [
                    `${walletaddress}`,
                    1000
                  ]
            }
          });
        if(response.status==200){
          alert("airdrop sent successfully");
        }
        }
        catch(error){
          console.log(error);
          alert("Cannot send airdrop too many requests")
        }
      
         
       
        
        
    })

})