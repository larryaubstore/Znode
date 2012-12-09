var Znode = Znode || {};
Znode.Custom = Znode.Custom || {};

Znode.Custom.Loader = function() {

	var _loadGraphIfExist = function() {
		if(typeof(jQuery) !== undefined) {
			jQuery.getJSON('json.txt', function(data) {
				Znode.Custom.Ui.LoadGraph(data);
			});
		}
	};
			
	return {
		LoadGraphIfExist: _loadGraphIfExist
	};
}();
