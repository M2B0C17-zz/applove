/*
 * Archivo principal de funcionalidad de JS
 */
(function main(){
	var boxes = Array.from(document.getElementsByClassName("box-services"));
	var modal = document.getElementById("box-services-modal");
	var bodyModal, close, img;
	boxes.forEach(function(box){
		box.addEventListener("click", function(){
			modal.innerHTML = "";
			bodyModal = document.createElement("div");
			bodyModal.classList.add("modal-body");
			bodyModal.innerHTML = box.innerHTML;
			modal.appendChild(bodyModal);
			modal.classList.remove("hide");
			close = document.createElement("div");
			close.classList.add("close");
			img = document.createElement("img");
			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
			close.appendChild(img);
			modal.appendChild(close);
			close.addEventListener("click",function(){
				modal.classList.add("hide");
			});
		});
	});
})();

// Modal 2 seccion 3

(function modelDos(){
	var cajas2 = Array.from(document.getElementsByClassName("col-4 foto")); // recorremos el arreglo de los div que tienen la class col-4 foto
	var modal2 = document.getElementById("modalDosBox"); // conectamos con el html
	var cuerpitoModal2, close, img;
	cajas2.forEach(function(box2){ // recorremos los elementos nuevos que creamos abajo
		box2.addEventListener("click", function(){ // agregamos el evento de cuando se presiona con el mouse sobre el elemento
			modal2.innerHTML = "";
			cuerpitoModal2 = document.createElement("div"); // creamos un div + una class
			cuerpitoModal2.classList.add("modal-cuerpito2"); // esto lo usamos despues en el CSS
			cuerpitoModal2.innerHTML = box2.innerHTML;
			modal2.appendChild(cuerpitoModal2);
			modal2.classList.remove("hide2");
			close = document.createElement("div"); // creamos un div + class de para cerrar
			close.classList.add("close"); // esto lo usamos en CSS
			img = document.createElement("img"); // creamos un etiqueta img para agregar el icono de la X
			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png"); // url del icono a usar
			close.appendChild(img);
			modal2.appendChild(close);
			close.addEventListener("click",function(){ // evento que decimos que al posecionarse sobre el elemento X cerrar, en este caso model 2
				modal2.classList.add("hide2");
			});
		});
	});
})();

/*
funcion autoinvocada
(function miAlert(){
	....
})()
Es equivalente a:
function miAlert(){
	...
};
miAlert(); */
