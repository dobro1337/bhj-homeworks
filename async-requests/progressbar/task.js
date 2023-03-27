let form = document.getElementById("form");
const progress = document.getElementById( 'progress' );
form.addEventListener('submit', event => { 
    let xhr = new XMLHttpRequest();
    let formData = new FormData(form);

    xhr.open("POST","https://students.netoservices.ru/nestjs-backend/upload",true);
    xhr.upload.onprogress = event => {
      progress.value = event.loaded / event.total;
    }
    xhr.onload = () => {
        if(xhr.status === 201) {
            alert(JSON.parse(xhr.responseText).message)
            console.log(xhr.statusText);
        }
        else {
            alert("ошибка " + xhr.error)
        }
        console.log(xhr.status);
    }
    xhr.send(formData);
    event.preventDefault();
})