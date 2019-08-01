var ls;
(function (ls) {
	ls.MainScene = function() {
		return {
			"true": function() { return true },
			"%22isReady%22": function() { return "isReady" },
			"%22equalTo%22": function() { return "equalTo" },
			"Global": function() { return Global },
			"%22http%3A%2F%2F%22": function() { return "http://" },
			"%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%AF%86%E7%A0%81%22": function() { return "请输入密码" },
			"%22tel%22": function() { return "tel" },
			"%22%E8%AF%B7%E8%BE%93%E5%85%A5%E8%B4%A6%E5%8F%B7%22": function() { return "请输入账号" },
			"%22%22": function() { return "" }
		}
	};
})(ls || (ls = {}));