I like this talk a lot.   Speaker was lucky enough to have visual studio.  I am not that lucky.

I used:

~~~~~~~~~~~~
python -m SimpleHTTPServer
~~~~~~~~~~~~
to serve up the app.  

 

But I needed to run tsc over all of the .ts files.   I checked in the results because I want this to be a bit 
handier for folks (including me) in the future.

I did this: 

~~~~~~~~~~~
for f in `find Demos -type f`; do echo $f; tsc $f; done
~~~~~~~~~~~

Also, http://www.typescriptlang.org/Samples is very useful.   Including the suggestion to:

~~~~~~~~~~~~
npm install -g typescript
~~~~~~~~~~~~

