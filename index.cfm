<!DOCTYPE html>
<html>
<head>
	<title>Contacts List Demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./img/favicon.ico">
    <link rel="stylesheet" type="text/css" href="css/global.css">
    <script src="./js/jquery.min.js" type="text/javascript"></script>
    <script src="./js/jquery.validate.min.js"></script>
    <script src="./js/additional-methods.min.js"></script>
    <script  src="./js/sammy.min.js" type="text/javascript"></script>
    <script src="./js/sammy.template.js" type="text/javascript"></script>
</head>
<body>
    <div class="main-container">
        <div class="container">
            <div class="header">
                <h2>
                    Contacts List Demo 
                </h2>
            </div>
            <div class="show-errors"><ul></ul></div>
            <div class="go-content-wrap">
                
                <div class="content">
                    <div class="contact-top-section">
                        <div class="go-back-container hide">
                            <a href="#/" class="go-back"><< Back</a>
                        </div>
                        <form>
                            <div class="go-form-content">
                                <label>Search: </label>
                                <input type="text" name="searchContact" id="searchContact" placeholder="Search">
                            </div>
                        </form>
                    </div>
                    <div class="contact">
                        <a href="#/add/">Add Contact</a>
                    </div>
                </div>
                
                <div class="contact-list" id="app">
                </div>
                
                <div class="footer">
                    &#169; copyright 2020 
                </div>
                <div class="spinner go-progressLoader"></div> 
                <div class="overlay"></div>
            </div>
        </div>
    </div>
    <script src="app.js"></script>
    <script src="./js/scripts.js"></script>
</body>
</html>
