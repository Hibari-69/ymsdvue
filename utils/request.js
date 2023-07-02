let url = "http://localhost:8888"

export default function request(options) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: url + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				if (res.statusCode === 200) {

					if (res.data.code === 200) {
						resolve(res.data);
					} else if (res.data.code === 500) {
						uni.showToast({
							title: res.data.msg,
							icon: "none",
							
						})
					} else {
						resolve(res.data);
					}

				} else {
					reject(new Error(`Request failed with status code ${res.statusCode}`));
				}
			},
			fail: (err) => {
				reject(err);
			}
		});
	});
}