<div class="features" id="projects">
  <div class="inner">
    <ul class="featurelist">
      {% for feature in site.data.features %}
          <li>
            <a href="{{feature.link}}">
              <img src="{{feature.image}}" alt="{{feature.title}}" />
              <div class="feature-title">
                <h2>{{feature.title}}</h2>
                <span class="feature-slider"></span>
              </div>
              <div class="feature-info">
                <p>{{feature.text}} <span class="feature-arrow"></span></p>
              </div>
            </a>
          </li>
      {% endfor %}
    </ul>
  </div>
</div>

<div class="quote">
  <div class="inner">
    <blockquote>
      <p>&quot;Er würgte eine Klapperschlang bis ihre Klapper schlapper klang.&quot;</p>
      <cite>Heinz Erhardt</cite>
    </blockquote>
  </div>
</div>
