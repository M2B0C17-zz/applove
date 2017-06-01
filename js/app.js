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

// Modal 2

(function mDos(){
	var boxes2 = Array.from(document.getElementsByClassName("col-4 foto")); //revisar si tira error
	var modal2 = document.getElementById("modalDosBox");
	var bodyModal2, close, img;
	boxes2.forEach(function(box2){
		box2.addEventListener("click", function(){
			modal2.innerHTML = "";
			bodyModal2 = document.createElement("div");
			bodyModal2.classList.add("modal-body2");
			bodyModal2.innerHTML = box2.innerHTML;
			modal2.appendChild(bodyModal2);
			modal2.classList.remove("hide2");
			close = document.createElement("div");
			close.classList.add("close");
			img = document.createElement("img");
			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
			close.appendChild(img);
			modal2.appendChild(close);
			close.addEventListener("click",function(){
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
