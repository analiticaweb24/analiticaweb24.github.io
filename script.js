document.addEventListener('DOMContentLoaded', function() {
    const loginLink = document.getElementById('loginLink');
    const loginSection = document.getElementById('loginSection');
    const userDisplay = document.getElementById('userDisplay');
    const loginForm = document.getElementById('loginForm');
    const cartButton = document.getElementById('cartButton');
    const bookModals = document.querySelectorAll('.book img');
    const cartModal = document.getElementById('cartModal');
    const checkoutButton = document.getElementById('checkoutButton');
    const cartItems = document.getElementById('cartItems');
    const bookModal = document.getElementById('bookModal');
    const addToCartButton = document.getElementById('addToCart');
    const closeButton = document.querySelectorAll('.close');

    // Mostrar sección de inicio de sesión al hacer clic en el enlace de inicio de sesión
    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginSection.classList.remove('hidden');
        loginLink.style.display = 'none';
    });

    // Evento de envío del formulario de inicio de sesión
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Aquí deberías agregar la lógica para verificar las credenciales del usuario
        // Por ahora, simplemente mostramos el nombre de usuario en el encabezado
        userDisplay.textContent = `¡Bienvenido, ${username}!`;
        loginSection.classList.add('hidden');
    });

    // Mostrar modal del carrito al hacer clic en el botón de carrito
    cartButton.addEventListener('click', function() {
        cartModal.style.display = 'block';
    });

    // Evento de cerrar el modal del carrito
    closeButton.forEach(function(button) {
        button.addEventListener('click', function() {
            cartModal.style.display = 'none';
            bookModal.style.display = 'none';
        });
    });

    // Mostrar modal del libro correspondiente al hacer clic en su imagen
    bookModals.forEach(function(modal) {
        modal.addEventListener('click', function() {
            const title = modal.getAttribute('data-title');
            const description = modal.getAttribute('data-description');
            document.getElementById('bookTitle').textContent = title;
            document.getElementById('bookDescription').textContent = description;
            bookModal.style.display = 'block';
        });
    });

    // Agregar artículo al carrito al hacer clic en el botón correspondiente en el modal del libro
    addToCartButton.addEventListener('click', function() {
        const title = document.getElementById('bookTitle').textContent;
        const li = document.createElement('li');
        li.textContent = title;
        cartItems.appendChild(li);
        bookModal.style.display = 'none';
    });

    // Proceder con el pago al hacer clic en el botón "Pagar"
    checkoutButton.addEventListener('click', function() {
        alert('Gracias por su compra.');
        // Aquí deberías agregar la lógica para marcar los artículos como comprados
        // Esto podría incluir eliminar los elementos del carrito o moverlos a una lista de compras realizadas
        cartItems.innerHTML = ''; // Limpiamos el carrito después del pago (simulado)
        cartModal.style.display = 'none';
    });
});
