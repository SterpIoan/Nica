$servername = "localhost";
$username = "root"; // Utilizator implicit
$password = ""; // Lasă gol dacă nu ai setat parolă
$dbname = "teachme";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}