#1. MEDIA PLAYER

>To run this project, copy this url in your browser:
click [this in URL](http://localhost:3000/layouts_media)

folder saving in *visStudio/client/media_layouts*
this project content of upload and download image and video 
1.1 *media_layouts/header_media* : is about source code of header 
	- line 21-23 call template upload_media and video_upload in tabs
1.2 *media_layouts/upload_media* : is about source code of upload function for image
	- line 1-21 is template for button of upload image and list uploaded image
	- line 23-37 is template for lopping the list and display list of image in page.
	- line 40-47 is template for upload button, so when player upload image there are progress upload rate 0% until 100%
1.3 *media_layouts/video_upload* : is about source code of upload function for video. all the script almost same like "upload_media" just differnt in the size of 
1.4 *media_layouts/layouts_media* : is to display interface of project in one page.
**i just create the UI and upload and download function, my delete function still error, and the video page not finish yet