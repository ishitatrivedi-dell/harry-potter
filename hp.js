function saveCode(){
    const code = document.getElementById('form').value 
    localStorage.setItem('codeSnippet', code );
    alert('form submitted successfully');
}

