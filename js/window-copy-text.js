/*
<form name="it">
<div align="center">
<input onclick="copyit(this.form.select1)" type="button" value="Press to copy the highlighted text" name="btnCopy">
<p>
<textarea name="select1" rows="4" cols="45"></textarea>
</div>
</form>
*/

function copyit(theField) {
	var selectedText = document.selection;
	if (selectedText.type == 'Text') {
		var newRange = selectedText.createRange();
		theField.focus();
		theField.value = newRange.text;
	} else {
		alert('select a text in the page and then press this button');
	}
}