function get()
{
	var myForm=document.form1;
	myForm.panel_textarea_focus.focus();
	myForm.panel_textarea_focus.innerHTML=myForm.panel_textarea_focus.innerHTML;
}
function getSecond()
{
	var myForm=document.form2;
	myForm.panel_textarea_focus.focus();
	myForm.panel_textarea_focus.innerHTML=myForm.panel_textarea_focus.innerHTML;
}
function getThird()
{
	var myForm=document.form3;
	myForm.panel_textarea_focus.focus();
	myForm.panel_textarea_focus.innerHTML=myForm.panel_textarea_focus.innerHTML;
}
function getFileName(){
	var myForm=document.panel_form;
	myForm.usrname.value=myForm.input_file.value;
	myForm.input_file.value="";
	var myRegExp=/\b\\\b/i;
	var fileName=myForm.usrname.value.search(myRegExp)+1;
	myForm.usrname.value=myForm.usrname.value.substr(fileName);
}