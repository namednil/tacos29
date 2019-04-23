---
title: Registration
layout: project
---

<article>
  <div class="inner">
    <div class="project-intro">
        
      <p>The registration will be open very soon!</p>
      <img src="/images/logos/Taco.svg" alt="Owl with taco" style="text-align: center; width: 100%;"> 
    </div>
    <div class="project-main">
                

      
      <section>
        <h2>Registration</h2>
        <ul>

<div markdown="1">
Unfortunately, you have to pay a fee to help cover the costs of the conference. Included in the fee are:
- Bus tickets for all three days
- Barbecue on friday
- Breakfast on Saturday and Sunday
- Lunch on Saturday
- Beverages and snacks during the conference

The early bird catches the worm! If you register for TaCoS **until May 26**, you will only have to pay an attendence fee of **20€**. Afterwards, the attendence fee increases to **25€**.

You can reduce the fee considerably by [presenting](/call/) your research.
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
            <label>University/Affiliation:</label>
              <input id="university" name="university" type="text" placeholder="Your University">
            
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
        <p>
         <label>Bus tickets:</label>
         <br>
            <input type="checkbox" name="ticket" value="ticket"> I need bus tickets
        <br>
        </p>


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
        <div id="status">
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
        </div>
      </section>
    </div>
  </div>
</article>
