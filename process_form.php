<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate the CSRF token
    if ($_POST["csrf_token"] !== "Leo23!!!") {
        die("CSRF validation failed");
    }

    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);

    if ($name && $email && $message) {
        // Compose the email
        $to = "hannazrosenfeld@gmail.com";
        $subject = "Contact Form Submission";
        $headers = "From: $email";
        $message = "Name: $name\nEmail: $email\nMessage:\n$message";

        // Send the email
        if (mail($to, $subject, $message, $headers)) {
            echo "Email sent successfully. Thank you for your message!";
        } else {
            echo "Failed to send the email. Please try again later.";
        }
    } else {
        echo "Please fill in all the required fields correctly.";
    }
} else {
    // Handle invalid request method
    echo "Invalid request method.";
}
?>
