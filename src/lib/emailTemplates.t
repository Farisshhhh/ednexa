export function clientConfirmationEmail(name: string) {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Ednexa</title>
</head>

<body
  style="
    margin:0;
    padding:40px 0;
    background:#f6f6f4;
    font-family:Inter,Arial,sans-serif;
  "
>

<table
  align="center"
  width="640"
  cellpadding="0"
  cellspacing="0"
  style="
    background:#ffffff;
    border-radius:24px;
    overflow:hidden;
    border:1px solid #ececec;
  "
>

<tr>
<td
style="
padding:50px;
text-align:center;
background:#111111;
"
>

<h1
style="
margin:0;
color:#ffffff;
font-size:34px;
letter-spacing:-1px;
"
>
EDNEXA
</h1>

<p
style="
margin-top:14px;
color:#C7A86D;
font-size:15px;
letter-spacing:3px;
text-transform:uppercase;
"
>
Digital Growth Partner
</p>

</td>
</tr>

<tr>
<td style="padding:55px;">

<h2
style="
margin:0;
font-size:34px;
color:#111111;
"
>
Hi ${name},
</h2>

<p
style="
margin-top:24px;
font-size:18px;
line-height:34px;
color:#555;
"
>
Thank you for contacting <strong>Ednexa</strong>.

We've successfully received your enquiry and our
team is already reviewing your project requirements.
</p>

<div
style="
margin-top:40px;
padding:28px;
background:#fafaf8;
border-radius:18px;
"
>

<p
style="
margin:0;
font-weight:600;
color:#111;
"
>
What happens next?
</p>

<ul
style="
margin-top:18px;
padding-left:22px;
color:#666;
line-height:34px;
font-size:17px;
"
>

<li>We'll carefully review your enquiry.</li>

<li>Our team may contact you for more details.</li>

<li>You'll receive a personalised response within 24 hours.</li>

</ul>

</div>

<div
style="
margin-top:50px;
text-align:center;
"
>

<a
href="https://ednexa.in"
style="
display:inline-block;
padding:16px 34px;
background:#111111;
color:#ffffff;
text-decoration:none;
border-radius:999px;
font-weight:600;
"
>
Visit Ednexa
</a>

</div>

<p
style="
margin-top:60px;
font-size:15px;
line-height:28px;
color:#888;
text-align:center;
"
>

Thank you for choosing Ednexa.

<br><br>

<strong>Ednexa</strong><br>

Digital Growth Partner

</p>

</td>
</tr>

</table>

</body>

</html>
`;
}