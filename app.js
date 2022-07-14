new Vue({
	if: "index.html",
	watch: {
		nightMode: function() {
			localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
			console.log('Night Mode: ' + JSON.stringify(this.nightMode))
		}
	},
	data: {
		nightMode: localStorage.getItem("nightMode") || false,
	},
});