// esto es para asegurarnos de que se cargue completamente el HTML
$(document).ready(function () {

	
	// arreglo donde se guardaran los datos del formulario
	var users = [];

	// Objeto usuario
	var user = {
		name: '',
		email: '',
		ciudad:'',
	};

	// escuchar el evento change y guardar el valor ingresado en el form
	$('#name').on('change', function () {
		user.name = $(this).val();
	});

	$('#email').on('change', function () {
		user.email = $(this).val();
	});

	$('#city').on('change', function () {
		user.city = $(this).val();
	});

	$('#btnEnviar').on('click', function () {

		// rellenamos el array users
		var us = JSON.parse(JSON.stringify(user));
		users.push(us);
	    // users.push(user.name, user.email, user.city);

		console.log(users);

	});  

	
 /*   $('#btnEnviar').on('click', function () {

	$('#inputForm').on('submit',function(event){
		event.preventDefault();
		user.email = $('#email').val();
		user.name = $('#name').val();
		user.city = $('#city').val();
		var us = JSON.parse(JSON.stringify(user));
		users.push(us);
		
		});

	});*/
	// console.log(users); 



});
