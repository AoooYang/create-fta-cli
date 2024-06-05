const languagePrompt = [
  {
    type: 'list',
    message: 'Please select a template',
    name: 'language',
    default: 'project-typescript', // 默认值
    choices: [
      'project-typescript',
      'project-javascript',
      'components-typescript',
      'components-javascript'
    ]
  }
];

module.exports = {
  languagePrompt
};
