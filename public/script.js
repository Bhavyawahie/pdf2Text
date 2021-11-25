const inputFile = document.getElementById('inputFile')
const uploadButton = document.getElementById('uploadButton')
const resultText = document.getElementById('resultText')
const errorMessage = document.getElementById('errorMessage')

uploadButton.addEventListener('click', async () => {
  errorMessage.innerHTML = ""
  const formData = new FormData()
  formData.append('uploadedPdfFile', inputFile.files[0])
  const response = await fetch('/extract-text', {
    method: 'post',
    body: formData
  })
  const parsedTextResponse = await response.text()
  if(parsedTextResponse === 'file is required!'){
    errorMessage.innerHTML = '*' + parsedTextResponse
  }
  else {
    resultText.value = parsedTextResponse
  }
})