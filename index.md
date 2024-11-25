---
layout: default
title: Home
---
# Test of SFIA

This is the test block for SFIA
<ul>
  <li id="skill-itsp" class="hoverable-skill">Strategic planning</li>
  <li id="skill-isco" class="hoverable-skill">Information systems coordination</li>
  <li id="skill-irmg" class="hoverable-skill">Information management</li>
</ul>

<div id="description" style="margin-top: 20px; font-style: italic;">Hover over an item to see its details here.</div>


<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script type="module">
  import { initializeHover } from './script/sfia_visualize.js';
  initializeHover('.hoverable-skill', '#description');
</script>