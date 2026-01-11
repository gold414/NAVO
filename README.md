# navigator
# code

map.html
```
<!DOCTYPE html>
<html>
<head>
    <title>Navigator</title>
    <link rel="icon" href="icon.jpg">
    <link rel="stylesheet" href="map.css">
</head>
<body>
    <div class="navigator">
        <div class="navtag">
        <nav class="navbar">
           <div><h1>Navigator</h1></div>
           <div class="list">
                <ul>
                    <li><a href="home.html">Home</a></li>
                    <li><a href="maps.html">Maps</a></li>
                   <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        </nav>
        </div>
        <img src="logo.png" alt="Logo" class="logo">
        <div class="glass-box">
            <h2>Navigator</h2>

            <input type="text" placeholder="Enter current room "><br>
            <input type="text" placeholder="Enter destination room"><br>
 
            <button>Navigate</button>
        </div>
    </div>
</body>
</html>
```

map.css
```
body{
    margin: 0;
    height: 100vh;
    background: linear-gradient(-45deg, #a52d81, #3379a1, #4c30a2, #2b7ba9);
    background-size: 400% 400%;
    animation: gradientMove 15s ease infinite;
    display: flex;
    justify-content: center;
    align-items: center;
}

@keyframes gradientMove{
    0%{background-position: 0% 50%;}
    50%{background-position: 100% 50%;}
    100%{background-position: 0% 50%;}
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 40px;

  /* Glass effect */
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  /* Bottom shadow */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);

  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  z-index: 1000;
}

.list{
    margin-right: 5%;
    display: flex;
}

.list ul,li{
    display: flex;
}   

li{
    margin-right: 20px;
}

li a{
    color: black;
    text-decoration: none;
}
li a:hover{
    color: white;
    transition: 0.3s;
    cursor: pointer;
}

img{
    height: 100px;
    width: 500px;
    margin-left: 60px;
    margin-top: 35px;
    margin-bottom: 5px;
}

.glass-box {
  width: 550px;
  padding: 30px;

  /* Glass effect */
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);

  /* Shadow */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);

  color: rgb(255, 255, 255);
  text-align: center;
}

.glass-box input {
  width: 50%;
  padding: 12px;
  margin: 10px 0;

  background: rgba(255, 255, 255, 0.2);
  border: none;
  outline: none;
  border-radius: 8px;

  color: white;
  font-size: 14px;
}

.glass-box input::placeholder {
  color: rgba(117, 97, 97, 0.7);
}

.glass-box button {
  width: 25%;
  padding: 12px;
  margin-top: 15px;

  background: rgba(175, 171, 171, 0.3);
  border: none;
  border-radius: 8px;

  color: white;
  font-size: 15px;
  cursor: pointer;

  transition: background 0.3s;
}

.glass-box button:hover {
  background: rgba(255, 255, 255, 0.45);
}



@media (max-width: 600px) {
  
  .glass-box {
    width: 90%;
    padding: 20px;
  }

  .glass-box input {
    width: 50%;
  }
  
  img{
    width: 300px;
    height: 60px;
    margin-left: 20px;
  }
  .glass-box button {
    width: 30%;
  }
    
  .list{
    display: none;
  }
  .toggle {
    display: block;
  }
}
```
