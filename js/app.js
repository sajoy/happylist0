var List = Ractive.extend({
  el: '#list-container',
  template: '#list-template',

  data: function () {
      return {
          name: '#cloudwatching',
          subtitle: 'bc clouds are cool and stuff',
          newLI: 'new item',
          lists: [
              'cirrus, Kansas, 6/12/14 ',
              'crazy freaking storm clouds, also Kansas, 6/14/14'
          ]
      }
  },

  computed: {
    canEdit: function () {
        return !this.get( 'customize' );
    }
  },

  oninit () {
      this.on( 'create', function () {
        var newItem = this.get( 'newLI' );
        this.push( 'lists', newItem );
        this.set( 'newLI', 'new item' );
      });
  }

});

var Sidebar = Ractive.extend({
  el: '#sidebar-container',
  template: '#sidebar-template',

  data: function () {
      return {
        themeColor: 'lightblue'
      }
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

var list = new List(),
    sidebar = new Sidebar(),
    app = new Ractive({
        el: document.body,
        template: '#container-template',
        data: {
            customize: true, //false,
            open: true, //false,
            edit: false
        },
        components: {
            list: List,
            sidebar: Sidebar
        },
        oninit () {
            this.on( '*.selectEl', function ( e ) {
                // select element
                // populate edit-styles with styles of element
                // where / how to save / inject the styles?

                var attr = e.node.attributes;
                console.log( attr );
            });
        }
    })
