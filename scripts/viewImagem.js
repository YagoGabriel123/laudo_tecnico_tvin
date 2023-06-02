function displayImagePreview(inputId, previewId) {
    const fileInput = document.getElementById(inputId);
    const filePreview = document.getElementById(previewId);
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const image = document.createElement('img');
        image.src = e.target.result;
        filePreview.innerHTML = '';
        filePreview.appendChild(image);
        leLabel.style.display = 'none'; // Esconde o texto "Selecionar Imagem"
      }

      reader.readAsDataURL(file);
    } else {
      filePreview.innerHTML = '';
      fileLabel.style.display = 'block'; // Mostra o texto "Selecionar Imagem" novamente
    }
  }