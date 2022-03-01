const mensajes=document.getElementById('mensajes');
const msgForm=document.getElementById('msgForm');
const graphic = document.getElementById('#myChart');




const socket=io('http://localhost:3000');
let newArray = new Array();

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

const agregarMensaje = (mensaje) => {
const html=`<div>${mensaje}\n</div>`;
mensajes.innerHTML += html;
}
//aqui intento de mandar datos
socket.on('temperature', data =>{
  console.log(data);
  for(let value in data){
    newArray.push(parseInt(value));
  }
  console.log(newArray);
})

export const x = () =>{
  return newArray;
}