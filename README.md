# Blogger
## One Label Posts List
  - raw git link: https://raw.githubusercontent.com/KawsikRoy/code-host/master/one-label-posts-list.js
  - executable link: https://cdn.jsdelivr.net/gh/KawsikRoy/code-host/one-label-posts-list.js
  - insert executable link above ```</head>```
  ### How to Call
  - Where need a list, just Copy-paste the Code:
```html
<script type='text/javascript'>
  var numposts = 10;
  var showpostthumbnails = false;
  var displaymore = false;
  var displayseparator = false;
  var showcommentnum = false;
  var showpostdate = false;
  var showpostsummary = false;
  var numchars = 100;
</script>
<script type="text/javascript" src="/feeds/posts/default/-/LABEL?published&alt=json-in-script&callback=labelthumbs"></script>
```
  - Changes:
    - from 2nd script link: replace LABEL with the label name.
  ### Caution
  - label name is Case Sensitive.
