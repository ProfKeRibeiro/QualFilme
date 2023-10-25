//btn-start
document.querySelector('#btn-start').addEventListener('click', function(){
    //local storage - armazenar nickname
    localStorage.removeItem('nick');
    localStorage.removeItem('total-pts');
 

    var nickname = document.getElementById('nickname').value;
    localStorage.setItem('nick', nickname);
    var apelidos = JSON.parse(localStorage.getItem('apelidos')) || [];
    apelidos.push(nickname);
    localStorage.setItem('apelidos', JSON.stringify(apelidos));

    //jogar
    if (nickname == ''){
        alert('Insira seu NickName para continuar');
    }else{
        window.location.href='./main.html';
        document.getElementById('nickname').value = '';
    }
});

