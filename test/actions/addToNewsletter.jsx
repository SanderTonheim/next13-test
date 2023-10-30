'use server'

import axios from 'axios'

export const Add = async (formData) => {
	const status = await CheckList(formData)
	return status
}

export const CheckList = async (formData) => {
	const fname = formData.get('firstName')
	const lname = formData.get('lastName')
	const email = formData.get('email')
	const company = formData.get('company')
	const API_KEY = process.env.MAILCHIMP_API_KEY
	const API_SERVER = process.env.MAILCHIMP_API_SERVER
	const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID

	const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

	const options = {
		headers: {
			Allow: 'POST',
			'Content-Type': 'application/json',
			Authorization: `api_key ${API_KEY}`,
		},
	}

	const data = {
		email_address: email,
		status: 'subscribed',
		merge_fields: {
			FNAME: fname,
			LNAME: lname,
			MMERGE3: company,
		},
	}
	try {
		const response = await axios.post(url, data, options)
		const status = response.status
		return console.log(status)
	} catch (error) {
		const status = error.response.data.status
		return status
	}
}

export const Message = ({ status }) => {}
