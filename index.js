var web3; 

async function Connect(){
    await window.web3.currentProvider.enable(); 
    web3 = new Web3(window.web3.currentProvider);
    if (web3){
        document.location.href="main_page/main_page.html"
    } else{
        
    }
}