---
title: Call for Presentations
layout: project
---
<svg id="definition" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><symbol id="required" viewbox="0 0 128 128"><g><path d="M110.1,16.4L75.8,56.8l0.3,1l50.6-10.2v32.2l-50.9-8.9l-0.3,1l34.7,39.1l-28.3,16.5L63.7,78.2L63,78.5   l-18.5,49L17.2,111l34.1-39.8v-0.6l-50,9.2V47.6l49.3,9.9l0.3-0.6L17.2,16.7L45.5,0.5l17.8,48.7H64L82.1,0.5L110.1,16.4z"></path></g></symbol></defs></svg>

<article>
  <div class="inner">
    <div class="project-intro">
      <p>Deadline: June 9</p>
    </div>
    <div class="project-main">
    <p>
      A presentation could be about a thesis, an in-class project or some other topic you researched on or care about.
      We invite presentations in the following forms:
    </p>
      <section>
        <h2>Long Talks</h2>
        <ul>
          Long Talks should take about 30 minutes and can be held in English or German.
        </ul>
      </section>
      
        <section>
        <h2>Short Talks</h2>
        <ul>
          Talks should take about 15 minutes and can be held in English or German.
        </ul>
      </section>

      <section>
        <h2>Posters</h2>
        <ul>
          Don't like talking in front of many people? Then this might be the right format for you. You can present your
          work with a poster during breakfast and chat with interested people as they come by.
        </ul>
      </section>

      <section>
        <h2>Tutorials</h2>
        <ul>
          You've learned something cool (the hard way) and want to share your knowledge? Consider giving a tutorial :)
        </ul>
      </section>

      <section>
        <h2>Register for a Talk</h2>
	<p>TODO: Not working yet!!!</p>
        <ul>
          <form method="post" class="form-container" role="form" id="paper-form" target="_self" onSubmit="" action="">
      
            <label>Your Code (You received this via E-mail after registering to attend.):<svg class="icon" focusable="false"><use xlink:href="#required"></use></svg></label>
            <input id="call_code" name="uid" type="text" placeholder="Your Registration Code">
        
            <label>Title:<svg class="icon" focusable="false"><use xlink:href="#required"></use></svg></label>
            <input id="title" name="title" type="text" placeholder="Title">
        
            <label for="subtitle">Subtitle or short description:</label>
            <input id="subtitle" name="subtitle" type="text" placeholder="Subtitle" required>
        
            <label>Presentation Type:<svg class="icon" focusable="false"><use xlink:href="#required"></use></svg></label>
            <label class="container">Long Talk
                <input type="radio" value="longtalk" checked="checked" name="presentation">
                <span class="checkmark"></span>
            </label>
            <label class="container">Short Talk
                <input type="radio" value="shorttalk" name="presentation">
                <span class="checkmark"></span>
            </label>
            <label class="container">Poster
                <input type="radio" value="poster" name="presentation">
                <span class="checkmark"></span>
            </label>
            <label class="container">Tutorial
                <input type="radio" value="tutorial" name="presentation">
                <span class="checkmark"></span>
            </label>
            <label>
            Abstract:<br></label>
            <textarea rows="5" name="abstract" form="paper-form" id="abstract" style="width:100%"></textarea>
            
            <label>
              Is there anything else you'd like to tell us? Do you need anything specific (e.g. power supply)? Do you have a preferrred time slot?<br></label>
            <textarea rows="5" name="notes" form="paper-form" id="notes" style="width:100%"></textarea>
            <br><br>
            <label>If you have written a paper or thesis about this, pleae upload it here. If you already have a draft of your slides, please add them as well.<br></label>
            <input type="file" name="talk_files[]" id="talk_files" multiple>
            <br><br><br>
	    <div style="text-align: center">
              <button style="background-color: #555555;color: white" id="talk_button" onclick="register_talk();" type="button">Submit for Review</button>
            </div>
            <p id="call-text"></p>
        </form>
        </ul>
      </section>
    </div>
  </div>
</article>



