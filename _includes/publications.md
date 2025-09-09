<h2 id="publications" style="margin: 2px 0px -15px;">Publications</h2>

<style>
:root {
  /* Adjust these to control widths */
  --pubs-image-width: 260px;       /* image column width on desktop */
  --pubs-text-max: 740px;          /* max text width on desktop */
  --pubs-gap: 10px;                /* gap between image and text */
}
.publications .pub-row { display:flex; align-items:flex-start; gap:var(--pubs-gap); flex-wrap:wrap; }
.publications .pub-row .abbr { flex:0 0 var(--pubs-image-width); max-width:var(--pubs-image-width); }
.publications .pub-row .abbr img { width:100%; height:auto; display:block; }
.publications .pub-row .col-sm-9 { flex:1 1 0; min-width:240px; max-width:var(--pubs-text-max); }
@media (max-width: 992px) {
  .publications .pub-row .col-sm-9 { max-width:100%; }
}
@media (max-width: 576px) {
  .publications .pub-row { flex-direction:column; }
  .publications .pub-row .abbr,
  .publications .pub-row .col-sm-9 { max-width:100%; flex:1 0 100%; }
}
</style>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.main %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 10px;padding-left: 10px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" alt="{{ link.title }}">
    {% if link.conference_short %} 
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 10px;padding-left: 10px;">
      <div class="title"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    <div class="links">
      {% if link.pdf %} 
      <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a>
      {% endif %}
      {% if link.code %} 
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
      {% endif %}
      {% if link.slide %} 
      <a href="{{ link.slide }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Slide</a>
      {% endif %}
      {% if link.notes %} 
      <strong> <i style="color:#1abc9c">{{ link.notes }}</i></strong>
      {% endif %}
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>
<br>

{% endfor %}

</ol>
</div>
