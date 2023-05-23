<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>



<head>
    <title>Angular with JSP Integration</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/angular/styles.css"/>
 <base href="${pageContext.request.contextPath}/angular">
</head>
<body>
    <h1>Welcome to the Angular with JSP Integration Example</h1>



    <!-- Render the Angular component -->
    <app-root></app-root>

    <!-- Include the Angular build files -->
            <script src="${pageContext.request.contextPath}/angular/runtime.js" type="module"></script>
            <script src="${pageContext.request.contextPath}/angular/polyfills.js" type="module"></script>

            <!--script src="${pageContext.request.contextPath}/angular/vendor.js" type="module"></script-->
            <script src="${pageContext.request.contextPath}/angular/main.js" type="module"></script>
</body>
</html>