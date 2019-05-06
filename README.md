# Blogger
## Summery
  - Show Widget if is HomePage: ``` cond='data:view.isHomepage' ```  
  - above ``` </head> ```  
  ```html
<link href='https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css' rel='stylesheet' type='text/css'/>
<link href='https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css' rel='stylesheet' type='text/css'/>
<link crossorigin='anonymous' href='https://use.fontawesome.com/releases/v5.8.1/css/all.css' integrity='sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf' rel='stylesheet' type='text/css'/>
<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js' type='text/javascript'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js' type='text/javascript'></script>
<script src='https://cdn.jsdelivr.net/gh/KawsikRoy/code-host/one-label-posts-list.js' type='text/javascript'></script>
<script src='https://cdn.jsdelivr.net/gh/KawsikRoy/code-host/sitemap-all-label-all-posts.js' type='text/javascript'></script>
<script src='https://cdn.jsdelivr.net/gh/KawsikRoy/code-host/blogger-widget-fully-width.js' type='text/javascript'></script>
  ```

| Host             	| File Name                      	| v     	| etc	|
|------------------	|--------------------------------	|-------	|---	|
| cdnjs            	| owl.carousel.min.css           	| 2.3.4 	|   	|
| cdnjs            	| owl.theme.default.min.css      	| 2.3.4 	|   	|
| fontawesome      	| all.css                        	| 5.8.1 	|   	|
| google           	| jquery.min.js                  	| 3.4.0 	|   	|
| cdnjs            	| owl.carousel.min.js            	| 2.3.4 	|   	|
| cdn.jsdelivr..gh 	| one-label-posts-list.js        	|       	|   	|
| cdn.jsdelivr..gh 	| sitemap-all-label-all-posts.js 	|       	|   	|
| cdn.jsdelivr..gh 	| blogger-widget-fully-width.js  	|       	|   	|

## Show Widget if is HomePage
example (homepage only):  
```xml
<b:widget cond='data:view.isHomepage' id='FeaturedPost1' locked='true' title='' type='FeaturedPost' visible='true'>
```  
example (normal):  
```xml
<b:widget id='HTML16' locked='false' title='# books links' type='HTML' visible='true'>
```  
**Descision: ```b:widget``` tag must have the following attribute**  
``` cond='data:view.isHomepage' ```
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

## One Label Posts List
  - raw git link: ``` https://raw.githubusercontent.com/KawsikRoy/code-host/master/blogger-widget-fully-wide.js ```
  - executable link: ``` https://cdn.jsdelivr.net/gh/KawsikRoy/code-host/blogger-widget-fully-width.js ```
  - insert executable link above ```</head>```
# বাংলা
## আমার 
### তনা মঞ্চ কোনো রাজনৈতিক দলের সঙ্গে যুক্ত নয় । তবে মানবিক দৃষ্টিভঙ্গীতে সক
#### তনা মঞ্চ কোনো রাজনৈতিক দলের সঙ্গে যুক্ত নয় । তবে মানবিক দৃষ্টিভঙ্গীতে সক
##### তনা মঞ্চ কোনো রাজনৈতিক দলের সঙ্গে যুক্ত নয় । তবে মানবিক দৃষ্টিভঙ্গীতে সক
###### 
