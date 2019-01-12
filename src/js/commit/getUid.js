define(function() {
	var getUid = function(fn) {
		var uid = localStorage.getItem("uid") || "";
		if (!uid) { //用户名不存在
			mui.ajax("/users/api/user", {
				dataType: "json",
				success: function(data) {
					if (data.code === 1) {
						localStorage.setItem("uid", data.msg);
						fn(data.msg)
					}
				}
			})
		}else{
			fn(uid)
		}
	}
	return getUid
})
