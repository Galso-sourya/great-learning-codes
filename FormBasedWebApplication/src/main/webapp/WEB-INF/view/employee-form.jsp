<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<!-- ctrl+shift+f for formatting -->
	<form:form action="processForm" modelAttribute="employeeModel">
		<!-- action of the form means it will redirect to the url after submission -->
		<!-- model attribute is nothing but the name of the model -->
First Name:<form:input path="firstName" />
		<br>
Last Name:<form:input path="lastName" />
		<!-- do not give space here -->
		<br>
Department:
HR<form:radiobutton path="department" value="HR" />
IT<form:radiobutton path="department" value="IT" />
		<br>
Technologies:
Excel<form:checkbox path="technologies" value="Excel" />
Java<form:checkbox path="technologies" value="Java" />
		<input type="submit" value="Submit" />
	</form:form>
</body>
</html>