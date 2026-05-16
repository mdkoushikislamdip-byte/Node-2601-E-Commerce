const OTPMailTemp = (otp) => {
  return `
  <div style="margin:0; padding:40px 0; background:#f5f7fb; font-family:Arial,sans-serif;">
    
    <table align="center" cellpadding="0" cellspacing="0" width="100%" 
      style="max-width:600px; background:#ffffff; border-radius:18px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08);">
      
      <!-- Header -->
      <tr>
        <td 
          style="background:linear-gradient(135deg,#667eea,#764ba2); padding:45px 30px; text-align:center;">
          
          <h1 style="color:#ffffff; margin:0; font-size:32px; font-weight:700;">
            Email Verification
          </h1>

          <p style="color:#e9e9ff; margin-top:10px; font-size:15px;">
            Secure access to your account
          </p>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:45px 35px; color:#333333;">
          
          <h2 style="margin-top:0; font-size:24px; color:#222;">
            Hello 👋
          </h2>

          <p style="font-size:16px; line-height:28px; color:#555;">
            Use the verification code below to complete your sign in process.
            This OTP is valid for a short period of time.
          </p>

          <!-- OTP -->
          <div style="text-align:center; margin:40px 0;">
            
            <div style="
              display:inline-block;
              background:#f4f6ff;
              border:2px dashed #667eea;
              border-radius:14px;
              padding:18px 35px;
            ">
              <span style="
                font-size:36px;
                letter-spacing:10px;
                font-weight:700;
                color:#667eea;
              ">
                ${otp}
              </span>
            </div>

          </div>

          <!-- Info Box -->
          <div style="
            background:#fff8e6;
            border-left:4px solid #ffb100;
            padding:15px 18px;
            border-radius:8px;
            margin-bottom:25px;
          ">
            <p style="
              margin:0;
              font-size:14px;
              line-height:24px;
              color:#7a5d00;
            ">
              ⚠️ Never share this OTP with anyone for security reasons.
            </p>
          </div>

          <p style="font-size:15px; line-height:26px; color:#666;">
            If you didn’t request this verification, you can safely ignore this email.
          </p>

          <p style="
            margin-top:40px;
            font-size:16px;
            line-height:28px;
            color:#333;
          ">
            Regards,<br>
            <strong style="color:#667eea;">
              E-Commerce Team
            </strong>
          </p>

        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="
          background:#f8f9fc;
          padding:20px;
          text-align:center;
          font-size:13px;
          color:#888;
        ">
          © 2026 E-Commerce. All rights reserved.
        </td>
      </tr>

    </table>
  </div>
  `;
};

module.exports = { OTPMailTemp };