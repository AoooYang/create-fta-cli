
const languagePrompt = [
  {
      type: "list",
      message: "Please select a language",
      name: "language",
      default: "typescript", // 默认值
      choices: ["typescript", "javascript"],
  }
]

module.exports = {
  languagePrompt
}