const mensajes=document.getElementById('mensajes');
const msgForm=document.getElementById('msgForm');
const datosT = document.getElementById('datosT');
const socket=io('http://localhost:3000');
socket.on('message',data=>{
    console.log(data);
  //  alert(data);
    agregarMensaje(data);
})

msgForm.addEventListener('submit',e=>{
    e.preventDefault();
    socket.emit('chatmsg',msgForm.msg.value);
    msgForm.msg.value='';
})
function agregarMensaje(mensaje){
const html=`<div>${mensaje}\n</div>`;
mensajes.innerHTML += html;
}