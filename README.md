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

But I'm here to tell you that minification / uglification should be apart of your build step for AWS NodeJS lambda functions (probably other serverless functions as well)

# To Run
`npm install`
`npm run build`

`zip -r package-ugly.zip bundle.js`
`zip -r package-raw.zip bundle.js`

now just upload each of the packages to different lambda functions to see the results listed below.


#Why?

Speed + Size = Cost.


# Raw Statisics

Another thing to keep in mind with AWS lambda has a limit of `75GB` for all lambda functions in a region with each package limit of `50MB` : https://docs.aws.amazon.com/lambda/latest/dg/limits.html

Raw Zip File: `13.8MB`
Uglify + Webpack: `1MB`


# Speed
Running a lambda function 100 times to get averages:



# Cost
AWS lambda charges based on execution + allocated memory. I will admit AWS is dirt cheap, so lets extrapolate some data to make our point.

assume we have no free-tier executions (i.e the 1M free executions +400K GB seconds).

because the cost are so cheap, lets assume we have 1,000,000,000 requests a month (1 Billion). Though this is highly unlikely unless you are a large corporation, lets use thta number to get a better pricing out.

using the lovely calculator at: http://serverlesscalc.com/ we can compute the costs:

