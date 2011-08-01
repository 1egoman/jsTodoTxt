describe( "TodoTxtItem", function () {

	var target = {
		raw: "This is a task.",
		render: "This is a task.",
		text: "This is a task.",
		priority: null,
		complete: false,
		date: null,
		location: null,
		project: null
	};

	describe( "when given a simple task", function () {

		var item;

		beforeEach( function () {
			item = new TodoTxtItem( target.raw );
		} );

		it( "should have the correct text", function () {
			expect( item.text ).toEqual( target.text );
		} );

		it( "should have no priority", function () {
			expect( item.priority ).toEqual( target.priority );
		} );

		it( "should have no location", function () {
			expect( item.location ).toEqual( target.location );
		} );

		it( "should have no project", function () {
			expect( item.project ).toEqual( target.project );
		} );

		it( "should have no date", function () {
			expect( item.date ).toEqual( target.date );
		} );

		it( "should not be complete", function () {
			expect( item.complete ).toEqual( target.complete );
		} );

		it( "should render correctly", function () {
			expect( item.toString() ).toEqual( target.render );
		} );

	} );


} );
