CKEDITOR.replace("ckeditor");

//
document.getElementById("my-form").addEventListener("submit", (event) => {
  event.preventDefault();
  function getValue() {
    // Get the CKEditor instance
    var editor = CKEDITOR.instances.ckeditor;

    // Get the value of the editor
    var value = editor.getData();

    // Log the value
    if (value) {
      console.log(value);
    } else {
      alert("Editor is empty");
    }
  }
  getValue();
});
