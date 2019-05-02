# Blogger
## One Label Posts List
  - raw git link: ``` https://raw.githubusercontent.com/KawsikRoy/code-host/master/one-label-posts-list.js ```
  - executable link: ``` https://cdn.jsdelivr.net/gh/KawsikRoy/code-host/one-label-posts-list.js ```
  - insert executable link above ```</head>```
  ### How to Call
  - Where need a list, just Copy-paste the Code from below.
  - for more lists it must be called again as they are given below.
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
  - And Just Change it:
    - from 2nd script link: replace LABEL with the label name.
  ### Caution
  - label name is Case Sensitive.
## Sitemap All Label All Posts
  - raw git link: ``` https://raw.githubusercontent.com/KawsikRoy/code-host/master/sitemap-all-label-all-posts.js ```
  - executable link: ``` https://cdn.jsdelivr.net/gh/KawsikRoy/code-host/sitemap-all-label-all-posts.js ```
  - insert executable link above ```</head>```
    ### How to Call
  - Where need a list, just Copy-paste the Code from below.
```html
<script src="https://BLOGGER_ID_NAME.blogspot.com/feeds/posts/default?max-results=9999&amp;alt=json-in-script&amp;callback=loadtoc"></script>
```
  - And Just Change it:
    - replace BLOGGER_ID_NAME with yours.
    - max-results=9999 also can be change as needed.
  ### Caution
  - any name is Case Sensitive.
