# Lambda-Tester
Simple Lambda file tester in nodejs

This repo will show the benefits of using minification on a nodejs lambda function

Minification / uglification is a common commponent of Client side javascript development. Front-end engineers are driven the point to minify CSS/HTML that would be delivered to browsers to help improve speed. But when it comes to your backend developers (Service Developers), minification seems like something that is often overlooked)

Take of example if you were to search `"Nodejs minification"` on google:

https://stackoverflow.com/questions/12068971/does-it-make-sense-to-minify-code-used-in-nodejs
https://www.quora.com/Is-it-advisable-or-even-possible-to-minify-node-js-code

most developers will ask "why"? which makes sense, when you think about traditional NodeJS service run time.

you run it once, and thats it. unlike client-side code, there is really no need to send code through the wire to browsers.

this is not the with AWS lambda.



