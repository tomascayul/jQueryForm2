// esto es para asegurarnos de que se cargue completamente el HTML
$(document).ready(function () {

	$('#inputForm').on('submit',function(event){
		event.preventDefault();
	});
	
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
    users.push(user.name, user.email, user.city);

	console.log(users);

	});  




});
