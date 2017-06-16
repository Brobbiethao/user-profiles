angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	const promise = friendService.getFriends(); // courtesy of R-yan!
		promise.then(function(res) {
			$scope.currentUser = res.data.currentUser;
			$scope.friends = res.data.friends;
		})

});
