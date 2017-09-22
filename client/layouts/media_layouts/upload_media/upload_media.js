// var imageURL = fileObj._id;

// download ===================================
Template.upload_media.onCreated(function () {
  Meteor.subscribe('files.images.all');
});

Template.file01.helpers({
  file() {
    return Images.find();
  }
});
//-----------------------ini helpers delete------------------------


//---------------------ini event delete-------------------------------

// upload ===================================
Template.uploadForm.onCreated(function () {
  this.currentUpload = new ReactiveVar(false);
});

Template.uploadForm.helpers({
  currentUpload() {
    return Template.instance().currentUpload.get();
  }
});

Template.uploadForm.events({
  'change #fileInput'(e, template) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // multiple files were selected
      const upload_media = Images.insert({
        file: e.currentTarget.files[0],
        streams: 'dynamic',
        chunkSize: 'dynamic'
      }, false);

      upload_media.on('start', function () {
        template.currentUpload.set(this);
      });

      upload_media.on('end', function (error, fileObj) {
        if (error) {
          alert('Error during upload: ' + error);
        } else {
          alert('File "' + fileObj.name + '" successfully uploaded');
        }
        template.currentUpload.set(false);
      });

      upload_media.start();
    }
  }
});

//---------------------------servernya-------------------------------------------

//import { FilesCollection } from 'meteor/ostrio:files';

//const Images = new FilesCollection({
  //collectionName: 'Images',
  //allowClientCode: false, // Disallow remove files from Client
  //onBeforeUpload(file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    //if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
      //return true;
    //} else {
      //return 'Please upload image, with size equal or less than 10MB';
    //}
  //}
//});

//if (Meteor.isClient) {
  //Meteor.subscribe('files.images.all');
//}

//if (Meteor.isServer) {
  //Meteor.publish('files.images.all', function () {
    //return Images.find().cursor;
  //});
//}
//--------------------------------akhir servernya----------------------------------\

//--------------------------------buat JS yang di CLIENTnya-------------------------
//Template.uploadForm.onCreated(function () {
  //this.currentUpload = new ReactiveVar(false);
//});

//Template.uploadForm.helpers({
  //currentUpload() {
    //return Template.instance().currentUpload.get();
  //}
//});

//Template.file.helpers({
  //imageFile() {
    //return Images.findOne();
  //},
  //videoFile() {
    //return Videos.findOne();
  //}
//});

//Template.uploadForm.events({
  //'change #fileInput'(e, template) {
    //if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // multiple files were selected
      //const upload = Images.insert({
        //file: e.currentTarget.files[0],
        //streams: 'dynamic',
        //chunkSize: 'dynamic'
      //}, false);

      //upload.on('start', function () {
        //template.currentUpload.set(this);
      //});

      //upload.on('end', function (error, fileObj) {
        //if (error) {
          //alert('Error during upload: ' + error);
        //} else {
          //alert('File "' + fileObj.name + '" successfully uploaded');
        //}
        //template.currentUpload.set(false);
      //});

      //upload.start();
    //}
  //}
//});
//--------------------akhir buat JS yang ada di CLIENTya-------------------------------

//--------------------buat HTML UPLOAD bagian DISPLAY image----------------------------
//<template name='file'>
  //<img src="{{imageFile.link}}" alt="{{imageFile.name}}" />
  //<!-- Same as: -->
  //<!-- <img src="{{fileURL imageFile}}" alt="{{imageFile.name}}" /> -->
  //<hr>
  //<video height="auto" controls="controls">
    //<source src="{{videoFile.link}}?play=true" type="{{videoFile.type}}" />
    //<!-- Same as: -->
    //<!-- <source src="{{fileURL videoFile}}?play=true" type="{{videoFile.type}}" /> -->
  //</video>
//</template>
//---------------------akhir dari HTML DISPLAY LIST UPLOAD-----------------------------

//---------------------ini SERVER untuk VIDEO dan IMAGE--------------------------------
//const Images = new FilesCollection({collectionName: 'Images'});
//const Videos = new FilesCollection({collectionName: 'Videos'});

//if (Meteor.isServer) {
  // Upload sample files on server's startup:
 // Meteor.startup(() => {
    //Images.load('https://raw.githubusercontent.com/VeliovGroup/Meteor-Files/master/logo.png', {
      //fileName: 'logo.png'
    //});
    //Videos.load('http://www.sample-videos.com/video/mp4/240/big_buck_bunny_240p_5mb.mp4', {
      //fileName: 'Big-Buck-Bunny.mp4'
    //});
  //});

  //Meteor.publish('files.images.all', function () {
    //return Images.find().cursor;
  //});

  //Meteor.publish('files.videos.all', function () {
    //return Videos.find().cursor;
  //});
//} else {
  // Subscribe to file's collections on Client
  //Meteor.subscribe('files.images.all');
  //Meteor.subscribe('files.videos.all');
//}
//---------------------akhir dari SERVER VIDEO dan IMAGE---------------------------------

