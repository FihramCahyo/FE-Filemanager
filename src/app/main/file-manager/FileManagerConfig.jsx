import FileManagerPage from './FileManagerPage';

const FileManagerConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'file-manager',
			element: <FileManagerPage />
		}
	]
};
export default FileManagerConfig;
