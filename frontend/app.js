// app.js

// Simulated "blockchain"
let certificates = {};

// Handle issuing certificates
const issueForm = document.getElementById("issueForm");
if(issueForm){
  issueForm.addEventListener("submit", function(e){
    e.preventDefault();
    const student = document.getElementById("studentName").value;
    const institution = document.getElementById("institution").value;
    const course = document.getElementById("course").value;

    const certId = "CERT-" + Date.now(); // unique ID
    certificates[certId] = { student, institution, course, date: new Date().toLocaleDateString() };

    document.getElementById("issueResult").innerText = Certificate Issued! ID: ${certId};
    issueForm.reset();
  });
}

// Handle verifying certificates
const verifyForm = document.getElementById("verifyForm");
if(verifyForm){
  verifyForm.addEventListener("submit", function(e){
    e.preventDefault();
    const certId = document.getElementById("certId").value;
    const cert = certificates[certId];

    const result = cert ? 
      Student: ${cert.student}\nInstitution: ${cert.institution}\nCourse: ${cert.course}\nIssued: ${cert.date} 
      : "Certificate not found!";
    
    document.getElementById("verifyResult").innerText = result;
    verifyForm.reset();
  });
}
