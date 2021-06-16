<?php 

function upload(){
   $nama = $_FILES['img']['name'];
   $tmp = $_FILES['img']['tmp_name'];

   move_uploaded_file($tmp, 'img/'.$nama);
}

if (isset($_POST['submit'])) {
    upload();
}

?>
<!DOCTYPE html>
<html>
<head>
    <title>Form</title>
</head>
<body>
    <form method="post" enctype="multipart/form-data">
       <input type="file" name="img">
       <button type="submit" name="submit"> Submit
    </form>
</body>
</html>