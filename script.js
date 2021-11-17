// function iniciaModal(modalID) {
//     const modal = document.getElementById(modalID);
//     if (modal) {
//         modal.classList.add('mostrar');
//         modal.addEventListener('click', (e) => {
//             if (e.target.id == modalID || e.target.classList == 'button') {
//                 modal.classList.remove('mostrar');
//             }
//         });
//     }
// };

// const logo = document.querySelector('.filter');
// logo.addEventListener('click', () => iniciaModal('modal-promocao'));



//=> Uma forma de abrir e fechar o modal
document.querySelector(".filter").addEventListener("click", toggleModal);

function toggleModal() {
  const modal = document.getElementById("modal-promocao");
  modal.classList.toggle("mostrar");
}
