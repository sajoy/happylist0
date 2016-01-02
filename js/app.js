var List = Ractive.extend({
  el: '#list-container',
  template: '#list-template',

  data: function () {
      return {
          name: 'things to make lists of',
          subtitle: 'bc lists are cool and stuff',
          newLI: 'new item',
          lists: [
              'ingredients in pumpkin pie',
              'things I never want to do',
              'best days ever (and why)'
          ]
      }
  },

  computed: {
    canEdit: function () {
        return this.get( 'edit' );
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
        this.set( 'edit', false );
        this.toggle( 'customize' );
        this.toggle( 'open' );
      });

      this.on( 'toggle-edit', function () {
        if ( this.get( 'customize' ) ) { return; }
        this.toggle( 'edit' );
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
            customize: false,
            open: false,
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
                // how to show all of its styles? hover, etc

                var attr = e.node.attributes;
                console.log( attr );
            });
        }
    })
