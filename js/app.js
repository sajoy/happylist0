var ractive = new Ractive({
  el: '#container',
  template: '#container-template',

  data: {
      name: '#cloudwatching',
      subtitle: 'bc clouds are cool and stuff',
      newLI: 'new item',
      lists: [
          'cirrus, Kansas, 6/12/14 ',
          'crazy freaking storm clouds, also Kansas, 6/14/14'
      ]
  },

  oninit () {
      this.on( 'create', function () {
        var newItem = this.get( 'newLI' );
        this.push( 'lists', newItem );
        this.set( 'newLI', 'new item' );
      });
  }

});

var ractive2 = new Ractive({
  el: '#sidebar-container',
  template: '#sidebar-template',

  data: {
    open: true, //false,
    customize: true, //false,
    themeColor: 'lightblue'
  },

  oninit () {
      this.on( 'toggle-customize', function () {
        this.toggle( 'customize' );
        this.toggle( 'open' );
      });

      this.on( 'saveStyles', function () {
        var newColor = this.get( 'themeColor' );
      });
  }

});
