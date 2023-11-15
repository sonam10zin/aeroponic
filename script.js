function sendEmail(){
    Email.send({
    Host : "smtp.gmail.com",
   Username : "tpeldon395@gmail.com",
   Password : "peldon123",
   To : 'sonamzangmo502@gmail.com',
   From : document.getElementById("email").Value,
   Subject : "New Contact Form Enquiry",
   Body : "Name:" + document.getElementById("name").Value
          + "<br> Email:" + document.getElementById("email").Value
          + "<br> Phone no:" + document.getElementById("phone").Value
          + "<br> Message:" + document.getElementById("message").Value



}).then(
message => alert("Message Sent succesfully")
);
}