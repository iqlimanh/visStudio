FlowRouter.route('/layouts_media', {
  name: 'App.layouts_media',
  action() {
    BlazeLayout.render('layouts_media', { main: 'upload_media' });
  },
});