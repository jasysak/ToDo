# todo
First To-Do List App created for (practice) The Odin Project, 
November, 2021.

This is a simple todo list app. in plain old JavaScript that allows a 
single user (multi-user may be implemented 'later') to create, retrieve, 
update, and delete todo projects and todo list items for each project.

Some limited search/listing options are available including a "today" view 
and an X day lookahead view for any tasks matching X criteria. Additional 
search and listing views will/may be added later.

As of this writing, the code is mostly in a procedural style with only 
limited object oriented elements. The plan today is to eventually begin
a re-factoring process that will convert some or all of the code to a more 
OO style, and potentially expand it into a more usable application for a 
specific real-world use case. Other improvements may include multi-user
capability with either a BaaS or full-fledged backend DB solution, and 
sanitization of user input/output as needed to minimize potential security 
concerns. There is also a fair bit of repetition that needs fixing (DRY!)
and the DOM manipulation/UI/UX code desperately needs to be separated out 
as it's own module(s).

To install:

$ npm install webpack webpack-cli css-loader file-loader html-webpack-plugin style-loader --save-dev
$ webpack run build

then just load ./dist/index.html into your favorite browser

All code found here is an original creation by me and is licensed under the 
ISC open source license.

Copyright 2021 by J.A. Sysak

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.