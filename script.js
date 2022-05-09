let pruductPage;
let clickBtns;

//Check elements
if (document.querySelector('.products.list.items.product-items')) {
	pruductPage = document.querySelector('.products.list.items.product-items');
}
if (pruductPage.querySelectorAll('.product-item-info')) {
	clickBtns = pruductPage.querySelectorAll('.product-item-info');
}

//Add buttons (prev, next)
for (let i of clickBtns) {

	//Add atribute to selected image
	let att;

	if (i.querySelector('.product-image-photo')) {
		att = i.querySelector('.product-image-photo');
		att.setAttribute('product-image-photo', 0);
	}

	//Get product`s id
	let productId = i.getAttribute('id');

	// //Create buttons elements
	let prev = document.createElement('span');
	prev.classList.add('prev');
	prev.textContent = 'prev';
	prev.setAttribute('id', productId)

	let next = document.createElement('span');
	next.classList.add('next');
	next.textContent = 'next';
	next.setAttribute('id', productId)

	i.appendChild(prev);
	i.appendChild(next);
}

pruductPage.onclick = clicked;

function clicked(event) {
	let clickedBtn = event.target;

	//find right id of btn to change it`s image
	let slectedId = clickedBtn.getAttribute('id');
	let changeImgIndex;

	if (document.querySelectorAll('.product-item-info')) {
		changeImgIndex = document.querySelectorAll('.product-item-info');
	}

	if (clickedBtn.classList.contains('next')) {

		for (let i of changeImgIndex) {
			if (i.getAttribute('id') == slectedId) {

				//Find div to manipulate it
				let imgDiv;
				let number;

				if (i.querySelector('.product-image-photo')) {
					imgDiv = i.querySelector('.product-image-photo');
				}
				if (imgDiv.getAttribute('product-image-photo')) {
					number = imgDiv.getAttribute('product-image-photo');
				}

				//Images quantity
				let imgQuantity

				if (i.querySelectorAll('.gallery-placeholder__image')) {
					imgQuantity = i.querySelectorAll('.gallery-placeholder__image');
				}

				//Button works untill max length
				if (number < imgQuantity.length - 1) {
					number++;
					imgDiv.setAttribute('product-image-photo', number);

					//Get right image src
					let newSrc = imgQuantity[number].getAttribute('src');

					//Set right image src
					imgDiv.setAttribute('src', newSrc);
				}
			}
		}
	}

	else if (clickedBtn.classList.contains('prev')) {

		for (let i of changeImgIndex) {
			if (i.getAttribute('id') == slectedId) {

				//Find div to manipulate it
				let imgDiv;
				let number;

				if (i.querySelector('.product-image-photo')) {
					imgDiv = i.querySelector('.product-image-photo');
				}
				if (imgDiv.getAttribute('product-image-photo')) {
					number = imgDiv.getAttribute('product-image-photo');
				}

				//Images quantity
				let imgQuantity;

				if (i.querySelectorAll('.gallery-placeholder__image')) {
					imgQuantity = i.querySelectorAll('.gallery-placeholder__image');
				}

				//Button works untill 0
				if (number > 0) {
					number--;
					imgDiv.setAttribute('product-image-photo', number);

					//Get right image src				
					let newSrc = imgQuantity[number].getAttribute('src');

					//Set right image src
					imgDiv.setAttribute('src', newSrc);
				}
			}
		}
	}
}