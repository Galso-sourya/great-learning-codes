<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- here c is a 
variable we we used here later to iterate over the object -->
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
the registration is confirmed:<br>
first name is---${employeeModel.firstName }<br>
last name----${employeeModel.lastName }<br>
belongs to the department-----${employeeModel.department }<br>
technologies known----
<!-- we are going to iterate over the object technologies -->
<ul>
<c:forEach var="temp" items="${employeeModel.technologies }">
<li>${temp}</li>
</c:forEach>
</ul>
</body>
</html>