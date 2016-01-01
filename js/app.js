var ractive = new Ractive({
  el: '#container',
  template: '#template',
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
