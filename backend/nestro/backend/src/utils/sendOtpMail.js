import nodemailer from "nodemailer";

const sendOtpMail = async (toEmail, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"NESTRO" <${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: "Your NESTRO Verification Code",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>NESTRO OTP Verification</title>
        </head>

        <body style="
          margin:0;
          padding:0;
          background-color:#f5f3ef;
          font-family:Arial, Helvetica, sans-serif;
          color:#29231d;
        ">

          <div style="
            width:100%;
            padding:40px 15px;
            box-sizing:border-box;
          ">

            <div style="
              max-width:560px;
              margin:0 auto;
              background:#ffffff;
              border-radius:16px;
              overflow:hidden;
              box-shadow:0 8px 30px rgba(0,0,0,0.08);
            ">

              <!-- Header -->
              <div style="
                background:#2c2016;
                padding:28px 30px;
                text-align:center;
              ">
                <h1 style="
                  margin:0;
                  color:#ffffff;
                  font-size:30px;
                  letter-spacing:3px;
                  font-weight:700;
                ">
                  NESTRO
                </h1>

                <p style="
                  margin:8px 0 0;
                  color:#c6a27e;
                  font-size:13px;
                  letter-spacing:1px;
                ">
                  FURNITURE & LIFESTYLE
                </p>
              </div>

              <!-- Content -->
              <div style="padding:40px 35px;">

                <h2 style="
                  margin:0 0 12px;
                  font-size:24px;
                  color:#2c2016;
                ">
                  Verify your email
                </h2>

                <p style="
                  margin:0 0 25px;
                  font-size:15px;
                  line-height:1.7;
                  color:#6b625a;
                ">
                  Welcome to NESTRO. Use the verification code below
                  to complete your email verification.
                </p>

                <!-- OTP Box -->
                <div style="
                  background:#faf9f7;
                  border:1px solid #e8e0d5;
                  border-radius:12px;
                  padding:25px;
                  text-align:center;
                  margin:25px 0;
                ">

                  <p style="
                    margin:0 0 10px;
                    color:#8b5e3c;
                    font-size:12px;
                    font-weight:bold;
                    letter-spacing:1.5px;
                    text-transform:uppercase;
                  ">
                    Verification Code
                  </p>

                  <div style="
                    font-size:36px;
                    font-weight:700;
                    letter-spacing:9px;
                    color:#2c2016;
                  ">
                    ${otp}
                  </div>

                </div>

                <!-- Expiry -->
                <div style="
                  background:#fff8ef;
                  border-left:4px solid #c6a27e;
                  padding:14px 16px;
                  margin:25px 0;
                  border-radius:4px;
                ">
                  <p style="
                    margin:0;
                    font-size:14px;
                    color:#5f5145;
                    line-height:1.6;
                  ">
                    This verification code will expire in
                    <strong>3 minutes</strong>.
                  </p>
                </div>

                <p style="
                  margin:25px 0 0;
                  font-size:14px;
                  line-height:1.7;
                  color:#77706a;
                ">
                  If you did not request this verification code,
                  you can safely ignore this email. Your account
                  remains secure.
                </p>

              </div>

              <!-- Footer -->
              <div style="
                background:#faf9f7;
                border-top:1px solid #e8e0d5;
                padding:22px 30px;
                text-align:center;
              ">

                <p style="
                  margin:0 0 8px;
                  font-size:13px;
                  color:#77706a;
                ">
                  © ${new Date().getFullYear()} NESTRO. All rights reserved.
                </p>

                <p style="
                  margin:0;
                  font-size:12px;
                  color:#a09a94;
                ">
                  This is an automated email. Please do not reply.
                </p>

              </div>

            </div>

          </div>

        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      msg: "OTP Email sent successfully",
      success: true
    }

  } catch (error) {
    console.log(error);
    return {
      msg: "Email sending failed",
      success: false
    }

  }
};

export default sendOtpMail;