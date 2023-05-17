let inputMedia = document.querySelector("#inputMedia");
let btVerificaMedia = document.querySelector("#btVerificaMedia");

function VerificaMedia(){
    let media = Number(inputMedia.value);

    if(media > 60){
        alert('O aluno foi APROVADO');
    }else{

    if(media <= 60)
        alert('O aluno devara fazer SUB');
    }

}

btVerificaMedia.onclick = function(){
    VerificaMedia();
}
