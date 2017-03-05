# Blogger Trick - One Label Posts
- Blogger Posts
  - of only one label
  - into a saperate
  	- page
	- post
	- widget

## CSS LINK
- [x] Copy link of style.css
- [x] paste into this - https://rawgit.com/
- [x] and copy URL in production from there.

## JAVA LINK
- [x] Do the same thing for script.js

## Adding
- [x] open page/post/widget(html/script)
- [x] Paste those url like this:
```
<link rel="stylesheet" type="text/css" href="STYLE-LINK" media="screen" /> <!-- Add Your STYLE LINK -->
<script type="text/javascript" src="JAVA-LINK"></script> <!-- Add Your JAVA LINK -->
<script type='text/javascript'> <!-- You Must Add This, but you can edit variables as needed -->
     var numposts = 3;
     var showpostthumbnails = true;
     var displaymore = false;
     var displayseparator = true;
     var showcommentnum = false;
     var showpostdate = false;
     var showpostsummary = true;
     var numchars = 100;
</script>
<script type="text/javascript" src="/feeds/posts/default/-/YOUR-LABEL-NAME?published&alt=json-in-script&callback=labelthumbs"></script> <!-- Add YOUR-LABEL-NAME to show -->
```

### Add and Edit as Needed
````
<style>
    img.label_thumb {
    }
    #label_with_thumbs {
    }
    ul#label_with_thumbs li {
    }
    #label_with_thumbs li {
    }
    #label_with_thumbs a {
    }
    #label_with_thumbs strong {
    }
</style>
````
