import { createDirectus, rest, uploadFiles, createItem, createRelation } from '@directus/sdk'

const client = createDirectus('http://0.0.0.0:8055').with(rest())

console.log(client)

export const actions = {
	'upload-file': async ({ request }) => {
		// Get all formData
		const formData = await request.formData()
		// console.log('formData', formData)

		// Upload files to library
		const result = await client.request(uploadFiles(formData))
		console.log('result', result)

		// Get uploaded file ID
		let fileId = result.id

		// Create an item with the uploaded file
		// const itemUploadResults = await client.request(
		// 	createItem('Werkvorm', {
		// 		title: 'What is Directus?'
		// 	})
		// )
		// console.log('itemUploadResults', itemUploadResults)

		// const werkvormRelation = await client.request(
		// 	createRelation({
		// 		collection: 'Werkvorm',
		// 		field: 'video',
		// 		related_collection: 'directus_files'
		// 	})
		// )
		// console.log('werkvormRelation', werkvormRelation)
	}
}
