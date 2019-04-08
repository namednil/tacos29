---
title: Registration
layout: project
---

<article>
  <div class="inner">
    <div class="project-intro">
      <p>The registration is not open yet.</p>
    </div>
    <div class="project-main">
                

      
      <section>
        <h2>Registration</h2>
        <ul>

<div markdown="1">
Unfortunately, you have to pay a fee of TODO € to help cover the costs of the conference. Included in the costs are at least:
- breakfast on saturday and sunday
- lunch and dinner on saturday
- beverages and snacks during the conference

You can avoid paying the fee by [presenting](/call/) something :) 

As soon as the registration is open, we will link it here.
</div>

	  
            <style type="text/css">
              .form {display:block;}
            </style>
	  <form method="post" class="form-container" role="form" id="register-form" target="_self" onSubmit="" action="">
           
	      <label for="given_name">Given name:</label> 
	      <input id="given_name" name="given_name" type="text" placeholder="Your Given Name">
 
              <label>Surname:</label>
              <input id="surname" name="surname" type="text" placeholder="Your Surname">

              <label>Email:</label>
              <input id="email" name="email" type="email" placeholder="Your Email">
            
	      <label>Nutrition:</label>
              <label class="container">Omnivorous
                <input type="radio" value="omnivorous" checked="checked" name="nutrition">
                <span class="checkmark"></span>
              </label>
              <label class="container">Vegan
                <input type="radio" value="vegan" name="nutrition">
                <span class="checkmark"></span>
              </label>
              <label class="container">Vegetarian
                <input type="radio" value="vegetarian" name="nutrition">
                <span class="checkmark"></span>
              </label>

  	    <button style="background-color: #555555;color: white" id="register_button" onclick="register();" type="button">Register</button>
	    <br>
  	    <p id="confirm-text"></p>
	  </form>

	  <noscript>
  	    <style type="text/css">
    	      .form {display:none;}
  	    </style>
  	    <div style="color: red;">
    	      You don't have javascript enabled! Please activate it for the registration.
  	    </div>
	  </noscript>

        </ul>  
        <h2>Check Registration Status</h2>
        <ul>

<div markdown="1">
If you want to check your registration status, paste here the code we sent you via email.
</div>
          <form class="form-container" role="form">
            <label>Code</label>
            <input id="code" name="code" type="text" placeholder="Your Code" required>
            <button style="background-color: #555555;color: white" id="code_button" onclick="checkCode();" type="button">Check Code</button>
          </form>
          <br>
          <p id="code-text"></p>
        </ul>
      </section>
    </div>
  </div>
</article>