import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1> <p>  Hello world!  </p>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1> <p>Hi, I am Practicenotes. <br /> \
        practicing to be a <br /> ALL-FULL-STACK DESIGNER in 3 years,<br /> \
        from Web frontend/backend Design (1 Month Exp, Learning) <br /> \
        to Mobile APP design (No, To Be Learned),<br /> \
        to Embedded HW/SW design (>10 Years EXP), <br /> \
        to FPGA programming (<1 Year EXP), <br /> \
        to RISC-V CPU design (No, To Be Learned).</p> \
        <br /> \
        my github: <a href='https://github.com/practicenotes007'> practicenotes007 </a>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1> <p>Email:  practicenotes@163.com</p>");
});


app.use((req, res) => {
    res.status(404).send("Page not found");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});