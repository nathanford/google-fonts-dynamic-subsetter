Google Fonts Dynamic Subsetter
==============================

Dynamically subset your Google Font based on the glyphs used on a single page.

Check out demo.html for an example set up.

To initialize:
```HTML
<script src="google-ds.js"></script>
	
<script>
	
  googleDS('font name', 'font weights', subset);
	
</script>
```

The script will write a `link` element to the `head` of your page, with the font, weights and subsets supplied in the parameters of the `googleDS` function:

_font name (required)_
The name of the font, as listed on google.com/fonts. Ex: 'Open Sans'.

_font weights (optional)_
A comma separated list of the weights you want to load. Use the numerical weight listed on google.com/fonts. Ex: '400,400italic,600'.

_subset (optional)_ 
True/False boolean. Defaults to true, which will dynamically subset to the glyphs used on the page.