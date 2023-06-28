/**
 * @param {object} config Client configuration for all requests
 * @param {string} config.id Project ID
 * @param {string} config.dataset Dataset name – e.g. "production"
 * @param {string} config.version API version – e.g. "2023-03-01"
 * @param {string} config.token Token key to use for authenticated requests
 * @param {boolean} config.cdn Use CDN host
 */
export function SanityClient(config) {
	const { id, dataset, version, cdn, token } = config;

	if (!id || !dataset || !version) {
		throw new Error('Sanity: project id, dataset, and API version must be defined');
	}

	/**
	 * @param {string} query GROQ Query
	 * @param {object} params Parameters object
	 */
	async function query(query = '', params = {}) {
		const host = cdn === true ? 'apicdn.sanity.io' : 'api.sanity.io';
		const encoded_query = encodeURIComponent(query);
		const encoded_params = Object.keys(params).reduce((pairs, param_key) => {
			const key = encodeURIComponent(`$${param_key}`);
			const value = encodeURIComponent(JSON.stringify(params[param_key]));
			return pairs + `&${key}=${value}`;
		}, '');

		const query_string = `?query=${encoded_query}${encoded_params}`;
		const should_switch_method = query_string.length > 11264;

		let request_url = `https://${id}.${host}/v${version}/data/query/${dataset}`;

		const request_options = {
			method: 'GET',
			headers: {},
			body: null,
		};

		if (token) {
			request_options.headers['Authorization'] = `Bearer ${token}`;
		}

		if (should_switch_method) {
			request_options.headers['Content-Type'] = 'application/json';
			request_options.method = 'POST';
			request_options.body = JSON.stringify({ query, params });
		} else {
			request_url += query_string;
		}

		// Remember to add error message in js
		const response = await fetch(request_url, request_options);
		const response_body = await response.json();

		if (response.ok) {
			return response_body.result;
		} else if (response.status === 404) {
			throw new Error('Url not existing');
		} else if (response.status === 401) {
			throw new Error('Not authorized user');
		} else if (response.status >= 500) {
			throw new Error('Server not responding');
		} else if (response.status === 400) {
			throw new Error('Bad request');
	} else {
		throw new Error(response_body.message || response_body.error.description);
		}
	}

	return {
		fetch: query,
	};
}
