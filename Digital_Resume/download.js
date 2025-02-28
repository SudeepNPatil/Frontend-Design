const down = document.getElementById("download1").addEventListener("click", function () {

    const link = document.createElement("a")

    link.href = "./SUDEEP N PATIL.CV.pdf";
    link.download = "Sudeep.cv.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

});