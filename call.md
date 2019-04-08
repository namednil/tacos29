---
title: Call for Presentations
layout: project
---

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
          work with a poster during breakfast and chat with interested people as they come $
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
      
            <label>Your Code (You received this after registering to attend.):</label>
            <input id="call_code" name="uid" type="text" placeholder="Your Code">
        
            <label>Title of Talk or Tutorial:</label>
            <input id="title" name="title" type="text" placeholder="Title">
        
            <label>Subtitle or short description:</label>
            <input id="subtitle" name="subtitle" type="text" placeholder="Subtitle">
        
            <label>Presentation:</label>
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
              A longer description of your contribution and anything else you'd like to tell us, for instance, a prefered time and date.<br></label>
            <textarea rows="5" name="description" form="paper-form" id="description" style="width:100%"></textarea>
            <br><br>
            <label>If you have written a paper about this, pleae upload it here (or if not your main source)<br></label>
            <input type="file" name="talk_file" id="docpicker">
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



