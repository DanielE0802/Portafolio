$download = document.getElementById('downloadCV')
let enviar;
let padre;
$download.addEventListener('click', function () {

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Descargando CV'
      })

})

console.log(enviar)

Swal.bindClickHandler()

Swal.mixin({
    toast: true,
}).bindClickHandler('data-swal-toast-template')