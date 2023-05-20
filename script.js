/* CONFIGURAÇÕES*/

const URL_API = "https://3d39e0fe-47ea-498c-bd8c-cef3f519d18f.mock.pstmn.io"


let resp= fetch(URL_API+"veiculos")
.then((resultado)=>resultado.json())
.then((resultado)=>{
    comsole.log(resultado);
});